import { PencilSquare, Trash } from "react-bootstrap-icons";
import './maingrid.css';

export function GridComponent(props) {
    // function for editItem
    function editItem(item) {
        alert("Data fetched from the db..");
        props.editItemFromGrid(item);
    }

    function deletItem(item){
        props.deletRecord(item);
    }

    return (
        <div>
            <h3 style={{ textAlign: "center", fontVariant: "small-caps" }}></h3>
            <table className="table table-bordered table-hover table-striped">
                <thead className="table-primary table-light ">
                    <tr>
                        {
                            props.headers.map((item) => <th >{item}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {

                        props.body.map((item) => <tr>

                            {

                                Object.values(item).map((item) => <td>{item}</td>)
                            }

<td>
                                <button type='button' className ="edit-icon">

                                <PencilSquare    onClick={() => { editItem(item) }}></PencilSquare> Edit
                                </button>
                             <button type='button' className='delete-icon' >
                                <Trash  onClick={() => {deletItem(item) }}></Trash> Delete
                                </button>
                            </td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    )
}
