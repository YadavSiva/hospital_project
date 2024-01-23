import { Calendar, Calendar3, Facebook, Google, Linkedin, Twitter } from 'react-bootstrap-icons';
import './doctor.component.css';
import { UipageComponent } from '../project/uipage/uipage.component';
import { FooterComponent } from '../footercomponent/footer.component';
export function DoctorsComponent() {
    return (
        <div>
            <UipageComponent></UipageComponent>
            <section className="slice--offset parallax-section parallax-section-xl b-xs-bottom custom-page-head doctor_bg_img" >
                <div className="container">
                    <div className="row py-3">
                        <div className="col-lg-12">
                            <h1 className="heading text-uppercase c-white">
                                Doctors Of All Departments                </h1>

                            <span className="clearfix"></span>

                            <div className="">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="/home" style={{ color: 'white' }}>
                                            Home   </a>
                                    </li>
                                    <li className="breadcrumb-item active" style={{ color: 'white' }}>
                                        Doctors                        </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="slice--offset sct-color-1 pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-3 p-3">
                            <div className="sidebar sidebar--style-2 doctor-sidebar">
                                <div className="sidebar-object">
                                    <div className="section-title section-title--style-1">
                                        <h3 className="section-title-inner heading-sm strong-500">
                                            Doctors Of                            </h3>
                                    </div>

                                    <ul className="categories categories--style-2 p-3">
                                        <li className="active p-3">
                                            <a >
                                                All Departments                                </a>
                                        </li>
                                        <li className=" p-3">
                                            <a >
                                                Anesthetics                                </a>
                                        </li>
                                        <li className=" p-3">
                                            <a >
                                                Cardiology                                </a>
                                        </li>
                                        <li className=" p-3">
                                            <a >
                                                Gastroenterology                                </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-9">
                            <div className="block block-post">
                                <div className="block department-doctor-list">
                                    <div className="doctor-grid-view row">
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="block block--style-4 list doctor-list">
                                                <div className="block-image">
                                                    <div className="view view-fifth">
                                                        <img src="https://demo.creativeitem.com/bayanno/uploads/user.jpg"></img>
                                                        <div className="mask">
                                                            <div className="view-buttons">
                                                                <span className="view-buttons-inner text-center appointment-btn">
                                                                    <a href="" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/2" className="btn btn-styled btn-base-1 btn-outline btn-icon-left btn-st-trigger" data-effect="st-effect-1">
                                                                        <i className="fa fa-user-md"></i> &nbsp;Profile                                                        </a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="block-content w-100">
                                                    <div className="block-body py-2 px-0">
                                                        <h3 className="heading heading-5 strong-500">
                                                            <a style={{textDecoration:'none',color:'black'}} className="btn-st-trigger" data-effect="st-effect-1" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/2">
                                                                Erich Mcbride                                                </a>
                                                        </h3>

                                                    </div>

                                                    <div className="block-footer block-footer-fixed-bottom b-xs-top">
                                                        <div className="row social-media">
                                                            <div className="col-8">
                                                                <span>
                                                                    <Facebook></Facebook>
                                                                </span>&nbsp;&nbsp;&nbsp;
                                                                <span>
                                                                    <Twitter></Twitter>
                                                                </span>&nbsp;&nbsp;&nbsp;
                                                                <span>
                                                                    <Google></Google>
                                                                </span>&nbsp;&nbsp;&nbsp;
                                                                <span>
                                                                    <Linkedin></Linkedin>
                                                                </span>&nbsp;&nbsp;&nbsp;
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="block block--style-4 list doctor-list">
                                                <div className="block-image">
                                                    <div className="view view-fifth">
                                                        <img src="https://demo.creativeitem.com/bayanno/uploads/user.jpg"></img>
                                                        <div className="mask">
                                                            <div className="view-buttons">
                                                                <span className="view-buttons-inner text-center appointment-btn">
                                                                    <a href="" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/1" className="btn btn-styled btn-base-1 btn-outline btn-icon-left btn-st-trigger" data-effect="st-effect-1">
                                                                        <i className="fa fa-user-md"></i> &nbsp;Profile                                                        </a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="block-content w-100">
                                                    <div className="block-body py-2 px-0">
                                                        <h3 className="heading heading-5 strong-500">
                                                            <a style={{textDecoration:'none',color:'black'}} className="btn-st-trigger" data-effect="st-effect-1" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/1">
                                                                Micheal Pewd                                                </a>
                                                        </h3>

                                                    </div>

                                                    <div className="block-footer block-footer-fixed-bottom b-xs-top">
                                                        <div className="row social-media">
                                                            <div className="col-8">
                                                                <span>
                                                                    <Facebook></Facebook>
                                                                </span>&nbsp;&nbsp;&nbsp;
                                                                <span>
                                                                    <Twitter></Twitter>
                                                                </span>&nbsp;&nbsp;&nbsp;
                                                                <span>
                                                                    <Google></Google>
                                                                </span>&nbsp;&nbsp;&nbsp;
                                                                <span>
                                                                    <Linkedin></Linkedin>
                                                                </span>&nbsp;&nbsp;&nbsp;
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="doctor-pagination d-flex justify-content-center mb-4 pt-4">
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div className='row ml-0' style={{ backgroundColor: 'rgb(0, 135, 190)', width: '100%', height: '150px' }}>
                <div className='col-3' style={{ color: 'white', textAlign: 'center', paddingTop: '50px' }}>
                    <h3 style={{ marginLeft: '35px' }} >Get Touch With Specialist</h3>
                </div>
                <div className='col-6'></div>
                <div className='col-3' style={{ padding: '50px', }}>
                    <button style={{ background: 'white', padding: '10px', color: 'rgb(0, 135, 190)' }}><Calendar3></Calendar3> &nbsp; BOOK AN APPOINMENT</button>
                </div>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )
}