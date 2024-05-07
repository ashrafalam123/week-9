import React, { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

function useDebounce(value,timer){
    const [debouncedValue,setDebouncedValue] = useState(value);
    useEffect(()=>{
        let timeoutNumber = setTimeout(()=>{
            setDebouncedValue(value)
        },timer)

        return(()=>{
            clearTimeout(timeoutNumber);
        })
    },[value])
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default SearchBar;