import { PencilSquare, Trash } from "react-bootstrap-icons";
import './gridcell.component.css';

export function GridCell(props){
    let values = Object.values(props.value)
    // create function for edit

    
    return(
        <>
        {
             values.map((item)=> <td>{item}</td>)
        }
        
        </>
    )
}