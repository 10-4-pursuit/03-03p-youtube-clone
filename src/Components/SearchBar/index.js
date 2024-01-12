import React from "react";

function SearchBar({handleSubmit, searchQuery, setSearchQuery}) {
    return(
        <form onSubmit={handleSubmit}>
            <label>
                <input 
                    type="text"
                    name="searchBar"
                    placeholder="enter search"
                    value={searchQuery}
                    onChange={event => setSearchQuery(event.target.value)}
                    />
            </label>
            <input type="submit" value="Search" />
        </form>
    )
}

export default SearchBar;