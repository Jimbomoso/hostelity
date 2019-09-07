import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import randomImage from './subcomponent/randomImages';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://switchbak.herokuapp.com/">
                Switchbak &nbsp;
            {new Date().getFullYear()}
            </Link>
        </Typography >
    );
}

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundImage: `url(${randomImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            margin: '0 auto'
        },
    },
    paper: {
        marginTop: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
    formErrorMessage: {
        display: 'block',
        color: 'red',
        fontWeight: 'bold',
        fontSize: '12'
    },
    formNonErrorMessage: {
        display: 'none'
    },
    signupContainer: {
        padding: '1vh !important',
        position: 'relative !important',
        margin: '0 auto !important',
        top: '15vh',
        backgroundColor: 'rgba(220,220,220,0.8)',
        borderRadius: '15px',
        boxShadow: '0px 1px 1px rgba(20, 100, 30, 0.8)',
        border: '1px solid grey'
    }
}));


export default function Signup(props) {
    const classes = useStyles();
    
    const [firstName, updateFirstName] = useState('');
    const [lastName, updateLastName] = useState('');
    const [email, updateEmail] = useState('');
    const [password, updatePassword] = useState('');

    const handleInputChange = event => {
        const { name, value } = event.target;
        switch (name) {
            case 'firstname': updateFirstName(value);
            break;
            case 'lastname': updateLastName(value);
            break;
            case 'email': updateEmail(value);
            break;
            case 'password': updatePassword(value);
            break;
            default: return;
        }
      };

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(event);
        const user = {
            firstName,
            lastName,
            email,
            password
        }
        Axios.post("/auth/users/signup", user)
        .then(function(res){
            console.log(res.data);
            window.location = '/login';
        }).catch(function(err){
            console.log(err);
        })
    }

    return (
        <Container component="main" maxWidth="xs" className={classes.signupContainer}>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create New Account
        </Typography>
                <form onSubmit={handleFormSubmit} className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="firstname"
                        label="First Name"
                        name="firstname"
                        autoComplete="firstname"
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="lastname"
                        label="Last Name"
                        name="lastname"
                        autoComplete="lastname"
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleInputChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Create Account
          </Button>
                    <Grid container>
                        {/* <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid> */}
                        <Grid item>
                            <Link href="/login" variant="body2">
                                {"Back to login page"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}