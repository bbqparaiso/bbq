import './SearchBar.css'
import { useState, useEffect } from 'react'

const SearchBar = ({ filterContacts, setCurrentFilter }) => {
    const [value, setValue] = useState('')
    const [checkValue,setCheckValue] = useState(true);

    useEffect(() => {
        // Just execute after check value is false
        if (!checkValue) {
            console.log('primer search bar')
            const timeoutId = setTimeout(() => filterAndSetContacts(), 300);
            return () => clearTimeout(timeoutId);
        //Set check value to false when value is not empty
        } else if(value || !checkValue){
            setCheckValue(false);
            console.log('desde use search bar')
            const timeoutId = setTimeout(() => filterAndSetContacts(), 300);
            return () => clearTimeout(timeoutId);
        }
    }, [value]);

    const filterAndSetContacts = () => {
        console.log('desde filterAndSetContacts')
        filterContacts(value)
        setCurrentFilter(value)
    }

    const handleOnChange = (event) => {
        setValue(event.target.value)
    };

    return (
        
        <form class="searchBar">
            <label for="search">Search</label>
            <input id="search" type="text" pattern=".*\S.*" onChange={handleOnChange} value={value} required />
            <span class="caret"></span>
        </form>
    )
}

export default SearchBar