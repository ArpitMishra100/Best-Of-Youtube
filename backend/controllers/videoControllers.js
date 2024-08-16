require('dotenv').config();
const { google } = require('googleapis');

const credentials = {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  refresh_token: process.env.REFRESH_TOKEN,
};

async function authorize() {
  const oAuth2Client = new google.auth.OAuth2(
    credentials.client_id,
    credentials.client_secret
  );

  oAuth2Client.setCredentials({
    refresh_token: credentials.refresh_token
  });

  const accessToken = await oAuth2Client.getAccessToken();


  oAuth2Client.setCredentials({
    access_token: accessToken.token,
    refresh_token: credentials.refresh_token
  });

  return oAuth2Client;
}


const getVideos = async (req, res) => {
  try {
    const { query } = req.query;
    const auth = await authorize();
    const service = google.youtube('v3');
    const response = await service.search.list({
      auth: auth,
      part: 'snippet',
      q: query,
      type: 'video',
      maxResults: 10,
    });
    const videoDetailsPromises = response.data.items.map(async (item) => {
      const videoId = item.id.videoId;
      const videoResponse = await service.videos.list({
        auth: auth,
        part: 'statistics,snippet',
        id: videoId,
      });
      return videoResponse.data.items[0];
    });
    const videos = await Promise.all(videoDetailsPromises); 
     videos.sort((a, b) => {   
      const aViews = parseInt(a.statistics.viewCount, 10);
      const bViews = parseInt(b.statistics.viewCount, 10);
      return bViews - aViews;
    });
    res.json({videos: videos});
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Something went wrong' });
  }
};


module.exports = { getVideos };
