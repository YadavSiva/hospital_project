import { FooterComponent } from '../footercomponent/footer.component';
import { UipageComponent } from '../project/uipage/uipage.component';
import './contact.component.css';

export function ContactComponent() {
    return (
        <div>
            <UipageComponent></UipageComponent>
            <section className="slice--offset parallax-section parallax-section-xl b-xs-bottom custom-page-head contactus_bg_img" >
                <div className="container">
                    <div className="row py-3">
                        <div className="col-lg-12">
                            <h1 className="heading text-uppercase c-white"  style={{ color: 'white' }}>
                                Contact Us                </h1>

                            <span className="clearfix"></span>

                            <div className="">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="/home" style={{ color: 'white' }}>
                                            Home                            </a>
                                    </li>
                                    <li className="breadcrumb-item active" style={{ color: 'white' }}>
                                        Contact Us                        </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="slice b-xs-bottom">
                <div className="container">
                    <div className="text-center">
                        <h2 className="heading heading-2 strong-400">
                            Contact Us For Help            </h2>
                        <p>
                            Please Call Us Or Complete The Form Below And We Will Get To You Shortly            </p>
                        <button className="btn btn-primary btn-xl btn-base-1 btn-icon-left mt-4">
                            <i className="fa fa-mobile "></i>1-800-400-7400            </button>
                    </div>
                </div>
            </section>
            <section className="slice sct-color-1">
    <div className="container">
        <div className="row justify-content-center">
        <div>
                <form className='container1' method='post' action='http://localhost:4005/savecontact/'>
                    <div style={{ color: '#818A91 ' }}>

                        <div className=' row cont' >
                            <div className='col-6'>
                                <label><strong> NAME</strong></label>
                                <input type="text" id="name" name="name" className='form-control'></input>
                            </div>
                            <div className='col-6'>
                                <label><strong> EMAIL</strong></label>
                                <input type="text" id="email" name="email" className='form-control'></input>
                            </div>
                        </div>
                        <br></br>
                        <div className='row cont'>
                            <div className='col-6'>
                                <label><strong>PHONE</strong></label>
                                <input type="text" id="phone" name="phone" className='form-control'></input>
                            </div>
                            <div className='col-6'>
                                <label><strong>ADDRESS</strong></label>
                                <input type="text" id="address" name="address" className='form-control'></input>
                            </div>
                        </div>

                        <br></br>
                        <div>
                            <label><strong>MESSAGE</strong></label>
                        </div>
                        <div className='cont'>
                            <textarea cols={10} id="message" name="message" className='form-control'></textarea>

                        </div>
                        <br></br>
                    </div>

                    <div className="row" style={{width:'200px'}}>
                        <button type="submit" className="btn btn-styled btn-base-1 " style={{ cursor: 'pointer' }} >
                            Send Message                        </button>
                    </div>
                    <br></br><br></br>
                </form>
            </div>
        </div>
    </div>
</section>
<FooterComponent></FooterComponent>        </div>
    )
}