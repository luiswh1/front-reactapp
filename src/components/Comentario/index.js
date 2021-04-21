import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import commentApi from '../../services/scripts';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: '30px'
  },
  title: {
    fontSize: 23,
  },
 
}));


export default function Comentario(props) {
  const classes = useStyles();

  function deleta() {
    commentApi.deleteComment(props.comentario.id).then((dados) => {
      props.reload()

    });
  }

  return (
    <Card key={props.comentario.id} className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.comentario.name}
        </Typography>
        <Typography variant="h5" component="p">
          {props.comentario.comentario}
          <br />
          <div style={{ margin: '10px', marginTop: '25px' }}>
            <Button
              style={{ marginLeft: '10px', marginTop: '10px' }}
              onClick={deleta}
              variant="contained"
              color="secondary"
              type="submit">
              Excluir
            </Button>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}