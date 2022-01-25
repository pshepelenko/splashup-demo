import * as React from 'react';
import Button from '@mui/material/Button';
import {Modal, Box, Typography, Grid } from '@mui/material';
import Questions from '../components/questions'
import Results from '../components/results'


export default function Quiz() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        alignContent: 'start',
        transform: 'translate(-50%, -50%)',
        width: '95%',
        height: '90%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '30px',
        overflow:'scroll',
    };
    

    const [open, setOpen] = React.useState(false);
    let [stage, setStage] = React.useState('first');
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    

    
    return (
        <div >
                <Button  onClick={handleOpen} className="widget-button" variant="outlined"  
                sx={{
                    position: 'fixed',
                    top: '70%',
                }}>Personalize</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                   
                    >
                    <Box sx={style}>
                    {stage === 'first' &&  
                        <div id="screen-one" className="screen-container">
                            <Typography id="modal-modal-title" variant="h6" component="h2"
                                sx = {{
                                    textAlign: 'center',
                                    marginBottom: '12px'
                                }}
                            >
                            Let's personalize your experience in less then 30 seconds
                            </Typography>
                            <Button className="quiz-button" variant="contained"
                            sx = {{
                                marginTop: '8px',
                                marginBottom: '8px',
                                width: '300px'
                            }}
                            onClick={() => setStage('second')}
                            >Help me find what I want</Button>
                            <Button className="quiz-button" variant="contained"
                            sx = {{
                                marginBottom: '8px',
                                width: '300px'
                            }}
                            >Just browsing</Button>
                            
                        </div>
                    }
                    { stage === 'second' &&  
                        <div className="screen-container"> 
                            <Questions />
                            <Button className="quiz-button" variant="contained"
                            sx = {{
                                marginTop: '32px',
                                marginBottom: '8px',
                                width: '300px'
                            }}
                            onClick={() => setStage('third')}
                            >Next</Button>
                            
                        </div>        
                    }
                    { stage === 'third' &&  
                        <div className="screen-container"> 
                            <Results />
                            <Button className="quiz-button" variant="contained"
                            sx = {{
                                marginTop: '32px',
                                marginBottom: '8px',
                                width: '300px'
                            }}
                            onClick={() => setStage('first')}
                            >Next</Button>
                            
                        </div>        
                    }
                    </Box>

                </Modal>
            <style jsx>{`
                #screen-one {
                    margin-top: 250px;
                }
                .screen-container {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

            `}</style>
                
        </div>
    )
}
