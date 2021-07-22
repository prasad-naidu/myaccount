import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Myplan() {
  const classes = useStyles();

  return (
  <div className="card-div">
        <div className="card-sub">
        <Card className={classes.root} variant="outlined">
      <CardContent>
       <h5>FREE</h5>
       <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,  </p>
       <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,vulnerabilities  </p>
       <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,  </p>
       <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,  </p>    
     <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,  </p>
    <h4>$0</h4>
      </CardContent>
      <CardActions>
      <Button id="card-button">
       Down Grade
     </Button>
      </CardActions>
    </Card>
    </div>
    <div className="card-sub">
        <Card className={classes.root} variant="outlined">
      <CardContent>
       <h5>Pro</h5>
       <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,  </p>
       <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,vulnerabilities  </p>
       <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,  </p>
       <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,  </p>    
     <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,  </p>
    <h4>$12</h4>
      </CardContent>
      <CardActions>
      <Button id="card-button">
       Down Grade
     </Button>
      </CardActions>
    </Card>
    </div>
    <div className="card-sub">
        <Card className={classes.root} variant="outlined">
      <CardContent>
       <h5>Team</h5>
       <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,  </p>
       <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,vulnerabilities  </p>
       <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,  </p>
       <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,  </p>    
     <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,  </p>
    <h4>$23</h4>
      </CardContent>
      <CardActions>
      <Button id="card-button">
       Down Grade
     </Button>
      </CardActions>
    </Card>
    </div>
    <div className="card-sub">
        <Card className={classes.root} variant="outlined">
      <CardContent>
       <h5>Agency</h5>
       <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,  </p>
       <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,vulnerabilities  </p>
       <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,  </p>
       <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,  </p>    
     <p><img src="https://image.flaticon.com/icons/png/128/447/447147.png" alt="tick" /> A check mark, checkmark,  </p>
    <h4>$43</h4>
      </CardContent>
      <CardActions>
      <Button id="card-button">
       Down Grade
     </Button>
      </CardActions>
    </Card>
    </div>
    
   
  </div>
  );
}