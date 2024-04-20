import './Home.css'
import TextTypingAnimation from "./TextTypingAnimation";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
function Contact(props) {
    return (
        <>
        <h1 className='justify-content-start' >I am <TextTypingAnimation /></h1>
                <div class="card" style={{ width: "400px" }}  data-aos="fade-right" data-aos-duration="2000">
                    <h1 className="card-text d-block m-auto " style={{ color: "red" }} >Contact Me</h1>
                    <div class="card-body">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><AccountCircle /></span>
                            <input type="text" class="form-control" value="POTNURU" readonly />
                            <input type="text" class="form-control" value="SRAVAN KUMAR" readonly />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-text">
                                <EmailIcon />
                            </div>
                            <input type="mail" class="form-control" value="sravanpotnuru24@gmail.com" readonly />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-text">
                                <PhoneIcon />
                            </div>
                            <input type="text" class="form-control" value="9391872342" readonly />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-text">
                                <LinkedInIcon />
                            </div>
                            <input type="text" class="form-control" value="https://www.linkedin.com/in/sravan-potnuru-a431a0215/" readonly />
                        </div>
                        <div class="btn-group w-100">
                            <div href="mailto:sravanpotnuru24@gmail.com" class="btn btn-success ">Contact</div>
                            <div class="btn btn-danger" onClick={() => { props.fn(true) }}>More Details?</div>
                        </div>
                    </div>
                </div>
                
        </>
    )
}

export default Contact;