import React from "react";

function useLocalStorage(itemName, initialValue){

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  //esta parte de nuestra app .. ahora sera asincrona ... es decir que ahora se va a demorar
  React.useEffect(() =>{
    setTimeout(()=>{

      try {
        let localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if(!localStorageItem){
          localStorage.setItem( itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{
      
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
    
        setLoading(false);
        
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    },2000);
  }, []);




  //un nuevo arrays de todos 
  const saveItem = (newItem) =>{
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  //es mejor mansarlos asi en un objeto y no en un array ... para no tener que memorizar la posicion al llamarlos
  return {
    item,
    saveItem,
    loading,
    error,
  };

}

export {useLocalStorage};