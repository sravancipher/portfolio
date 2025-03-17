import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Projects() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontSize: { xs: '0.6rem', sm: '0.6rem', md: '1rem' } }} ><b>Chatbot (ParaBot)</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this project, I developed a chatbot called ParaBot. I used React JS for the front end and Python
for the back end. The chatbot is powered by the Gemini FlashAPI 1.5 model, and the front end and back end
communicate through Python FastAPI.

          <p><a href="https://github.com/sravancipher/ChatBot_LLM">Github</a></p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontSize: { xs: '0.6rem', sm: '0.6rem', md: '1rem' } }} ><b>OTT</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Created a custom OTT platform using HTML, CSS, and Bootstrap.
          <p><a href="https://github.com/sravancipher/myownott.git">Github</a></p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontSize: { xs: '0.7rem', sm: '0.7rem', md: '1rem' } }}><b>OTT - Screenpoint</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Developed a personalized OTT platform using React JS and Bootstrap, and integrated it with a
MySQL database for data management.
          <p><a href="https://screenpoint.netlify.app/">Website</a></p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography  sx={{ fontSize: { xs: '0.8rem', sm: '0.8rem', md: '1rem' } }}><b>ScreenSaga(OTT)</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I developed a dynamic OTT platform using HTML, CSS, Bootstrap, ReactJs API integration with
JSON, MySQL for database management, and Spring REST controllers.
          <p><a href="https://screensaga.netlify.app/">Website</a></p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontSize: { xs: '0.7rem', sm: '0.7rem', md: '1rem' } }} ><b>Stress Prediction Based on the Sleeping Patterns</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          As part of our mini project, we developed a machine learning model named "stress prediction based
on sleeping patterns." This model predicts stress levels by analyzing physiological parameters. We used Python
to build the model and created a user interface with Streamlit. Users can input their data into the interface to
find out their stress levels.

          <p><a href="https://github.com/sravancipher/mini_project">Github</a></p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontSize: { xs: '0.7rem', sm: '0.7rem', md: '1rem' } }} ><b>Chegg Meter</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Created a Google Chrome Extension for Chegg to tally the number of questions using HTML,CSS and JavaScript.
          <p><a href="https://github.com/sravancipher/Chegg-Extension">Github</a></p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default Projects