import { ArrowRightCircle, PlusSquare } from 'react-bootstrap-icons';
import './adminpage.component.css';
import { AdminHeaderComponent } from '../adminheader/adminheader';

export function AdminPageComponent(){
    return(
        <div>
            <AdminHeaderComponent></AdminHeaderComponent>
            <br />
            <h3 style={{margin:"20px 0px", color:"#818da1", fontWeight:"200px"}}>
                <ArrowRightCircle></ArrowRightCircle>&nbsp; Admin Dashboard</h3>
                <div className="row">
    <div className="col-sm-3">
        <a >
            <div className="tile-stats tile-white tile-white-primary">
                <div className="icon"><i className="fa fa-user-md"></i></div>
                <div> <strong style={{fontSize:'30px'}}>2</strong></div>
                <a href='/admin/admindoctor' style={{textDecoration:'none'}}>
                <h3 style={{color:'black'}}>Doctor</h3>
                </a>
            </div>
        </a>
    </div>

    <div className="col-sm-3">
        <a >
            <div className="tile-stats tile-white-red">
                <div className="icon"><i className="fa fa-user"></i></div>
                <div> <strong style={{fontSize:'30px',color:' #f56954'}}>1</strong></div>
                <a href='/admin/patient'style={{textDecoration:'none'}}>
                <h3 style={{    color:' #f56954'}}>Patient</h3>
                </a>
            </div>
        </a>
    </div>

    <div className="col-sm-3">
        <a >
            <div className="tile-stats tile-white-aqua">
                <div className="icon"><i className="fa fa-plus-square"></i></div>
                <div> <strong style={{fontSize:'30px',color:' #00c0ef'}}>1</strong></div>
                <a href='/admin/nurse'style={{textDecoration:'none'}}>
                <h3 style={{color: '#00c0ef'}}>Nurse</h3>
                </a>
            </div>
        </a>
    </div>

    <div className="col-sm-3">
        <a>
            <div className="tile-stats tile-white-blue">
                <div className="icon"><i className="fa fa-medkit"></i></div>
                <div> <strong style={{fontSize:'30px',color:' #0073b7'}}>1</strong></div>
                <a href='/admin/pharmacist'style={{textDecoration:'none'}}>
                <h3 style={{    color: '#0073b7'}}>Pharmacist</h3>
                </a>
            </div>
        </a>
    </div>
</div>
<div className="row">
    <div className="col-sm-3">
        <a >
            <div className="tile-stats tile-white tile-white-primary">
                <div className="icon"><i className="fa fa-user-md"></i></div>
                <div> <strong style={{fontSize:'30px',color:' #0073b7'}}>1</strong></div>
                <a href='/admin/laboratorist'style={{textDecoration:'none'}}>
                <h3 style={{color: '#00b29e'}}>Laboratorist</h3>
                </a>
            </div>
        </a>
    </div>

    <div className="col-sm-3">
        <a >
            <div className="tile-stats tile-white-red">
                <div className="icon"><i className="fa fa-user"></i></div>
                <div> <strong style={{fontSize:'30px',color:' #ba79cb'}}>1</strong></div>
                <a href='/admin/accountant'style={{textDecoration:'none'}}>
                <h3 style={{color: '#ba79cb'}}>Accountant</h3>
                </a>
            </div>
        </a>
    </div>

    <div className="col-sm-3">
        <a >
            <div className="tile-stats tile-white-aqua">
                <div className="icon"><i className="fa fa-plus-square"></i></div>
                <div> <strong style={{fontSize:'30px',color:' #ec3b83'}}>1</strong></div>
                <h3 style={{color: '#ec3b83'}}>Payment</h3>
            </div>
        </a>
    </div>

    <div className="col-sm-3">
        <a>
            <div className="tile-stats tile-white-blue">
                <div className="icon"><i className="fa fa-medkit"></i></div>
                <div> <strong style={{fontSize:'30px',color:' #ffa812'}}>1</strong></div>
                <h3 style={{color: '#ffa812'}}>Medicine</h3>
            </div>
        </a>
    </div>
</div>
<div className="row">
    <div className="col-sm-3">
        <a >
            <div className="tile-stats tile-white tile-white-primary">
                <div className="icon"><i className="fa fa-user-md"></i></div>
                <div> <strong style={{fontSize:'30px',color:' #ffa812'}}>1</strong></div>
                <h3 style={{color: '#ffa812'}}>Operation Report</h3>
            </div>
        </a>
    </div>

    <div className="col-sm-3">
        <a >
            <div className="tile-stats tile-white-red">
                <div className="icon"><i className="fa fa-user"></i></div>
                
                <h3 style={{color: '#6c541e'}}>Birth Report</h3>
            </div>
        </a>
    </div>

    <div className="col-sm-3">
        <a >
            <div className="tile-stats tile-white-aqua">
                <div className="icon"><i className="fa fa-plus-square"></i></div>
                
                <h3 style={{color: '#6c541e'}}>Death Report</h3>
            </div>
        </a>
    </div>
    </div>

        </div>
    )
}