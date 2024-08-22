import Education from './Education'
import Certificates from './Certificates'
import Skills from './Skills'
import Projects from './Projects'
import './More.css'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
function More(props) {
    // const useStyles = makeStyles({
    //     chipIcon: {
    //       color: 'blue', 
    //     },
    //   });
    //   const classes = useStyles();
    return (
        <>
            <div className='container mt-5'>
                <div className='row more' >
                    <div className='col-md-6' data-aos="fade-right" data-aos-duration="3000">
                        <h1 className='text-danger d-flex justify-content-center'>Education</h1>

                        <Education />
                    </div>
                    <div className='col-md-6' data-aos="fade-left" data-aos-duration="3000">
                        <h1 className='text-danger d-flex justify-content-center'>Skills</h1>
                        <Skills />
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md-6' data-aos="fade-right" data-aos-duration="3000">
                        <h1 className='text-danger d-flex justify-content-center' >Projects</h1>
                        <Projects />
                    </div>
                    <div className='col-md-6' data-aos="fade-left" data-aos-duration="3000">
                        <h1 className='text-danger d-flex justify-content-center'>Certifications</h1>
                        <Certificates />
                    </div>
                </div>
            </div>
            <br />
            <Divider >
                <Chip   avatar={<Avatar><ArrowCircleLeftOutlinedIcon style={{ color: 'red' }}/></Avatar>} style={{ color: 'white' }}  label="Back" size="large" onClick={() => {props.fn()}} sx={{bgcolor:"red"}}/>
                <br />
            </Divider>
        </>
    )
}
export default More;