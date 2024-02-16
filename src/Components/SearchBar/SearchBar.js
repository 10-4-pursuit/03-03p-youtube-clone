import React from "react";

// Define the SearchBar component
export default function SearchBar({ handleSubmit, searchQuery, setSearchQuery }) {
    // Render the search bar form
    return (
        <form onSubmit={handleSubmit} className="search-bar-container">
            <label className="search-label">
                {/* Input field for entering search query */}
                <input 
                    type="text"
                    name="search"
                    className="search-input"
                    placeholder="enter search"
                    value={searchQuery}
                    onChange={event => setSearchQuery(event.target.value)}
                    />
            </label>

            {/* Search button */}
            <input 
                type="submit"
                value="Search" 
                className="search-button" 
                />
        </form>
    )
}