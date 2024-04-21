function Skills() {
    let skills=["HTML","CSS","Bootstrap","JavaScript","ReactJs","NodeJs","Java","MySQL"]
    return (

        <>
        {
            skills.map((skill,index)=>{
                return <div key={index}> <span><b>{skill}</b></span>
                <span >
                    <div class="progress" style={{ height: "20px" }}>
                        <div class="progress-bar bg-warning text-center" style={{ width: "100%" }}><b>100%</b></div>
                    </div>
                </span>
                </div>
            })
        }
        </>
    )
}
export default Skills;