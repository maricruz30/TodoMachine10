import {CompleteIcon} from '../TodoIcon/CompleteIcon';
import {DeleteIcon} from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props){
    return(
      <li className="TodoItem">
        <CompleteIcon
          completed = {props.completed}
          onComplete = {props.onComplete}
        />
        {/*         <span className= {`Icon Icon-check  ${props.completed && "Icon-check--active"}`}
        onClick={props.onCompleted}
        >
            V
        </span>*/}

        <p className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>
            {props.text}
        </p>
        {/**        <span className="Icon Icon-delete"
         onClick={props.onDelete}
        >
            X
        </span> */}
        <DeleteIcon
          onDelete = {props.onDelete}
        />

      </li>
    );
  }

  {/**Usamos las comillas `` y los corchetes en span para poder colocar codigo js */}
  
  export {TodoItem};