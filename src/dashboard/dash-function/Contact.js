import React from 'react';
import Dashboard from "../dash";
import { Card, CardContent, Typography, useTheme, useMediaQuery } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = props => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className='dash' style={{ display: 'flex', backgroundColor: '#0a350d' }}>
            <Dashboard />
            <Card style={{ width: '50%', margin: '10em auto', padding: '1em', backgroundColor: '#f5f5f5' }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Contact Page
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <PhoneIcon /> Phone Number: 222-222-2222
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <EmailIcon /> Email: CometBank@gmail.com
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <LocationOnIcon /> 254 Washington Street, Washington.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Contact;
