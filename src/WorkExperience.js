import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function WorkExperience(){
    return(
        <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontSize: { xs: '0.6rem', sm: '0.6rem', md: '1rem' } }} ><b>SPECTRA: Smart Processing and Evaluation of Critical Trends and Real-Time Alerting</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          SPECTRA is an AI tool that analyzes CCTV footage to detect incidents like theft, accidents, and crime. This project gave me hands-on experience with cloud and AI technologies.
          <ul>

            <li>Live Video Streaming: Used AWS Kinesis Video Streams to get CCTV footage via RTSP URL.</li>
            <li>Video Chunking: Used AWS Lambda to break live video into 3-minute clips so the AI model can process
            them easily</li>
            <li>AI Transcription: Built a FastAPI service on AWS EC2 to process video chunks and create transcripts using a Large Language Model. </li>
            <li>Storage Management: Used Amazon S3 to store video chunks and transcripts.</li>
            <li>Future Scaling: Planned to use AWS Elastic Kubernetes Service (EKS) for better scaling and management.
            </li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontSize: { xs: '0.6rem', sm: '0.6rem', md: '1rem' } }} ><b>Student Management System</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Developed a console-based student management system that allows for adding, updating, deleting,
and retrieving student details. The system stores these details in a database using JDBC technology.
          <ul>
            <li>Ability to add, remove, update, and retrieve student details.</li>
            <li>Storage of this data in a database.</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    )
}
export default WorkExperience;