import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import {Modal, Box, Typography, Grid } from '@mui/material';

export default function Results() {
    const results = [
        {
            id: '1',
            features: ['Pro', 'Endurance', 'Coverage', 'Superior movement'],
            picture: 'https://speedo.com.au/dw/image/v2/BDFS_PRD/on/demandware.static/-/Sites-speedo-master-catalog/default/dwae919f1b/images/8_12905/8_12905F888_1.jpg?sw=600&sh=600',
            price: '$250 AUD'   
        },
        {
            id: '2',
            features: ['Pro', 'Endurance', 'Coverage', 'Superior movement'],
            picture: 'https://speedo.com.au/dw/image/v2/BDFS_PRD/on/demandware.static/-/Sites-speedo-master-catalog/default/dw271a24c4/images/8_13315/8_133150001_1.jpg?sw=600&sh=600',
            price: '$150 AUD'   
        },
        {
            id: '3',
            features: ['Pro', 'Endurance', 'Coverage', 'Superior movement'],
            picture: 'https://speedo.com.au/dw/image/v2/BDFS_PRD/on/demandware.static/-/Sites-speedo-master-catalog/default/dwdb4ad50f/images/8_13406/8_13406G585_1.jpg?sw=600&sh=600',
            price: '$200 AUD'   
        },      
        {
            id: '3',
            features: ['Pro', 'Endurance', 'Coverage', 'Superior movement'],
            picture: 'https://speedo.com.au/dw/image/v2/BDFS_PRD/on/demandware.static/-/Sites-speedo-master-catalog/default/dw2d78beff/images/8_13300/8_133000001_1.jpg?sw=600&sh=600',
            price: '$100 AUD'   
        },  
    ]
    
    return (
        <div className="screen-container">
            
                            <Typography id="modal-modal-title" variant="h6" component="h2"
                                sx = {{
                                    textAlign: 'center',
                                    marginBottom: '12px'
                                }}
                            >
                            Your top recommended picks
                            </Typography>
                            {    
                                results.map((result) => 
                                {
                                    return (
                                        <div className = "result-item">
                                        <Grid 
                                            container 
                                            direction="row"
                                            justifyContent="flex-start"
                                            alignItems="center"
                                            
                                        >
                                            <Grid item xs={7}
                                            sx = {{marginLeft: '12px', marginTop: '12px', }}>
                                                <img
                                                    src={result.picture}
                                                    loading="lazy"
                                                    className = "item-picture"
                                                />
                                                <p className="item-price">{result.price}</p>
                                            </Grid>
                                            <Grid item xs={4}>
                                                {
                                                    result.features.map((feature) => <li>{feature}</li>                            
                                                    ) 
                                                }
                                            </Grid>
                                        
                                        </Grid>
                                    </div>
                                        
                                    );
                                })}
                                
                            
                            <style jsx>{`
                                    .screen-container {
                                        width: 100%;
                                        
                                    }

                                    .item-picture {
                                        height: 200px;
                                        border-radius: 30px;
                                    }
                                    .item-price {
                                        text-align: center;
                                    }
                                    .result-item {
                                        width: 100%;    
                                        border-radius: 30px;
                                        border: solid;
                                        border-color: #A09898;
                                        margin-bottom: 8px;
                                    }
                            `}</style>                  
                            
        </div>
    )
}
