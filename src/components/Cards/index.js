import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Container } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const cards = [
    {
        image: 'https://d33wubrfki0l68.cloudfront.net/7647aad926bd221090e7e9e829e32c0ff125fbe5/2a0a2/assets/images/webp/posts/reactjs-uma-biblioteca-javascript-para-trabalhar-com-views/reactjs.webp',
        name: 'React',
        description: 'Minha Atual tecnologia de estudo e também a base deste projeto, atualmente me encontro com aproximadamente 100 horas de experiencia em React. '
    },

    {
        image: 'https://miro.medium.com/max/1131/0*JH_HgIXBQvuenmUl.jpg',
        name: 'Node',
        description: 'Minha Stack para o Back-end, já possuo vários projetos feitos com a growdev, aproximadamente 300 horas de experiencia.' 
    },
    {
        image: 'https://miro.medium.com/max/1800/1*6ahbWjp_g9hqhaTDSJOL1Q.png',
        name: 'JavaScript',
        description: 'Minha Stack principal de programação, possuo bastante pratica com JS e mais de 500 horas de experiencia.'
    },
    {
        image: 'https://getbootstrap.com.br/docs/4.1/assets/brand/bootstrap-social.png',
        name: 'Bootstrap',
        description: 'O Primeiro no qual eu aprendi a utilizar, possuo várias horas de experiencia com bootstrap.' 
    },
    {
        image: 'https://i.morioh.com/2020/01/11/cfd101025c1a.jpg',
        name: 'Material-UI',
        description: 'Estou praticando e aprendendo sobre Material-UI junto com ReactJS por tanto tenho pouco conhecimento, mas estou melhorando, tanto que este projeto foi feito utilizando Material-UI.' 
    },
    {
        image: 'https://e-tinet.com/wp-content/uploads/2018/10/PostgreSQL-como-instalar-1024x512.png',
        name: 'PostgreSQL',
        description: 'Meu Gerenciador de Banco de dados mais utilizado, tenho bastante experiencia com back-end utilizando o mesmo.'
    },
    {
        image: 'https://miro.medium.com/max/1200/1*kg8aAUNxI055OhNhT04srQ.png',
        name: 'Heroku',
        description: 'Plataforma que utilizo para subir meus Apps front e back, inclusive está aplicação está upada no Heroku.'
    },
    {
        image: 'https://www.webdevdrops.com/git-desfazer-commit-d410d630f11c/images/git-logo.png',
        name: 'Git',
        description: 'A Stack para controle e versionamento é o Git.'
    },

]

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '400px',
        width:'230px',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));




export default function CardTech(props) {

    const classes = useStyles();

    return(
        <Container className={classes.cardGrid} maxWidth="md">
                    <h1>Minhas Tecnologias e experiências: </h1><br></br>
                    <Grid container spacing={3}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={6} sm={6} md={3}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={card.image}
                                        title={card.name}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.name}
                                        </Typography>
                                        <Typography>
                                            {card.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
    )
}