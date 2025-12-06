import React from "react";

// MUI Imports
import {
    Grid,
    CssBaseline,
    Typography,
} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

// Leaflet Imports
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import {Icon} from "leaflet";
import 'leaflet/dist/leaflet.css';

// Base Components
import BaseCard from '../Base/BaseCard';

// Assets and Data
import instituteIconPng from '/assets/institute_map.png';
import mylistings from '../../data/dummydata.js';

function EngagementMap() {
    const instituteIcon = new Icon({
        iconUrl: instituteIconPng,
        iconSize: [40, 40]
    });

    return (
        <>
            <CssBaseline/>
            <Grid container spacing={2} sx={{px: 2}}>
                <Grid item xs={12}>
                    <Typography variant="h4" sx={{mb: 2, fontWeight: 'bold'}}>
                        Engagement Map
                    </Typography>
                    <div style={{height: '600px', width: '100%'}}>
                        <MapContainer 
                            center={[33.753746, -84.386330]} 
                            zoom={13} 
                            scrollWheelZoom={true}
                            style={{height: '100%', width: '100%', borderRadius: '8px'}}
                        >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                            {mylistings.map((listing) => (
                                <Marker 
                                    key={listing.id} 
                                    icon={instituteIcon}
                                    position={listing.location.coordinates}
                                >
                                    <Popup>
                                        <Typography variant="h6" sx={{fontWeight: 'bold'}}>
                                            {listing.name}
                                        </Typography>
                                        <Typography variant="body2">
                                            {listing.description}
                                        </Typography>
                                        <Typography variant="caption" sx={{color: 'gray', display: 'block', mt: 1}}>
                                            {listing.division}
                                        </Typography>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default EngagementMap;
