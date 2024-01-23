import {  BoxArrowRight, Globe, Person } from 'react-bootstrap-icons';
import './adminheader.css';
import { Link } from 'react-router-dom';

export function AdminHeaderComponent(){
    return(
        <div>
            <div>
            <h2 style={{textAlign:'center', fontWeight:"300px"}}>Bayanno Hospital Management System</h2>
            <div className='row'>
                <div className='col-2'><Person></Person>&nbsp;Admin</div>
                <div className='col-6'></div>
                <div className='col-2 website'>
                    <Link to="/home"  style={{color:"#373E4A", textDecoration:"none"}}>
                    <span><Globe></Globe>&nbsp;Website</span>
                    </Link>
                    </div>
                <div className='col-2 logout'>
                    <Link to="/login" style={{color:"#373E4A", textDecoration:"none"}}>
                    <span><BoxArrowRight></BoxArrowRight>&nbsp;Logout</span>
                    </Link>
                    </div>
            </div>
            <hr style={{marginTop:"0px"}}></hr>
            
        </div>
            
        </div>
    )
}