import React from "react";
import { useLocalStorage } from "./UseLocalStorage";

const TodoContext =  React.createContext();


//Ya se nos da un Provider y un Consumer ..... pero lo mejor y lo que mas se hace es crear cada uno personalizado
//Beneficios
// 1. Nombre mas comodo
// 2. Para exportarlo
// 3. Para encapsular la logica que queremos compartir entre varios de los componentes

function TodoProvider({children}){

    const {
        item : todos, 
        saveItem: saveTodos, 
        loading, 
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter( todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      /**Aqui la validacion es con el texto ... si se encuentra algo de este */
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLocaleLowerCase();
          const searchText = searchValue.toLocaleLowerCase();
         return todoText.includes(searchText);
        }
      );
      const addTodo = (text)=>{
        const newTodos = [...todos];
        newTodos.push({text,
          completed: false,
        });
        saveTodos(newTodos);
      }
      const completeTodo = (text) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos);
      }; 
    

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo, 
        }}>
            {/**Encapsularemos cualquier componenete que necesitamos ... pero para exponer
             *  en children .... necesitamos envolver en value */}
            {children}
            
        </TodoContext.Provider>
    );
}


export {TodoContext, TodoProvider};