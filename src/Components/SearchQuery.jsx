import React, { useMemo, useState, useContext } from 'react';
import magnifier from '../img/magnifier.svg'
import { sportItemsContext } from '../context/context';

import '../styles/SearchQuery.css'
import { useSearch } from './hooks/useSearch';

const SearchQuery = () => {
    const items = useContext(sportItemsContext)
    const [value, setValue] = useState('')
    const searchFunc = useSearch(value, items)

    const onMagnifierClick = () => {
        // ДОБАВИТЬ МОДАЛКУ ДЛЯ НАЙДЕННЫХ ТОВАРОВ
        setValue('')
    }

    return (
        <div className='search-query'>
            <input value={value} onChange={e => setValue(e.target.value)} className='search-query-input' placeholder='Search for anything'></input>
            <img onClick={onMagnifierClick} className='search-query-magnifier' src={magnifier}></img>
        </div>
    );
}

export default SearchQuery;
