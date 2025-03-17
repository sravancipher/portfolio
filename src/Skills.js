function Skills() {
    let skills=["HTML","CSS","Bootstrap","JavaScript","ReactJs","MySQL","Java","Hibernate","Spring Boot"]
    let webtech=["HTML", "CSS","Bootstrap", "JavaScript", "React JS", "Basics of MUI"]
    let programming=["PHP", "Java", "Python", "Data Structures and Algorithms"]
    let query=["MySQL"]
    let frameworks=["Collections", "Hibernate", "Spring" ,"Streamlit (Python)"]
    let testing=["Postman"]
    let api=["Fast API","Spring REST API"]
    let cloud=["AWS"]
    let data=["Power BI"]  
    let container=["Docker"]
    let tools=["Figma", "Github", "Netlify", "VS Code","Jupyter Notebook", "Eclipse", "XAMPP","PowerPoint"]
    return (

        <>
        <div className="row">
            <div className="col-md-4">
                <h6>Web Technologies and Libraries:</h6>
        {
            webtech.map((skill,index)=>{
                return <div key={index}> <span><b>{skill}</b></span>
                <span >
                    <div class="progress" style={{ height: "20px" }}>
                        <div class="progress-bar bg-warning text-center" style={{ width: "80%" }}><b>80%</b></div>
                    </div>
                </span>
                </div>
            })
        }
        <div className="row mt-2">
        <h6>Frameworks:</h6>
        {
            frameworks.map((skill,index)=>{
                return <div key={index}> <span><b>{skill}</b></span>
                <span >
                    <div class="progress" style={{ height: "20px" }}>
                        <div class="progress-bar bg-warning text-center" style={{ width: "70%" }}><b>70%</b></div>
                    </div>
                </span>
                </div>
            })
        }   
        </div>
        </div>
        <div className="col-md-4">
        <h6>Programming:</h6>
        {
            programming.map((skill,index)=>{
                return <div key={index}> <span><b>{skill}</b></span>
                <span >
                    <div class="progress" style={{ height: "20px" }}>
                        <div class="progress-bar bg-warning text-center" style={{ width: "70%" }}><b>70%</b></div>
                    </div>
                </span>
                </div>
            })
        }
        <div className="row mt-2">
        <h6>Testing:</h6>
        {
            testing.map((skill,index)=>{
                return <div key={index}> <span><b>{skill}</b></span>
                <span >
                    <div class="progress" style={{ height: "20px" }}>
                        <div class="progress-bar bg-warning text-center" style={{ width: "70%" }}><b>70%</b></div>
                    </div>
                </span>
                </div>
            })
        }   
        </div>
        <div className="row mt-2">
        <h6>Query Languages:</h6>
        {
            query.map((skill,index)=>{
                return <div key={index}> <span><b>{skill}</b></span>
                <span >
                    <div class="progress" style={{ height: "20px" }}>
                        <div class="progress-bar bg-warning text-center" style={{ width: "80%" }}><b>80%</b></div>
                    </div>
                </span>
                </div>
            })
        }
        
        </div>
        <div className="row mt-2">
        <h6>API:</h6>
        {
            api.map((skill,index)=>{
                return <div key={index}> <span><b>{skill}</b></span>
                <span >
                    <div class="progress" style={{ height: "20px" }}>
                        <div class="progress-bar bg-warning text-center" style={{ width: "70%" }}><b>70%</b></div>
                    </div>
                </span>
                </div>
            })
        }   
        </div>
        </div>
        <div className="col-md-4">
                <h6>Tools:</h6>
        {
            tools.map((skill,index)=>{
                return <div key={index}> <span><b>{skill}</b></span>
                <span >
                    <div class="progress" style={{ height: "20px" }}>
                        <div class="progress-bar bg-warning text-center" style={{ width: "80%" }}><b>80%</b></div>
                    </div>
                </span>
                </div>
            })
        }
        <div className="row mt-2">
        <h6>cloud:</h6>
        {
            cloud.map((skill,index)=>{
                return <div key={index}> <span><b>{skill}</b></span>
                <span >
                    <div class="progress" style={{ height: "20px" }}>
                        <div class="progress-bar bg-warning text-center" style={{ width: "70%" }}><b>70%</b></div>
                    </div>
                </span>
                </div>
            })
        }   
        </div>
        <div className="row mt-2">
        <h6>Data Visualization:</h6>
        {
            data.map((skill,index)=>{
                return <div key={index}> <span><b>{skill}</b></span>
                <span >
                    <div class="progress" style={{ height: "20px" }}>
                        <div class="progress-bar bg-warning text-center" style={{ width: "80%" }}><b>80%</b></div>
                    </div>
                </span>
                </div>
            })
        }
        
        </div>
        <div className="row mt-2">
        <h6>Containerization:</h6>
        {
            container.map((skill,index)=>{
                return <div key={index}> <span><b>{skill}</b></span>
                <span >
                    <div class="progress" style={{ height: "20px" }}>
                        <div class="progress-bar bg-warning text-center" style={{ width: "70%" }}><b>70%</b></div>
                    </div>
                </span>
                </div>
            })
        }   
        </div>
        </div>
        </div>
        </>
    )
}
export default Skills;