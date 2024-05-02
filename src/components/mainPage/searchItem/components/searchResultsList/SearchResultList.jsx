import React from 'react'
import './SearchResultList.scss'
import { SearchResult } from '../searchResult/SearchResult'

export const SearchResultList = ({ results }) => {
    console.log(results)
    return (
        <div className='resilts_list'>
            {
                // results !== undefined ? results.map((result, id) => {
                //     return <div key={id}>{result.name}</div>
                // }) : null
                results.map((result, id) => {
                    return <SearchResult result={result} key={id}/>
                })
            }
        </div>
    )
}
