import React, { useEffect, useState } from 'react';

// param 'getItems' is callback
export default function ItemsList( {getItems} ) {
    const [items, setItems] = useState([]);

    useEffect( () => {
        console.log('get items call useEffect');
        const newItems = getItems();
        setItems(newItems);

    }, [getItems]);
    
    return(
        <ul>
            {items.map( i => <li key={i}> {i} </li>)}
        </ul>
    );
}
