import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import CardTech from '../../components/Cards';
import Tabelas from '../../components/Table';
import NavBar from '../../components/Nav';
import MainAvatar from '../../components/Main';
import FooterApp from '../../components/Footer';
import Comentario from '../../components/Comentario';
import commentApi from '../../services/scripts';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },

}));

export default function Home() {
    const classes = useStyles();

    const [comentarios, setComentario] = useState([]);
    const [comentarioNome, setcomentarioNome] = useState("");
    const [descricao, setDescricao] = useState("");

    function novoComentario(e) {
        let validador = validate();

        if(validador.comentarioNome === true && validador.descricao === true) {
            commentApi.postComment(comentarioNome, descricao)
            .then((dados) => {
                setcomentarioNome('');
                setDescricao('');
                buscaDados();
            });
        } else {
            alert("Preencha todos os formularios")
            e.preventDefault();
            return
        }
        e.preventDefault();
    }

    useEffect(() => {
        buscaDados()
    }, []);

    function buscaDados() {
        commentApi.getComments()
            .then((dados) => {
                setComentario(dados)
            });
    }

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [telefone, setTelefone] = useState("");

    function novoContato(e) {
        let validador = validateContact()

        if(validador.email === true && validador.name === true && validador.telefone === true) {
            commentApi.postContact(email, name, telefone)
            .then((dados) => {
                setEmail('');
                setName('');
                setTelefone('')
                return window.location.href = '/confirm'
            });
        } else {
            alert("Preencha todos os formularios")
            e.preventDefault();
            return
        }
        e.preventDefault();

    }

    function validate() {
        let obj = { comentarioNome: comentarioNome !== '', descricao: descricao !== '' }
        return obj;
    }

    function validateContact() {
        let obj = {email: email !== '', name: name !== '', telefone: telefone !== ''}
        return obj
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <NavBar />
            <MainAvatar />
            <CardTech />
            <Tabelas />
            <Container>
                <h1 style={{ color: 'white' }}>Comentarios</h1>
                <form className={classes.root} onSubmit={novoComentario} method="post" autoComplete="off">
                    <TextField
                        id="name"
                        label="Nome"
                        style={{ width: '300px', backgroundColor: 'white' }}
                        value={comentarioNome}
                        onChange={e => setcomentarioNome(e.target.value)} /> <br></br>
                    <TextField
                        id="descricao"
                        style={{ width: '500px', backgroundColor: 'white' }}
                        label="Comentario"
                        multiline
                        rowsMax={6}
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    /> <br /> <br />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Enviar</Button>
                </form>
                <hr />
                {comentarios.map((comentario) => (
                    <Comentario key={comentario.id} comentario={comentario} />
                ))}
            </Container>
            <br />


            <Container>
                <h1>Deixe seus dados para que eu possa entrar em contato</h1>
                <form className={classes.root} onSubmit={novoContato} method="post" autoComplete="off">
                    <div>
                        <TextField
                            id="standard-required-input"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            label="E-mail"
                            type="email"
                            style={{
                                width: '350px',
                                backgroundColor: 'white',

                            }}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-required-input"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            label="Nome"
                            type="text"
                            style={{ width: '350px', backgroundColor: 'white' }}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-number-input"
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)}
                            label="Telefone (ddd)"
                            type="phone"
                            style={{ width: '350px', backgroundColor: 'white' }}
                        />
                    </div>
                        <Button
                        type="submit"
                        variant="contained"
                        color="primary">
                        Enviar
                     </Button>
                   
                  
                </form>
            </Container>
            <br />
            <FooterApp />
        </React.Fragment>
    )
}
