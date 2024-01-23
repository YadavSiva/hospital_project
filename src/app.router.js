import { Route, Routes } from "react-router-dom";
import { HomeComponent } from "./project/Home/home.component";
import { DoctorsComponent } from "./doctor/doctor.component";
import { AboutComponent } from "./About/about.component";
import { ContactComponent } from "./contact/contact.component";
import { BlogComponent } from "./blog/blog.component";
import { AdminMenuComponent } from "./project/adminmenu/adminmenu.component";
import { LoginComponent } from "./project/login/login.component";
import { AdminPageComponent } from "./project/adminpage/adminpage.component";
import { DepartmentComponent } from "./project/departmentcomponent/department.component";
import { NurseComponent } from "./project/nursecomponent/nurse.component";
import { AdmindoctorComponent } from "./project/admindoctorcomponent/admindoctor.component";
import { PharmacistComponent } from "./project/pharmacist/pharmacist.component";
import { LaboratoristComponent } from "./project/laboratorist/laboratorist.component";
import { AccountantComponent } from "./project/accountant/accountant.component";
import { PatientComponent } from "./project/patient/patient.component";
import { AppointmentsComponent } from "./appointment/appointment.component";
import { ReceptionistComponent } from "./project/receptionist/receptionist.component";
import { AccountComponent } from "./project/account/account.component";
import { AuthRoute } from "./service/auth.route";
import { DepartmentPageComponent } from "./department/departmentpage.component";
import { CardiologyComponent } from "./cardiology/cardiology.component";
import { GastroComponent } from "./gastro/gastro.component";
import { NoticeBoardComponent } from "./project/noticeboard/noticeboard.component";
import { ContactEmailsComponent } from "./project/contactemail/contactemail.component";



export function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<HomeComponent></HomeComponent>}></Route>
            <Route path="/home" element={<HomeComponent></HomeComponent>}></Route>
            <Route path="/department" element={<DepartmentPageComponent></DepartmentPageComponent>}></Route>
            <Route path="/cardiology" element={<CardiologyComponent></CardiologyComponent>}></Route>
            <Route path="/gastro" element={<GastroComponent></GastroComponent>}></Route>
            <Route path="/doctor" element={<DoctorsComponent></DoctorsComponent>}></Route>
            <Route path="/about" element={<AboutComponent></AboutComponent>}></Route>
            <Route path="/appointment" element={<AppointmentsComponent></AppointmentsComponent>}></Route>
            <Route path="/blog" element={<BlogComponent></BlogComponent>}></Route>
            <Route path="/login" element={<LoginComponent></LoginComponent>}></Route>
            <Route path="/contact" element={<ContactComponent></ContactComponent>}></Route>
            <Route  path="/admin/adminpage" element={<NavigateAdminpage></NavigateAdminpage>}></Route>
            <Route path="/admin/department" element={<NavigateDepartment></NavigateDepartment>}></Route>
            <Route path="/admin/patient" element={<NavigatePatient></NavigatePatient>}></Route>
            <Route path="/admin/nurse" element={<NavigateNurse></NavigateNurse>}></Route>
            <Route path="/admin/admindoctor" element={<NavigateDoctor></NavigateDoctor>}></Route>
            <Route path="/admin/pharmacist" element={<NavigatePharmacist></NavigatePharmacist>}></Route>
            <Route path="/admin/laboratorist" element={<NavigateLaboratorist></NavigateLaboratorist>}></Route>
            <Route path="/admin/accountant" element={<NavigateAccountant></NavigateAccountant>}></Route>
            <Route path="/admin/recetionist" element={<NavigateReceptionist></NavigateReceptionist>}></Route>
            <Route path="/admin/account" element={<NavigateAccount></NavigateAccount>}></Route>
            <Route path="/admin/notice" element={<NavigateNotice></NavigateNotice>}></Route>
            <Route path="/admin/contactemail" element={<NavigatecontactEmail></NavigatecontactEmail>}></Route>
        </Routes>
    )
}

function NavigateAdminpage(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminMenuComponent></AdminMenuComponent>
                </div>
                <div className="col-9 ">
                <AdminPageComponent></AdminPageComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}
function NavigateDepartment(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminMenuComponent></AdminMenuComponent>
                </div>
                <div className="col-9 ">
                <DepartmentComponent></DepartmentComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}
function NavigateNurse(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminMenuComponent></AdminMenuComponent>
                </div>
                <div className="col-9 ">
                <NurseComponent></NurseComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}
function NavigatePatient(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminMenuComponent></AdminMenuComponent>
                </div>
                <div className="col-9 ">
                <PatientComponent></PatientComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}
function NavigateDoctor(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminMenuComponent></AdminMenuComponent>
                </div>
                <div className="col-9 ">
                <AdmindoctorComponent></AdmindoctorComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}
function NavigatePharmacist(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminMenuComponent></AdminMenuComponent>
                </div>
                <div className="col-9 ">
                <PharmacistComponent></PharmacistComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}
function NavigateLaboratorist(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminMenuComponent></AdminMenuComponent>
                </div>
                <div className="col-9 ">
                <LaboratoristComponent></LaboratoristComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}
function NavigateAccountant(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminMenuComponent></AdminMenuComponent>
                </div>
                <div className="col-9 ">
                <AccountantComponent></AccountantComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}
function NavigateReceptionist(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminMenuComponent></AdminMenuComponent>
                </div>
                <div className="col-9 ">
                <ReceptionistComponent></ReceptionistComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}
function NavigateAccount(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminMenuComponent></AdminMenuComponent>
                </div>
                <div className="col-9 ">
                <AccountComponent></AccountComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}

function NavigateNotice(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminMenuComponent></AdminMenuComponent>
                </div>
                <div className="col-9 ">
                <NoticeBoardComponent></NoticeBoardComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}
function NavigatecontactEmail(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminMenuComponent></AdminMenuComponent>
                </div>
                <div className="col-9 ">
                <ContactEmailsComponent></ContactEmailsComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}