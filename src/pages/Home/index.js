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
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Comentario from '../../components/Comentario';
import commentApi from '../../services/scripts';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
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

export default function Home() {
    const classes = useStyles();

    const [comentarios, setComentario] = useState([]);
    const [comentarioNome, setcomentarioNome] = useState("");
    const [descricao, setDescricao] = useState("");

    function novoComentario(e) {
        let validador = validate();

        if (validador.comentarioNome === true && validador.descricao === true) {
            commentApi.postComment(comentarioNome, descricao)
                .then((dados) => {
                    setcomentarioNome('');
                    setDescricao('');
                    buscaDados();
                });
        } else {
            alert("Insira os campos de “Nome” e “Comentário” para postar um comentario ")
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

        if (validador.email === true && validador.name === true && validador.telefone === true) {
            commentApi.postContact(email, name, telefone)
                .then((dados) => {
                    setEmail('');
                    setName('');
                    setTelefone('')
                    return handleOpen()
                });
        } else {
            alert("Preencha todos os campos de informação (e-mail, nome e telefone)" )
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
        let obj = { email: email !== '', name: name !== '', telefone: telefone !== '' }
        return obj
    }

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <React.Fragment>
            <CssBaseline />
            <NavBar />
            <MainAvatar />
            <CardTech />
            <Tabelas />
            <Container>
                <h1 style={{ color: 'white' }}>Comentar:</h1>
                <div style={{ width: "550px", height: "200px", backgroundColor: 'white' }}>
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
                            label="Comentário (100 caracteres)"
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
                            Comentar</Button>
                    </form>
                </div>
        <br />
                <hr />
                {comentarios.map((comentario) => (
                    <Comentario key={comentario.id} comentario={comentario} />
                ))}
            </Container>
            <br />
            <Container>
                <h1>Deixe seus dados para que eu possa entrar em contato</h1>
                <div style={{ width: "400px", height: "220px", backgroundColor: 'white' }}>
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
                                label="Telefone(ddd) ex: 53999999999"
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
                </div>

            </Container>
            <br />
            <FooterApp />

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
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title" style={{ color: 'black' }}>Dados Recebidos</h2>
                        <p id="transition-modal-description" style={{ color: 'black' }}>Já recebi suas informações e logo estarei entrando em contato, obrigado.</p>

                        <Button
                            style={{width: "100px", marginLeft:"195px"}}
                            onClick={handleClose}
                            variant="contained"
                            color="primary">
                            Ok!
                     </Button> </div>
                </Fade>
            </Modal>
        </React.Fragment>
    )
}
