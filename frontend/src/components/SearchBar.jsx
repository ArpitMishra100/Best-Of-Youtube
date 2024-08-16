import React, { useState } from 'react';

const SearchBar = ({ onSearch , loading, setLoading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for videos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style= {{border: "1px solid aqua" , backgroundColor: "black", color: "white", fontWeight: "700", height: "50px"}}
          
        />
        <button className="btn-grad" type="submit"  disabled={query.trim() === ""} onClick={() => {setLoading(true)}} >
         { loading &&  <div class="spinner-border text-light" role="status">
</div>} 
{!loading && "Search"}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
