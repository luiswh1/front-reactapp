import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '30px'
  },
  title: {
    fontSize: 23,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Comentario(props) {
 const classes = useStyles();

        return (
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {props.comentario.name}
                </Typography>
                <Typography variant="h5" component="p">
                 {props.comentario.comentario}
                </Typography>
              </CardContent>
            </Card>
          );
        }