import React, { useEffect, useState } from 'react'
import { ReactComponent as SearchLogo } from './icons/Search.svg'
import './SearchBar.scss'
import cities from '../../../../../russia.json'

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("")
    
    const filterCities = (input, listOfCities) => {
        if (!input) {
            return listOfCities;
        }
        return listOfCities.filter(({city}) => 
            city.toLowerCase().includes(input.toLowerCase())
        )
    }
    const setVisible = () => {
        document.getElementsByClassName('resilts_list')[0].style.display = "block";
    }

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredCities = filterCities(input, cities);
            setResults(filteredCities)
        }, 300)
        return () => clearTimeout(Debounce)
    }, [input, setResults])

    
    

    return (
        <div className='input_wrapper'>
            <SearchLogo id="search_icon" />
            <input type="text" placeholder='Type to search...' value={input} onChange={(e) => setInput(e.target.value)} onClick={setVisible}/>
        </div>
    )
}
