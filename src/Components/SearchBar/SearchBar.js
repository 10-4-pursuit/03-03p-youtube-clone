import React from "react";

export default function SearchBar({ handleSubmit, searchQuery, setSearchQuery }) {
    return (
        <form onSubmit={handleSubmit} className="search-bar-container">
            <label className="search-label">
                <input 
                    type="text"
                    name="search"
                    className="search-input"
                    placeholder="enter search"
                    value={searchQuery}
                    onChange={event => setSearchQuery(event.target.value)}
                    />
            </label>

            <input 
                type="submit"
                value="Search" 
                className="search-button" 
                />
        </form>
    )
}