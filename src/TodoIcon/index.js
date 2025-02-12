import {ReactComponent as CheckSVG} from './check.svg';
import {ReactComponent as DeleteSVG} from './delete.svg';
import  './TodoIcon.css';

const IconTypes = {
    "check": (color) => <CheckSVG className='Icon-svg' fill={color}/>,
    "delete": (color) => <DeleteSVG className='Icon-svg' fill={color}/>
};

function TodoIcon({type, color, onClick}){
    return(
        <span className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {IconTypes[type] (color)}
            
        </span>
    );
}

export {TodoIcon};