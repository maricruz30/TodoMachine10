import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm(){

    const { 
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    //es un estado local ... ya que no es necesario saber en tiempo real todo lo que estan escribiendo los usurarios
    // solo necesita saberlo al dar click en el boton añadir
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    };

    //prevenDefault para prevenir el comportamiento por default del formulario
    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder="Cortar Cebolla para el Almuerzo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button type="button" 
                  onClick={onCancel}  
                 className="TodoForm-button TodoForm-button--cancel">
                    Cancelar
                </button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
          
        </form>
    );

}
export {TodoForm};