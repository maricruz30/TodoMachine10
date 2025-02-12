import { TodoCounter } from '../TodoCounter';
import React from 'react';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmtyTodos } from '../EmtyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { TodoContext} from '../TodoContext';
import { Modal } from '../Modal';


function AppUI (){

  const   {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

    return (
        <React.Fragment>
          <TodoCounter/>
          <TodoSearch/>

        {/**Encapsulamos ya dentro de Consumer ... para empezar a consumir las propiedades */}
         {/**Aqui renderizamos los todos a partir de la busque o de los todos que coinciden con search .... 
          * necesitamos usar la funcion en el todoContext Debido al metodo de renderizado ... Todo esto era para cuando
          * usabamos el Consumer... pero por comodidad y orden ... mejor usamos el UseContext
          */}
            <TodoList>
            {loading && (
            <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>
          )}
              {error && <TodosError/>}
              {(!loading && searchedTodos.lengh === 0) && <EmtyTodos/>}
              {searchedTodos.map(todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete = {() => completeTodo(todo.text)}
                onDelete ={()=> deleteTodo(todo.text)}
                /> 
               
              ))}
            </TodoList>
    
        <CreateTodoButton setOpenModal={setOpenModal}/>
        { openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}

    
         {/**Ese key ... sirve como un id identificador para recorrer el array */}
        </React.Fragment>
    );
}

export {AppUI};