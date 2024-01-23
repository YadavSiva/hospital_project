
import { useEffect, useRef, useState } from 'react';


import { GridComponent } from '../sharedcomponent/maingrid/maingrid';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { AdminHeaderComponent } from '../adminheader/adminheader';
import { deleteDepartment, getDepartment } from '../../service/department.service';

export function DepartmentComponent() {

    const propertytypeid =useRef(0);

    const [showsavemsg, setshowsavemsg] = useState(false);

    const [shoeupdatemsg, setshoeupdatemsg] = useState(false);

    const nameref = useRef();
    const descriptionref = useRef();

    const [gridheader, setgridheader] = useState([
        "ID", "Name ", "Description","option"
    ])

    const [gridbody, setgridbody] = useState([]);

    const [savebtn, setsavebtn] = useState("save");

    const [proertyId, setpropertyId] = useState(0);

  


    useEffect(() => {
        getpropertytypeDate();
    }, [])



    function clearData() {
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        
        hidesucessmsg();
        setsavebtn("Save");
        setpropertyId(0);
    }

    function hidesucessmsg() {
        setTimeout(() => {
            setshowsavemsg(false);
            setshoeupdatemsg(false);
        }, 3000)
    }
    //get property type data
    function getpropertytypeDate() {
        getDepartment().then((res) => {
            setgridbody(res.data);
        })
    }
    function editpropertytype(value) {
        nameref.current.value = value.name;
            descriptionref.current.value = value.description;
        propertytypeid.current.value = value.id;
        setsavebtn("update");
        setpropertyId(value.id);
    }

    //delet property type record
    function deletedepartmentItem(value) {
        let confirmdelet = window.confirm("you want to delet");

        if (confirmdelet == true) {
            deleteDepartment(value.id).then((res)=>{
                clearData();
                getpropertytypeDate();
            }).catch(()=>{
                alert("failed");
            })
            }
        //     let data = {
        //         id: value.id,
        //         propertytype: value.propertytype,
        //         description: value.description,
        //         isactive: false
        //     }
        //     updatepropertytype(data).then(() => {
        //         clearData();
        //         getpropertytypeDate();
        //     }).catch(() => { alert("failed to update") })

        

    }
   
    return (
        <div>
            <AdminHeaderComponent></AdminHeaderComponent>
            <h3 style={{ margin: "20px 0px", color: "#818da1", fontWeight: "200px" }}>
                            <ArrowRightCircle></ArrowRightCircle>&nbsp;Department </h3>
            <form  method="post" action="http://localhost:4005/savedepartment/">
                <div>
                    <input type="hidden"  ref={propertytypeid} id='propertyid' name='propertytypeid'></input>
                </div>
            <div className="row">
                <div className="col-2" style={{ fontVariant: "small-caps" }}>
                    <label>Name:</label>
                </div>
                <div className="col-10">
                    <input
                        type="text" className="form-control" id="name" name='name' ref={nameref}></input>
                    
                </div>

            </div>
            <br />
            
            <div className="row mt-3">
                <div className="col-2" style={{ fontVariant: "small-caps" }}>
                    <label>Description:</label>
                </div>
                <div className="col-10">
                    <textarea
                        type="text" className="form-control" id="description" name='description' ref={descriptionref}></textarea>
                    
                </div>
            </div>
            <br />
            
            <div className="row nt-3">
                <div className="col-2"></div>
                <div className="col-10">
                    <input type="submit" value={savebtn} className="btn btn-success" style={{ fontVariant: "small-caps" }}  ></input>&nbsp;
                    <input type="submit" value="Cancel" className="btn btn-danger" style={{ fontVariant: "small-caps" }} onClick={() => { clearData() }} ></input>&nbsp;

                    {
                        showsavemsg && <div className='col-5 btn btn-secondry' style={{ fontVariant: "small-caps", backgroundColor: "green", color: "white" }}>
                            Data Saved sucessfully
                        </div>
                    }
                    {
                        shoeupdatemsg && alert("Data Updated sucessfully")
                    }
                </div>
            </div>
            <div className='m-3' ><GridComponent
                title={"Property Type Table"}
                headers={gridheader}
                body={gridbody}
                editItemFromGrid={(value) => { editpropertytype(value) }}
                deletRecord={(value)=>{deletedepartmentItem(value)}}
            ></GridComponent></div>
            </form>
        </div>
    )
}