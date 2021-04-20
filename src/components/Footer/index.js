import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(2),
        backgroundColor: 'inherit',
        color: "FFFFFF",
        marginTop: '40px'
    },
}));

export default function FooterApp() {
    const classes = useStyles();
    return(
        <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            Desenvolvido por Luis Weber
</Typography>
        <Typography className={classes.footer} variant="subtitle1" align="center"  component="p">
            Projeto para o processo seletivo do Garupa - 17/04/2021 <br />
            Tecnologias utilizadas: ReactJS , NodeJS, PostgreSQL, Heroku , Material-UI.
</Typography>
    </footer>
    )
}