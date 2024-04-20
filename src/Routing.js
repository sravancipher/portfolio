import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
function Links(){
    return(
        <>
        <div className="btn-group">
        <div class="btn btn-danger" ><Link style={{textDecoration:"none",color:"white"}}to="/more">Eductaion</Link></div>
        <div class="btn btn-danger" ><Link style={{textDecoration:"none",color:"white"}}to="/more">Certificates</Link></div>
        <div class="btn btn-danger" ><Link style={{textDecoration:"none",color:"white"}}to="/more">Skills</Link></div>
        <div class="btn btn-danger" ><Link style={{textDecoration:"none",color:"white"}}to="/more">Projects</Link></div>
        </div>
        </>
    )
}
function Routing(){
    return(
        <>
          <Links/>
        </>
    )
}
export default Routing;