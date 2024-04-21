import React from 'react'
import './MainPage.css'
import { ReactComponent as SearchLogo } from './icons/Search.svg';

function MainPage() {
    return (
        <div className='container'>
            <div className='search__container'>
                <SearchLogo className='searchLogo' />
                <input placeholder='Введите название города' type='text'/>
            </div>
        </div>
    )
}

export default MainPage