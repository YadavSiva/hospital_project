import { ArrowRightCircle } from 'react-bootstrap-icons';

import './account.component.css';
import { AdminHeaderComponent } from '../adminheader/adminheader';
import { AccountPasswordComponent } from '../account password/accountpassword.component';
export function AccountComponent() {
    return (
        <div>
            <AdminHeaderComponent></AdminHeaderComponent>
            <div className='row'>
                <div className='col-4'>
                    <h3 style={{ margin: "20px 0px", color: "#818da1", fontWeight: "200px" }}>
                        <ArrowRightCircle></ArrowRightCircle> Manage Profile</h3>
                </div>
            </div>
           
                <div className='profile'>
                    <div>
                        <h4 >Edit Profile</h4>
                        <form className='container-account' method='post' action='http://localhost:4005/saveAccount/'>
                            <div className='row' style={{ color: '#818A91 ' }}>
                                <div className='col-3'>
                                    <label><strong><h6>Name</h6></strong></label>
                                </div>
                                <div className='col-8'>
                                    <input type='text' id="name" name="name" class="form-control"></input>
                                </div>
                            </div>
                            <br></br>
                            <div className='row' style={{ color: '#818A91 ' }}>
                                <div className='col-3'>
                                    <label><strong><h6>Email</h6></strong></label>
                                </div>
                                <div className='col-8'>
                                    <input type='text' id="email" name="email" class="form-control"></input>
                                </div>
                            </div>
                            <br></br>
                            <div className='row' >
                                <div className='col-3'></div>
                                <div className='col-4' >

                                    <input type='submit' value="Update Profile" className='account-update-button' ></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <br></br>
               <AccountPasswordComponent></AccountPasswordComponent>
            
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