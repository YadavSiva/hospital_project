import { useEffect, useState } from 'react';
import { GridComponent } from '../sharedcomponent/maingrid/maingrid';
import './patient.component.css';
import { deletepatient, getPatient } from '../../service/patient.service';
import { AdminHeaderComponent } from '../adminheader/adminheader';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import './patient.component.css';
export function PatientComponent() {
    const [showPopup, setShowPopup] = useState(false);


    // use effect
    useEffect(() => {
        getPatientData();
    }, [])



    // Grid component data
    const [PatientGridHeaders, setPatientGridHeaders] = useState([
        "Id", "Name", "Email", "Phone", "Sex", "Birth Date", "Age", "Blood Group", "Option"
    ]);
    const [PatientGridData, setPatientGridData] = useState([]);


    // Function to open the popup
    const openPopup = () => {
        setShowPopup(true);
    };

    // Function to close the popup
    const closePopup = () => {
        setShowPopup(false);
    };

    // create function for get data from api
    function getPatientData() {
        getPatient().then((res) => {
            setPatientGridData(res.data);
        })
    }



    // create function for delete
    function deletePatientItem(value) {
        let confirmDelete = window.confirm("Are You sure You want To Delete ?");

        if (confirmDelete == true) {
            deletepatient(value.id).then((res) => {
                getPatientData();

            })
        }
    }
    return (
        <div>
            <AdminHeaderComponent></AdminHeaderComponent>
            <form className="container Bayanno-form">
                <div className='row'>
                    <div className='col-3'>
                        <h3 style={{ margin: "20px 0px", color: "#818da1", fontWeight: "200px" }}>
                            <ArrowRightCircle></ArrowRightCircle>&nbsp; Patient</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-9'></div>
                    <div className='col-3'>
                        <div className="container mt-4">
                            <button type="button" className="add_button" onClick={openPopup}>
                                + Add Patient
                            </button>
                        </div>
                    </div>
                </div>
                {showPopup && (
                    <div className="popup">
                        <div className="popup-content">
                            <div className='row'>
                                <div className='col-11'>
                                    <h4>Bayanno Hospital Mangaement System</h4>
                                </div>
                                <div className='col-1'>
                                    <button type="button" class="btn-close" aria-label="Close" onClick={closePopup}></button>
                                </div>
                            </div>

                            <hr></hr>
                            <h2>Add Patient</h2>
                            <br></br>

                            <form className='container' method='post' action='http://localhost:4005/savePatient/' >

                                <div className="row">
                                    <div className='col-3'>
                                        <label>Name</label>
                                    </div>
                                    <div className='col-7'>
                                        <input
                                            type="text" className="form-control"
                                            placeholder="username"
                                            id="name" name="name"


                                        />
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className='col-3'>
                                        <label>Email</label>
                                    </div>
                                    <div className='col-7'>
                                        <input
                                            type="text" className="form-control"
                                            placeholder="Email"
                                            id="email" name="email"


                                        />
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className='col-3'>
                                        <label>Phone</label>
                                    </div>
                                    <div className='col-7'>
                                        <input
                                            type="text" className="form-control"
                                            placeholder="Phone"
                                            id="phone" name="phone"

                                        />
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className='col-3'>
                                        <label>Sex</label>
                                    </div>
                                    <div className='col-7'>
                                        <input
                                            type="text" className="form-control"
                                            placeholder="Sex"
                                            id="sex" name="sex"


                                        />
                                    </div>
                                </div>

                                <br></br>
                                <div className="row">
                                    <div className='col-3'>
                                        <label>Birth Date</label>
                                    </div>
                                    <div className='col-7'>
                                        <input
                                            type="date" className="form-control"
                                            placeholder="Birth Date"
                                            id="birthDate" name="birthDate"


                                        />
                                    </div>
                                </div>

                                <br></br>
                                <div className="row">
                                    <div className='col-3'>
                                        <label>Age</label>
                                    </div>
                                    <div className='col-7'>
                                        <input
                                            type="text" className="form-control"
                                            placeholder="Age"
                                            id="age" name="age"


                                        />
                                    </div>
                                </div>

                                <br></br>
                                <div className="row">
                                    <div className='col-3'>
                                        <label>Blood Group</label>
                                    </div>
                                    <div className='col-7'>
                                        <input
                                            type="text" className="form-control"
                                            placeholder="Blood Group"
                                            id="bloodGroup" name="bloodGroup"


                                        />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-3'></div>
                                    <div className='col-7'>
                                        <input
                                            type="submit"
                                            value="Save"
                                            className="btn btn-success w-150 mt-3"

                                        ></input>
                                        &nbsp; &nbsp;&nbsp;
                                        <input
                                            type="submit"
                                            value="Cancel"
                                            className="btn btn-danger w-150 mt-3"

                                        ></input>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Grid Component */}

                <GridComponent

                    headers={PatientGridHeaders}
                    body={PatientGridData}

                    deletRecord={(value)=>{deletePatientItem(value)}}
                ></GridComponent>
            </form>

            <br></br> <br></br>
            <footer className="main">
                © 2017 <strong>Bayanno Hospital Management System</strong>
                <strong className="pull-right"> VERSION 4.0</strong>
                Developed by
                <a >Creativeitem</a>
            </footer>
        </div>
    )
}