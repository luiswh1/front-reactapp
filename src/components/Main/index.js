import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import avatar from '../../styles/images/avatar.jpg'

const useStyles = makeStyles((theme) => ({
    image: {
        marginLeft: theme.spacing(17),
        borderRadius: '50%',
        marginTop: '25px'

    },
    nome: {
        marginLeft: '150px',
        paddingTop: '20px',
        paddingBottom: '3px',
        color: 'white'
    },
    descriptionAndButtons: {
        marginTop: '25px',
        color: 'white'
    },

    buttonsGit: {
        width: '250px',
        height: '50px',
        marginTop: '20px'
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
 
}));

export default function MainAvatar() {
    const classes = useStyles();

    return(
        <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                           <Typography className={classes.nome} component="h1" variant="h3" color="textPrimary" gutterBottom>
                            Luis Weber
                         </Typography>  
                            <img className={classes.image} alt="" src={avatar}
                            width="50%"
                            height="50%">
                            </img>
                        <Typography className={classes.descriptionAndButtons} variant="h5" align="center" color="textSecondary" paragraph>
                        Extrovertido e comunicativo, busco cada dia mais me adaptar e a aprender as tecnologias mais utilizadas no mercado. <br />
                        Meu foco em resolver problemas é absoluto e eu só paro com a solução em mãos. 
                         </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button  target="_blank" href="https://github.com/luiswh1?tab=repositories" className={classes.buttonsGit} variant="contained" color="primary">
                                        <GitHubIcon /> 
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button target="_blank" href="https://www.linkedin.com/in/luis-henrique-maciel-weber-9a41751b1/" className={classes.buttonsGit} variant="contained" color="primary">
                                        <LinkedInIcon /> 
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                
            </main>
    )
}