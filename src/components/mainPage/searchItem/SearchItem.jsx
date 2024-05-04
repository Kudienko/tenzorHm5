import React, { useState } from 'react'
// import { ReactComponent as SearchLogo } from "./icons/Search.svg";
import './SearchItem.scss'
import { SearchBar } from './components/searchBar/SearchBar';
import { SearchResultList } from './components/searchResultsList/SearchResultList';




function SearchItem() {
    const [results, setResults] = useState([])

    return (
        <>
            <div className="search_bar_container">
                <SearchBar setResults={setResults}/>
                <SearchResultList results={results}/>
            </div>
        </>
    )
}

export default SearchItem