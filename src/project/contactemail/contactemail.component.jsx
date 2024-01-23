import { useState } from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { AdminHeaderComponent } from '../adminheader/adminheader';
import { GridComponent } from '../sharedcomponent/maingrid/maingrid';
export function ContactEmailsComponent() {
    // Grid component data
    const [adminContactEmailsGridHeaders, setadminContactEmailsGridHeaders] = useState([
        "Id", "Date", "Name", "Email","Phone","Address","Message","Option"
    ]);
    const [adminContactEmailsGridData, setadminContactEmailsGridData] = useState([]);
    return (
        <div>
            <AdminHeaderComponent></AdminHeaderComponent>
            <div className='row'>
          <div className='col-5'>
            <h3 style={{ margin: "20px 0px", color: "#818da1", fontWeight: "200px" }}>
              <ArrowRightCircle></ArrowRightCircle>&nbsp; Contact Emails</h3>
          </div>
        </div>
            <GridComponent
                headers={adminContactEmailsGridHeaders}
                body={adminContactEmailsGridData}
            ></GridComponent>
            <br></br> <br></br>
            <footer className="main">
            <div className="row">
                    <div className="col-6">
                        © 2017 <strong>Bayanno Hospital Management System</strong>

                        Developed by
                        <a >Creativeitem</a>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-2">
                        <strong className="pull-right"> VERSION 4.0</strong>
                    </div>
                </div>
            </footer>
        </div>
    )
}