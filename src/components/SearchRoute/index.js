import React from "react";
import SearchBar from "../SearchBar";
import { useLocation } from "react-router-dom";
import dataFetching from "../../helpers/dataFetching";


export default function SearchRoute() {
    const [searchTerm, setSearchTerm] = React.useState("");

    const location = useLocation();

    // Function to parse query string
    const useQuery = () => {
        return new URLSearchParams(location.search)
    }

    React.useEffect(() => {
        const query = useQuery();
        setSearchTerm(query.get("search"));
    }, []); 

    const handleSubmit = (event) => {
        event.preventDefault();
        dataFetching(searchTerm)
    };
    
    return(
        <div>
            {/* You can pass searchTerm to SearchBar if it needs the parameter */}
            <SearchBar handleSubmit={handleSubmit} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
    )
}