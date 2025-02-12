import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch()
{
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

    return(
      <input 
      placeholder="Cortar Cebolla"
        className="TodoSearch"
        value = {searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}/>
    );
  }

  /**Al usar el value con seArchValue .... estamos vinculando el estado del input ... con el Estado que creamos */

export {TodoSearch};