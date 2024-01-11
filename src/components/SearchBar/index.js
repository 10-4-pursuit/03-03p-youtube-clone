import React from "react"

export default function SearchBar({ handleSubmit, searchTerm, setSearchTerm }) {

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="text"
                    name="searchBar"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={event => setSearchTerm(event.target.value)}
                />
            </label>
            <input type="submit" value="Search" />
        </form>
    );
}

