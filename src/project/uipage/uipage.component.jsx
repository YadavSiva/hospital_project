import './uipage.component.css';
import img5 from '../../assets/images/img_5.jpg';
export function UipageComponent() {
    return (
        <div >
            

            {/* //---Start of Navbar---// */}
            <nav className="navbar navbar-expand-lg  navbar-light bg-default navbar--link-arrow navbar--uppercase bayanno-nav">
                <div className="container navbar-container">
                    {/* <!-- Brand/Logo --> */}
                    <a className="navbar-brand" href="http://localhost:3000/">
                        <img src={img5} width="40" alt=""></img>
                        &nbsp; Bayanno Diagnostic Center        </a>

                    &nbsp;&nbsp;<div className="d-inline-block">
                        {/* <!-- Navbar toggler  --> */}
                        <button className="navbar-toggler hamburger hamburger-js hamburger--spring" type="button" data-toggle="collapse" data-target="#navbar_main" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse align-items-center justify-content-end" id="navbar_main">

                        {/* <!-- Navbar links --> */}
                        <ul className="navbar-nav" data-hover="dropdown">
                            <li className="nav-item active">
                                <a className="nav-link" aria-haspopup="true" aria-expanded="false" href="/home" style={{ fontSize: '15px' }}>HOME</a>
                            </li>
                            <li className="nav-item dropdown dropdown-bottom ">
                                <a href="/department" className="nav-link pt-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: '15px' }}>DEPARTMENTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-haspopup="true" aria-expanded="false" href="/doctor" style={{ fontSize: '15px' }}>DOCTORS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-haspopup="true" aria-expanded="false" href="/about" style={{ fontSize: '15px' }}> ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-haspopup="true" aria-expanded="false" href="/appointment" style={{ fontSize: '15px' }}>APPOINMENT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-haspopup="true" aria-expanded="false" href="/blog" style={{ fontSize: '15px' }}>BLOG</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-haspopup="true" aria-expanded="false" href="/contact" style={{ fontSize: '15px' }}>CONTACT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-haspopup="true" aria-expanded="false" href="/login" style={{ fontSize: '15px' }}>LOGIN</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}