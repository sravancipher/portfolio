import Tooltip from '@mui/material/Tooltip';
function Certificates() {
    return (
        <>
            <div id="demo" class="carousel slide" data-bs-ride="carousel">


                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="7"></button>
                </div>


                <div class="carousel-inner">
                    {/* <div class="carousel-item active">
                    <a href="https://drive.google.com/file/d/1_9PDycFzKvgnhp5COwERTr0zuHtJsCOT/view?usp=sharing" target="_blank"></a>
                    <Tooltip title="Achieved NCC 'B' Certificate" arrow><img src="B-cert.jpeg"class="d-block" style={{ width: "100%" }} /></Tooltip>
                    </div>
                    <div class="carousel-item">
                    <a href="https://drive.google.com/file/d/1DGLGf3kgcBpGoDUwJArnW-TMDiZPeaIP/view?usp=sharing" target="_blank"></a>
                    <Tooltip title="Achieved NCC 'C' Certificate" arrow><img src="C-cert.jpeg"class="d-block" style={{ width: "100%" }} /></Tooltip>
                    </div> */}
                    <div class="carousel-item active">
                    <Tooltip title="Completed Basic Web Dev with Bootstrap" arrow><img src="cert1.jpg"class="d-block" style={{ width: "100%" }} /></Tooltip>
                    </div>
                    <div class="carousel-item">
                    <Tooltip title="Completed Javascript and Reactjs bootcamp" arrow><img src="cert2.jpg" class="d-block" style={{ width: "100%" }} /></Tooltip>
                    </div>
                    <div class="carousel-item">
                    <a href="https://www.udemy.com/certificate/UC-4ac65094-96fa-4e67-9197-69dce340278d/" target='_blank'>
                    <Tooltip title="Completed javascript Course in udemy " arrow><img src="cert3.jpg" class="d-block" style={{ width: "100%" }} /></Tooltip>
                    </a>
                    </div> 
                    <div class="carousel-item">
                    <a href="https://courses.edx.org/certificates/861e963ffa0842b78642f2655ce8bfab" target="_blank">
                    <Tooltip title="Completed course on Resume,Networking and Interview Skills" arrow><img src="cert5.png" class="d-block" style={{ width: "100%" }} /></Tooltip>
                    </a>
                    </div>
                    <div class="carousel-item">
                    <Tooltip title="Completed Java Development Internship" arrow><img src="cert7.jpeg" class="d-block" style={{ width: "100%" }} /></Tooltip>
                    </div>
                    <div class="carousel-item">
                        <a href="https://drive.google.com/file/d/1HMkUUwxRlijm_UfHftpzz7rxi9pkgYUA/view?usp=sharing" target="_blank"></a>
                        <Tooltip title="Certificate of Merit for All India Essay Writing Event 2018" arrow><img src="Cert8.jpeg" class="d-block" style={{ width: "100%" }} /></Tooltip>
                    </div>
                    <div class="carousel-item">
                        <a href="https://drive.google.com/file/d/1BXaLQz2GsEnSFkXNNCfIyPCh8ytWBjDB/view?usp=sharing" target="_blank"></a>
                        <Tooltip title="Certificate of Participation and Certificate of Appreciation for National Level Techno Management Fest" arrow><img src="Cert9.jpeg" class="d-block" style={{ width: "100%" }} /></Tooltip>
                    </div>
                    <div class="carousel-item">
                    <a href="https://drive.google.com/file/d/1BjG7RV_5e1L-PiJ4tnMlVDN6Unq-wkX1/view?usp=sharing" target="_blank"></a>
                    <Tooltip title="Certificate of Participation for All India Inter-University Yoga Championship (2019-2020)" arrow><img src="Cert10.jpeg" class="d-block" style={{ width: "100%" }} /></Tooltip>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </>
    )
}
export default Certificates;