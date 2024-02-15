import React from "react";
import VideoList from "../VideoList";
import { useSearchParams } from "react-router-dom";
import VideoContext from "../../helpers/VideoContext";
import Pagination from "../Pagination";

export default function SearchRoute() {

    const { searchResults, getSearchResults } = React.useContext(VideoContext)

    const [searchParams] = useSearchParams();

    const searchQuery = searchParams.get('searchQuery') || 'No Query';

    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 10; // Set according to your preference

    // Calculate current videos for pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentVideos = searchResults.slice(indexOfFirstItem, indexOfLastItem)

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    React.useEffect(() => {
        if (searchQuery) {
            getSearchResults(searchQuery);
        }
    }, [searchQuery]);

    return (
        <div>
            {/* You can pass searchTerm to SearchBar if it needs the parameter */}
            <h2>Search Results for "{searchQuery}</h2>
            {searchResults.length > 0 ? (
                <>
                    <VideoList videos={currentVideos} displayMode="page" />
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={searchResults.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />

                </>
            ) : (
                <p>No results found.</p>

            )}
        </div>
    )
}