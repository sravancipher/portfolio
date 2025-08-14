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
          <Typography sx={{ fontSize: { xs: '0.6rem', sm: '0.6rem', md: '1rem' } }} ><b>AI-Powered Video Surveillance and Real-Time Alerting System</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          It is an AI tool that analyzes CCTV footage to detect incidents like theft, accidents, and crime. This project gave me hands-on experience with cloud and AI technologies.
          <ul>

            <li>Developed FastAPI services for video processing and AI-based transcription using LLMs</li>
            <li>Automated video ingestion using AWS Lambda, S3, and Kinesis Video Streams.</li>
            <li>Managed cloud deployment and scaling using AWS EC2, with future plans for EKS integration.</li>
            
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
          <Typography sx={{ fontSize: { xs: '0.6rem', sm: '0.6rem', md: '1rem' } }} ><b>AI-Based Facial Recognition and Tracking System</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Developed an AI-powered facial recognition system capable of detecting, tracking, and identifying
individuals in real-time video streams. The solution integrates object detection, multi-object tracking, and face
recognition models to achieve high accuracy in dynamic environments.
          <ul>

            <li>Implemented YOLO-based person detection for high-speed, real-time inference.</li>
            <li>Integrated BoT-SORT tracker to maintain consistent IDs across frames.</li>
            <li>Used Buffalo face recognition model for generating and matching embeddings.</li>
            
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