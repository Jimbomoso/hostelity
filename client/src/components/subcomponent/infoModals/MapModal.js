import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Fab, Grid, Paper } from '@material-ui/core'
import Info from '@material-ui/icons/Info'

// import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <br></br>
            <Fab size='small' type="button" onClick={handleOpen}>
                <Info />
            </Fab>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Paper>
                        <Grid container spacing={3}>
                            <Grid item xs={12} align='center'>
                                <h2 id="transition-modal-title">How to plan a trip:</h2>
                                {/*Add User Helper Information within this grid */}

                            </Grid>
                            <Grid item xs={6} align="center">

                                <p id="transition-modal-description"></p>
                                {/*Add User Helper Information within this grid */}
                                <h2> Instructions:</h2>
                                <ol>
                                    <li>Enter a starting and ending point</li>
                                    <li>Press add waypoint if you would like to add locations between your starting and ending points </li>
                                    <li>Press begin once you have entered all of the locations you want to include on your trip</li>
                                    <li>Use the map to zoom in around each waypoint to see the available lodging options near that location </li>
                                </ol>
                            </Grid>
                            <Grid item xs={6} align="center">
                                <img src='/assets/images/tripPlot.gif' width='90%'></img>

                            </Grid>

                        </Grid>
                    </Paper>
                </Fade>
            </Modal>
        </div>
    );
}