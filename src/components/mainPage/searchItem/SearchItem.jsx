import React, { useEffect, useState } from 'react'
// import { ReactComponent as SearchLogo } from "./icons/Search.svg";
import './SearchItem.scss'
import axios from "axios";
import { SearchBar } from './components/searchBar/SearchBar';
import { SearchResultList } from './components/searchResultsList/SearchResultList';




function SearchItem() {

    // http://127.0.0.1:8000/api/get_city?city=${searchItem}

    // const [APIData, setAPIData] = useState([])
    // const [filteredData, setFilteredData] = useState([])
    // const [searchItem, setSearchItem] = useState(['Москва'])

    // useEffect(() => {
    //      const fetchData = () => {
    //         try {
    //             axios.get(`http://127.0.0.1:8000/api/get_city?city=${searchItem}`)
    //                 .then((response) => {
    //                     setAPIData(response.data);
    //                 })
    //             console.log(APIData);
    //         } catch (error) {
    //             console.log('pidor');
    //         }
    //     }
    //     fetchData();
    //     setFilteredData(APIData);
    // }, [searchItem])

    // const handleChange = (e) => {
    //     setSearchItem(e.target.value)
    // }
    const [results, setResults] = useState([])

    return (
        <>
            {/* <div className="search__container">
                <SearchLogo className="searchLogo" />
                <input placeholder="Введите название города" type="text" onChange={e => handleChange(e)} />
                { filteredData.cod !== '400' ? filteredData.map((city, key) => (
                    <div className="cities" key={key}>
                        {city.name}
                    </div>
                )) : console.log(' нет данных')}
            </div> */}
            <div className="search_bar_container">
                <SearchBar setResults={setResults}/>
                <SearchResultList results={results}/>
            </div>
        </>
    )
}

export default SearchItem