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
        if (!isMobile) {
          AOS.init({ duration: 1000 }); // Initialize AOS with your desired options
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
            <div className="container  align-content-center "  data-aos="fade-right" dta-aos-duration="2000" style={{ height: "650px", textAlign: "center" }}>
                <div className="row justify-content-sm-center">
                    <div className="col-sm-12 col-md-6">
                        <div class="card" style={{ width: "400px" }}>
                            <img className="card-img-top img-responsive" src="profile1.jpeg" alt="Card image" style={{ width: "100%", height: "300px" }} />
                            <div class="card-body">
                                <h4 class="card-title">POTNURU SRAVANKUMAR</h4>
                                <p class="card-text">I am a dedicated and enthusiastic full-stack Java developer with a passion for creating
                                    efficient and user-friendly web applications. Looking for an opportunity
                                    to contribute to an organization to gain hands-on experience.
                                </p>
                                <Button variant="contained" className="bg-danger" onClick={handleOpenDocument} startIcon={< DownloadForOfflineOutlinedIcon />}>Download CV</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6  align-content-center " >
                             <Contact fn={fn}/>
                    </div>
                </div>
            </div>
            <span className="footer" ><Footer/></span>
        </>
    )
}
export default About;