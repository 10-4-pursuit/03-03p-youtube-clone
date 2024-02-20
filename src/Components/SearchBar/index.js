import React from "react";
import './searchBar.css'

function SearchBar({handleSubmit, searchQuery, setSearchQuery}) {
    return(
        <form onSubmit={handleSubmit} className="search-bar-container">
            <label>
                <input 
                    type="text"
                    name="searchBar"
                    className="search-input"
                    placeholder="enter search"
                    value={searchQuery}
                    onChange={event => setSearchQuery(event.target.value)}
                    />
            </label>
            <input type="submit" value="Search" className="search-button" />
        </form>
    )
}

export default SearchBar;