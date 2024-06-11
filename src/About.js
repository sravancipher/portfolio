import Button from "@mui/material/Button"
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import './Home.css'
import Contact from "./Contact";
import Footer from "./Footer";
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function About({fn}) {
    useEffect(() => {
        const isMobile = window.innerWidth <= 768; // Adjust the threshold as needed
        if (isMobile) {
          AOS.init({ duration: 0 }); // Initialize AOS with your desired options
        }
      }, []);
    const handleOpenDocument = () => {
        const pdfUrl = "sravanpotnuru@GeneralCV.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "sravanpotnuru_CV.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <div className="container mt-5 m-auto"  data-aos="fade-right" data-aos-duration="2000" style={{ height: "650px" }}>
                <div className="row ">
                    <div className="col-12 col-md-6">
                        <div className="card card1" style={{ width: "400px" }}>
                            <img className="card-img-top img-responsive mx-auto d-block mt-1" src="profile.jpeg" style={{ width: "90%", height: "300px" }} />
                            <div class="card-body">
                                <h4 class="card-title">POTNURU SRAVANKUMAR</h4>
                                <p class="card-text">I am flexible, focused, and eager to learn new things. I enjoy combining different areas of knowledge. I'm seeking an engaging role in a company that is always progressing. I want to use my creativity to generate ideas. I'm prepared to work diligently, be dependable, motivate others, and contribute to the company's success.
                                </p>
                                <Button variant="contained" className="bg-danger w-100" onClick={handleOpenDocument} startIcon={< DownloadForOfflineOutlinedIcon />}>Download CV</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6  align-content-center " >
                             <Contact fn={fn}/>
                    </div>
                </div>
                <span className="footer"><Footer/></span>
            </div>
            
        </>
    )
}
export default About;