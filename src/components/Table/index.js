import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

function createData(name,nome, email, idade, telefone) {
    return { name, nome, email, idade, telefone };
}

const rows = [
    createData('Nome:', 'Luis Henrique Maciel Weber'), 
    createData('E-mail:', 'luisw.h@live.com'), 
    createData('Idade:', 21), 
    createData('Telefone:', '(53)98466-4813'), 
    createData('Cidade:', 'Pelotas - RS'), 
    createData('Endereço:', 'Rua Leopoldo Broad - 2478'), 
    createData('Escolaridade:', 'Cursando Terceiro ano do Médio a noite'), 
    createData('Cursando:', 'Desenvolvimento Web FullStack - Growdev'), 
    createData('Nível de Inglês:', 'Intermediário'), 
];


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    
}));

export default function TableData(props) {
    const classes = useStyles();

    return(
        <Container>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><h1>Dados Pessoais</h1></TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.nome}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.idade}</TableCell>
                                    <TableCell align="right">{row.telefone}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br /> <br />
                </Container>
    )
}