// function Skills() {
//     let skills=["HTML","CSS","Bootstrap","JavaScript","ReactJs","MySQL","Java","Hibernate","Spring Boot"]
//     let webtech=["HTML", "CSS","Bootstrap", "JavaScript", "React JS", "Basics of MUI"]
//     let programming=["PHP", "Java", "Python", "Data Structures and Algorithms"]
//     let query=["MySQL"]
//     let frameworks=["Collections", "Hibernate", "Spring" ,"Streamlit (Python)"]
//     let testing=["Postman"]
//     let api=["Fast API","Spring REST API"]
//     let cloud=["AWS"]
//     let data=["Power BI"]  
//     let tools=["Figma", "Github", "Netlify", "VS Code","Jupyter Notebook", "Eclipse", "XAMPP","PowerPoint"]
//     return (

//         <>
//         <div className="row">
//             <div className="col-md-4">
//                 <h6>Web Technologies and Libraries:</h6>
//         {
//             webtech.map((skill,index)=>{
//                 return <div key={index}> <span><b>{skill}</b></span>
//                 <span >
//                     <div class="progress" style={{ height: "20px" }}>
//                         <div class="progress-bar bg-warning text-center" style={{ width: "80%" }}><b>80%</b></div>
//                     </div>
//                 </span>
//                 </div>
//             })
//         }
//         <div className="row mt-2">
//         <h6>Frameworks:</h6>
//         {
//             frameworks.map((skill,index)=>{
//                 return <div key={index}> <span><b>{skill}</b></span>
//                 <span >
//                     <div class="progress" style={{ height: "20px" }}>
//                         <div class="progress-bar bg-warning text-center" style={{ width: "70%" }}><b>70%</b></div>
//                     </div>
//                 </span>
//                 </div>
//             })
//         }   
//         </div>
//         </div>
//         <div className="col-md-4">
//         <h6>Programming:</h6>
//         {
//             programming.map((skill,index)=>{
//                 return <div key={index}> <span><b>{skill}</b></span>
//                 <span >
//                     <div class="progress" style={{ height: "20px" }}>
//                         <div class="progress-bar bg-warning text-center" style={{ width: "70%" }}><b>70%</b></div>
//                     </div>
//                 </span>
//                 </div>
//             })
//         }
//         <div className="row mt-2">
//         <h6>Testing:</h6>
//         {
//             testing.map((skill,index)=>{
//                 return <div key={index}> <span><b>{skill}</b></span>
//                 <span >
//                     <div class="progress" style={{ height: "20px" }}>
//                         <div class="progress-bar bg-warning text-center" style={{ width: "70%" }}><b>70%</b></div>
//                     </div>
//                 </span>
//                 </div>
//             })
//         }   
//         </div>
//         <div className="row mt-2">
//         <h6>Query Languages:</h6>
//         {
//             query.map((skill,index)=>{
//                 return <div key={index}> <span><b>{skill}</b></span>
//                 <span >
//                     <div class="progress" style={{ height: "20px" }}>
//                         <div class="progress-bar bg-warning text-center" style={{ width: "80%" }}><b>80%</b></div>
//                     </div>
//                 </span>
//                 </div>
//             })
//         }
        
//         </div>
//         <div className="row mt-2">
//         <h6>API:</h6>
//         {
//             api.map((skill,index)=>{
//                 return <div key={index}> <span><b>{skill}</b></span>
//                 <span >
//                     <div class="progress" style={{ height: "20px" }}>
//                         <div class="progress-bar bg-warning text-center" style={{ width: "70%" }}><b>70%</b></div>
//                     </div>
//                 </span>
//                 </div>
//             })
//         }   
//         </div>
//         </div>
//         <div className="col-md-4">
//                 <h6>Tools:</h6>
//         {
//             tools.map((skill,index)=>{
//                 return <div key={index}> <span><b>{skill}</b></span>
//                 <span >
//                     <div class="progress" style={{ height: "20px" }}>
//                         <div class="progress-bar bg-warning text-center" style={{ width: "80%" }}><b>80%</b></div>
//                     </div>
//                 </span>
//                 </div>
//             })
//         }
//         <div className="row mt-2">
//         <h6>cloud:</h6>
//         {
//             cloud.map((skill,index)=>{
//                 return <div key={index}> <span><b>{skill}</b></span>
//                 <span >
//                     <div class="progress" style={{ height: "20px" }}>
//                         <div class="progress-bar bg-warning text-center" style={{ width: "70%" }}><b>70%</b></div>
//                     </div>
//                 </span>
//                 </div>
//             })
//         }   
//         </div>
//         <div className="row mt-2">
//         <h6>Data Visualization:</h6>
//         {
//             data.map((skill,index)=>{
//                 return <div key={index}> <span><b>{skill}</b></span>
//                 <span >
//                     <div class="progress" style={{ height: "20px" }}>
//                         <div class="progress-bar bg-warning text-center" style={{ width: "80%" }}><b>80%</b></div>
//                     </div>
//                 </span>
//                 </div>
//             })
//         }
        
//         </div>
        
//         </div>
//         </div>
//         </>
//     )
// }
// export default Skills;


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Skills() {
    const skillsData = {
        "Web Technologies & Libraries": ["HTML", "CSS", "Bootstrap", "JavaScript", "React Js"],
        "Programming": ["Java", "Python"],
        "Query Languages / Database": ["MySQL"],
        "Frameworks": ["Collections", "Hibernate", "Spring", "Streamlit (Python)"],
        "Machine Learning & AI": ["Machine Learning", "Artificial Neural Networks (ANN)"],
        "Models": ["YOLO", "Buffalo Insightface"],
        "Testing": ["Postman"],
        "API": ["FastAPI", "Spring REST API"],
        "Cloud": ["AWS"],
        "Data Visualization": ["Power BI"],
        "Tools": ["Netlify", "VS Code", "Jupyter Notebook", "Eclipse", "XAMPP", "PowerPoint"],
        "Source Code Management": ["GIT"]
    };

    return (
        <div className="container my-5">
            <div className="row g-4">
                {Object.entries(skillsData).map(([category, skills], idx) => (
                    <div key={idx} className="col-md-6">
                        <div className="card skill-card h-100">
                            <div className="card-body">
                                <h6 className="fw-bold text-dark mb-3">{category}</h6>
                                {skills.map((skill, index) => (
                                    <div key={index} className="mb-3">
                                        <div className="d-flex justify-content-between">
                                            <span className="fw-semibold">{skill}</span>
                                            <span className="small text-muted">80%</span>
                                        </div>
                                        <div className="progress" style={{ height: "8px" }}>
                                            <div
                                                className="progress-bar bg-warning"
                                                style={{ width: "80%" }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .skill-card {
                    border: none;
                    border-radius: 12px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .skill-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 6px 15px rgba(0,0,0,0.15);
                }
                .progress {
                    background-color: rgba(0, 0, 0, 0.05);
                    border-radius: 5px;
                }
            `}</style>
        </div>
    );
}

export default Skills;
