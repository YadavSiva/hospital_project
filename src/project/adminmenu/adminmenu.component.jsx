import './adminmenu.component.css';
import img5 from '../../assets/images/img_5.jpg';
import avatar from '../../assets/images/avatar.jpg';
import { CapsulePill, Envelope, GearWide, Laptop, List, ListTask, Person, PersonFill, Prescription2, Tag } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
export function AdminMenuComponent(){
    return(
        <div style={{ backgroundColor: '#2c2e3e', color: 'white' }}>
            <div className="sidebar-menu">
                <header class="logo-env">
                    {/* <!-- logo --> */}

                    <div className="logo" >
                        <a href="https://demo.creativeitem.com/bayanno/login">
                            <img src={img5} style={{ height: '60px' }}></img>
                        </a>
                        <ListTask style={{ color: 'white', marginLeft: '180px', fontSize: '35px' }}></ListTask>
                    </div>
                </header>
            </div>
            <br></br> <br></br>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-2'>
                    <img src={avatar} className='admin_logo' style={{ width: '180%', height: '50px', borderRadius: '35px' }}></img>
                </div>
                <div className='col-1'></div>
                <div className='col-4'><h6>Welcome</h6>
                    <h5>Mr.Admin</h5></div>
            </div>
            <div>
                <ul className='menu'>
                    <a href='http://localhost:3000/admin/adminpage' style={{color:'white',textDecoration:'none'}}>
                    <li className='menu-li'><Laptop></Laptop> &nbsp;    Dashboard</li>
                    </a>
                    <br></br>
                    <a href='/admin/department'style={{color:'white',textDecoration:'none'}}>
                    <li className='menu-li'><Person></Person>  &nbsp;       Department</li>
                    </a>
                    <br></br>
                    <a href='/admin/admindoctor'style={{color:'white',textDecoration:'none'}}>
                    <li className='menu-li'><Person></Person>  &nbsp;         Doctor</li>
                    </a>
                    <br></br>
                    <a  href='/admin/patient'style={{color:'white',textDecoration:'none'}}>
                    <li className='menu-li'><Person></Person> &nbsp;     Patient</li> 
                    </a>
                    <br></br>
                    <a href='/admin/nurse'style={{color:'white',textDecoration:'none'}}>
                    <li className='menu-li'><Prescription2></Prescription2>  &nbsp;  Nurse</li> <br></br>
                    </a>
                    <a href='/admin/pharmacist'style={{color:'white',textDecoration:'none'}}>
                    <li className='menu-li'><CapsulePill></CapsulePill>  &nbsp;  Pharmacist</li> <br></br>
                    </a>
                    <a href='/admin/laboratorist'style={{color:'white',textDecoration:'none'}}>
                    <li className='menu-li'><PersonFill></PersonFill>  &nbsp;  Laboratorist</li> <br></br>
                    </a>
                    <a href='/admin/accountant'style={{color:'white',textDecoration:'none'}}>
                    <li className='menu-li'><Person></Person>   &nbsp;  Accountant</li> <br></br>
                    </a>
                    <a href='/admin/recetionist'style={{color:'white',textDecoration:'none'}}>
                    <li className='menu-li'><Person></Person>  &nbsp;  Recetionist</li> 
                    </a>
                    <li className='menu-li' style={{ textDecoration: "none", color: "white", marginLeft: "0px" }} >
                        <div className="accordion menu-li" id="accordionExample">
                            <div className="accordion-item" id="btnss">
                                <h2 className="accordion-header">
                                    <button style={{ textDecoration: "none", color: "white", marginRight: "80px" }} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                                        <a>
                                            <li style={{ textDecoration: "none", color: "white" }}>
                                                
                                                <GearWide></GearWide>&nbsp;&nbsp;&nbsp;Monitor-Hospital</li></a> &nbsp;
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <Link to="/header-payment" style={{ textDecoration: "none", color: "white" }}>  <p>Payment History</p> </Link>

                                        <Link to="/header-bed" style={{ textDecoration: "none", color: "white" }}> <p>Bed Allotment</p>  </Link>

                                        <Link to="/header-blood" style={{ textDecoration: "none", color: "white" }}> <p>Blook Bank</p> </Link>

                                        <Link to="/header-medicine" style={{ textDecoration: "none", color: "white" }}><p>Medicine</p> </Link>

                                        <Link to="/header-operation" style={{ textDecoration: "none", color: "white" }}><p>Operation Report</p> </Link>

                                        <Link to="/header-birth" style={{ textDecoration: "none", color: "white" }}><p>Birth Report</p> </Link>

                                        <Link to="/header-death" style={{ textDecoration: "none", color: "white" }}> <p>Death Report</p> </Link>
                                    </div>
                                </div>
                            </div>
                        </div></li> 
                    <li className='menu-li'><Tag></Tag>  &nbsp;   Payroll</li> <br></br>
                    <a href='/admin/notice'style={{color:'white',textDecoration:'none'}}>
                    <li className='menu-li'><List></List>   &nbsp;  Notice Board</li> <br></br>
                    </a>
                    <li className='menu-li'><GearWide></GearWide> &nbsp;  Settings</li> <br></br>
                    <li className='menu-li'><Laptop></Laptop>   &nbsp;  FontEnd</li> <br></br>
                    <a href='/admin/contactemail'style={{color:'white',textDecoration:'none'}}>
                    <li className='menu-li'><Envelope></Envelope>&nbsp;   Contact Emails</li> <br></br>
                    </a>
                    <a href='/admin/account'style={{color:'white',textDecoration:'none'}}>
                    <li className='menu-li'><Person></Person>  &nbsp;  Account</li> <br></br>
                    </a>
                </ul>
            </div>
        </div>
    )
}