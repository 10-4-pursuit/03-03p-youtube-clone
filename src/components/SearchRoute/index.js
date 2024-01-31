import React from "react";
import VideoList from "../VideoList";
import { useSearchParams } from "react-router-dom";
import VideoContext from "../../helpers/VideoContext";

export default function SearchRoute() {

    const {searchResults, getSearchResults} = React.useContext(VideoContext)

    const [searchParams] = useSearchParams();

    const searchQuery = searchParams.get('searchQuery') || 'No Query';

    React.useEffect(() => {
        getSearchResults(searchQuery); 
    }, [searchQuery]);

    return (
        <div>
            {/* You can pass searchTerm to SearchBar if it needs the parameter */}

            {searchResults.length > 0 && (
                <>
                    <h2>Search Results</h2>
                    <VideoList videos={searchResults} />
                </>
            )}
        </div>
    )
}