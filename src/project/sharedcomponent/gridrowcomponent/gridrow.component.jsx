import { GridCell } from "../gridcomponentcell/gridcell.component";


export function GridRow(props){
    return(
        <tr>
            {
                <GridCell value={props.rowdata} ></GridCell>
            }
        </tr>
    )
}