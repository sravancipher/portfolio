import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
    {
        label: 'B.Tech',
        description: `Rajiv Gandhi University of Knowledge Technologies, Nuzvid | 2021 - 2025
    B.Tech - Computer Science Engineering (CSE)
    CGPA: 9.00
    `,
    },
    {
        label: 'PUC',
        description:
            `Rajiv Gandhi University of Knowledge Technologies, Nuzvid | 2019 - 2021
       Pre- University Course (PUC)
       CGPA: 9.62
      `,
    },
    {
        label: 'School',
        description: `Government High School, Srikakulam | 2018 – 2019
    High School (SSC)
    GPA: 10.00
    `,
    },
];

function Education() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel>
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography>{step.description}</Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1, bgcolor: "red" }}
                                    >
                                        {index === steps.length - 1 ? 'Done' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1,color:"red" }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>  These are my educational details</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1,color:"red" }}>
                        Recheck
                    </Button>
                </Paper>
            )}
        </Box>
    );
}
export default Education;
