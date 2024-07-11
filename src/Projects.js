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
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography  sx={{ fontSize: { xs: '0.8rem', sm: '0.8rem', md: '1rem' } }}><b>https://screenpoint.netlify.app/</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Developed a personalized OTT platform using React JS and Bootstrap, and integrated it with a MySQL database for data management.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontSize: { xs: '0.7rem', sm: '0.7rem', md: '1rem' } }}><b>https://github.com/sravancipher/rguktorganizations.git</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Built a website using HTML, CSS, and Bootstrap showcasing various organizations at RGUKT
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography  sx={{ fontSize: { xs: '0.8rem', sm: '0.8rem', md: '1rem' } }}><b>https://github.com/sravancipher/myownott</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Created a custom OTT platform using HTML, CSS, and Bootstrap
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.8rem', md: '1rem' } }}><b>https://github.com/sravancipher/vizon.git</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  sx={{ fontSize: { xs: '0.8rem', sm: '0.8rem', md: '1rem' } }}>
          Designed a website focused on animations using CSS and JavaScript
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography  sx={{ fontSize: { xs: '0.8rem', sm: '0.8rem', md: '1rem' } }}><b>https://github.com/sravancipher/Blackjack.git</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Built a Blackjack game using JavaScript.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontSize: { xs: '0.7rem', sm: '0.7rem', md: '1rem' } }} ><b>https://github.com/sravancipher/Movies_Counter.git</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Built a website to track the number of movies watched. The counter increments each time a movie is clicked.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontSize: { xs: '0.6rem', sm: '0.6rem', md: '1rem' } }} ><b>https://github.com/sravancipher/CODSOFT/tree/master/Task5. </b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          During my internship at CodSoft, I developed a console-based student management system that allows for adding, updating, deleting, and retrieving student details. The system stores these details in a database using JDBC technology.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontSize: { xs: '0.6rem', sm: '0.6rem', md: '1rem' } }} ><b>https://github.com/sravancipher/CODSOFT/tree/master/Task3.</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          During my internship at CodSoft, created a graphical user interface (GUI) for an ATM using Java Server Pages (JSP).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontSize: { xs: '0.6rem', sm: '0.6rem', md: '1rem' } }} ><b>https://screensaga.netlify.app/ </b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I developed a dynamic OTT platform using HTML, CSS, Bootstrap, ReactJs API integration with JSON, MySQL for database management, and Spring REST controllers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontSize: { xs: '0.6rem', sm: '0.6rem', md: '1rem' } }} ><b>https://github.com/sravancipher/mini_project</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          As part of our mini project, we developed a machine learning model named "stress prediction based on sleeping patterns." This model predicts stress levels by analyzing physiological parameters. We used Python to build the model and created a user interface with Streamlit. Users can input their data into the interface to find out their stress levels.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default Projects