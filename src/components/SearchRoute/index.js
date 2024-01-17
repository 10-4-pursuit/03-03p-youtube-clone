import React from "react";
import SearchBar from "../SearchBar";
import VideoList from "../VideoList";
import { useSearchParams } from "react-router-dom";
import { dataFetching } from "../../helpers/dataFetching";

export default function SearchRoute() {

    // State for storing the list of videos fetched based on the search query
    const [videos, setVideos] = React.useState([]);

    const [searchParams] = useSearchParams();

    const searchQuery = searchParams.get('searchQuery') || 'No Query';

    React.useEffect(() => {
        const getSearchResult = async () => {
            const fetchData = await dataFetching(searchQuery);
            setVideos(fetchData.items);
        }
        getSearchResult();
    }, [searchQuery]);

    React.useEffect(() => {
        const getSearchResult = async () => {
            const fetchData = await dataFetching(searchQuery);
            setVideos(fetchData.items);
        }
        getSearchResult(); 
    }, [searchParams, searchQuery])

    return (
        <div>
            {/* You can pass searchTerm to SearchBar if it needs the parameter */}
            <SearchBar />

            {videos.length > 0 && (
                <>
                    <h2>Search Results</h2>
                    <VideoList videos={videos} />
                </>
            )}
        </div>
    )
}