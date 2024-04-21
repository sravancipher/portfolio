import './Home.css'
import TextTypingAnimation from "./TextTypingAnimation";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Tooltip from '@mui/material/Tooltip';
function Contact(props) {
    return (
        <>
        <h1 className='text-center' style={{width:"400px"}}>I am <span ><TextTypingAnimation /></span></h1>
                <div className="card card2" style={{ width: "90%" }}  data-aos="fade-left" data-aos-duraton="2000">
                    <h1 className="card-text d-block m-auto " style={{ color: "red" }} >Contact Me</h1>
                    <div class="card-body">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><a href="#"><AccountCircle /></a></span>
                            <input type="text" class="form-control" value="POTNURU" readonly />
                            <input type="text" class="form-control" value="SRAVAN KUMAR" readonly />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-text">
                                <a href="#"><EmailIcon /></a>
                            </div>
                            <input type="mail" class="form-control" value="sravanpotnuru24@gmail.com" readonly />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-text">
                                <a href="#"><PhoneIcon /></a>
                            </div>
                            <input type="text" class="form-control" value="9391872342" readonly />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-text">
                                <a href="https://www.linkedin.com/in/sravan-potnuru-a431a0215/" target="_blank"><LinkedInIcon /></a>
                            </div>
                            <input type="text" class="form-control" value="https://www.linkedin.com/in/sravan-potnuru-a431a0215/" readonly />
                        </div>
                        <div class="btn-group w-100">
                            <a href="mailto:sravanpotnuru24@gmail.com" class="btn btn-success "><ConnectWithoutContactIcon/> Contact</a>
                            <div class="btn btn-danger" onClick={() => { props.fn(true) }}><Tooltip title="Education,Skills,Projects and Certification" arrow>More Details?</Tooltip></div>
                        </div>
                    </div>
                </div>
                
        </>
    )
}

export default Contact;