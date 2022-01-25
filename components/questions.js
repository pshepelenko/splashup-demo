import * as React from 'react';
import Button from '@mui/material/Button';
import {Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';


function FilterButton({filters, buttonId, filtersUpdate, buttonText}) {
    return (
        <Button variant={filters.includes(buttonId) ? 'contained' : 'outlined' }
                                    sx = {{
                                        
                                        marginBottom: '8px',
                                        
                                    }}
                                    onClick={() => {
                                        const newFilters = filters.filter((filter) => filter !== buttonId);
                                        if (newFilters.length == filters.length) {
                                            filtersUpdate((prevFilters) => [
                                                ...prevFilters,
                                                buttonId
                                            ])
                                        } else filtersUpdate(newFilters)
                                        
                                    }}
        >{buttonText}</Button>
    )
}

FilterButton.propTypes = {
    filters: PropTypes.array,
    buttonId: PropTypes.string,
    filtersUpdate: PropTypes.func,
    buttonText: PropTypes.string,
  };




export default function Questions() {
    let [selectedFilters, setFilter] = React.useState([]);
    return (
            <div className="screen-container">                           
                            <Typography id="modal-modal-title" variant="h6" component="h2"
                                sx = {{
                                    textAlign: 'center',
                                    marginBottom: '12px'
                                }}
                            >
                            So we can  give you  a better experience, we’d love to learn about your lifestyle and needs
                            </Typography>
                            <Grid 
                                container 
                                spacing={2} 
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item xs={4}>
                                
                                    <Button className="quiz-button" variant={selectedFilters.includes('button1') ? 'contained' : 'outlined' }
                                    sx = {{
                                        
                                        marginBottom: '8px',
                                        
                                    }}
                                    onClick={() => {
                                        const newFilters = selectedFilters.filter((filter) => filter !== 'button1');
                                        if (newFilters.length == selectedFilters.length) {
                                            setFilter((prevFilters) => [
                                                ...prevFilters,
                                                'button1'
                                            ])
                                        } else setFilter(newFilters)
                                        
                                    }}
                                        >Button 1</Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <FilterButton
                                        filters = {selectedFilters}
                                        buttonId = {'button2'}
                                        filtersUpdate = {setFilter}
                                        buttonText = {'Button 2'}
                                    /> 
                                </Grid>
                                <Grid item xs={4}>
                                    <FilterButton
                                        filters = {selectedFilters}
                                        buttonId = {'button3'}
                                        filtersUpdate = {setFilter}
                                        buttonText = {'Button 3'}
                                    /> 
                                </Grid>
                            </Grid>
                            {selectedFilters}
                            
                            <style jsx>{`
                                    .screen-container {
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    align-items: center;
                                    }

                            `}</style>    
                        </div>
    )                        
}