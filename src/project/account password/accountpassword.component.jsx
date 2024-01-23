export function AccountPasswordComponent(){
    return(
        <div>
            <div className='profile'>
                    <div >
                        <h4>Change Password</h4>
                        <br></br>
                        <form className='container-account' method='post' action='http://localhost:4005/saveAccountPassword/'>
                            <div className='row' style={{ color: '#818A91 ' }}>
                                <div className='col-3'>
                                    <label><strong><h6>Current Password</h6></strong></label>
                                </div>
                                <div className='col-8'>
                                    <input type='text' id="currentPassword" name="currentPassword" class="form-control"></input>
                                </div>
                            </div>
                            <br></br>
                            <div className='row' style={{ color: '#818A91 ' }}>
                                <div className='col-3'>
                                    <label><strong><h6>New Password</h6></strong></label>
                                </div>
                                <div className='col-8'>
                                    <input type='text' id="newPassword" name="newPassword" class="form-control"></input>
                                </div>
                            </div>
                            <br></br>
                            <div className='row' style={{ color: '#818A91 ' }}>
                                <div className='col-3'>
                                    <label><strong><h6>Confirm Password</h6></strong></label>
                                </div>
                                <div className='col-8'>
                                    <input type='text' id="confirmPassword" name="confirmPassword" class="form-control"></input>
                                </div>
                            </div>
                            <br></br>
                            <div className='row'>
                                <div className='col-3'></div>
                                <div className='col-4' >

                                    <input type='submit' value="Update Password" className='account-update-button' ></input>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
             
        </div>
    )
}