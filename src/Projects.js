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
          Created a custom OTT platform using React JS and Bootstrap.
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
          <Typography  sx={{ fontSize: { xs: '0.8rem', sm: '0.8rem', md: '1rem' } }}><b>https://github.com/sravancipher/URLsaver.git</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Created a Google Chrome extension using JavaScript that saves URLs of current tabs to Local Storage. Users can delete these URLs by double-clicking on them.
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
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography  sx={{ fontSize: { xs: '0.8rem', sm: '0.8rem', md: '1rem' } }}>Stress Detection through ML(Currently Working)</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
export default Projects