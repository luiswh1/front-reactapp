import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    position: {
        marginTop: '400px',
    },
    botao: {
        marginLeft: '500px',
        marginTop: '20px',
        width: '220px',
        height: '50px'

    }
}));

export default function Confirm() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container>
                <Grid container spacing={2} justify="center">
                    <h1 className={classes.position}>Prontinho ! já recebi seus dados e em breve estarei entrando em contato. </h1>
                </Grid>
                <Link to="/">
                    <Button className={classes.botao}
                        variant="contained"
                        color="primary">
                        Ok
                        </Button>
                </Link>
            </Container>
        </React.Fragment>
    )
}