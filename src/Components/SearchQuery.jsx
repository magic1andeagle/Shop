import React, { useMemo, useRef, useState } from 'react';
import styles from '../styles/SearchQuery.css'
import magnifier from '../img/magnifier.svg'

const SearchQuery = () => {
    const [value, setValue] = useState('')

    return (
        <div className='search-query'>
            <input value={value} onChange={e => setValue(e.target.value)} className='search-query-input' placeholder='Search for anything'></input>
            <img className='search-query-magnifier' src={magnifier}></img>
        </div>
    );
}

export default SearchQuery;
