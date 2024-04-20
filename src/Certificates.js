function Certificates() {
    return (
        <>
            <div id="demo" class="carousel slide" data-bs-ride="carousel">


                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                </div>


                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="cert1.jpg" alt="Los Angeles" class="d-block" style={{ width: "100%" }} />
                        <div class="carousel-caption">
                            <h3>Web Development</h3>
                            <p>Completed basic web dev bootcamp</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="cert2.jpg" alt="Chicago" class="d-block" style={{ width: "100%" }} />
                        <div class="carousel-caption">
                            <h3>Javascript and Reactjs</h3>
                            <p>Completed Javascript and Reactjs bootcamp</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="cert3.jpg" alt="New York" class="d-block" style={{ width: "100%" }} />
                        <div class="carousel-caption">
                            <h3>JavaScript</h3>
                            <p>Completed javascript on udemy </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="cert4.jpg" alt="New York" class="d-block" style={{ width: "100%" }} />
                        <div class="carousel-caption ">
                            <h3>HTML-5</h3>
                            <p>Completed HTML 5 in depth on udemy</p>
                        </div>
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