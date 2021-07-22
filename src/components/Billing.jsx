import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "../App.css"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('507f191e810c19729de860ea', 7/12/1998, 23, 24 ),
  createData('507f191e810c19729de860ea', 7/12/1998, 23, 37),
  createData('507f191e810c19729de860ea', 7/12/1998, 23, 24),
];

export default function Billing() {
  const classes = useStyles();

  return (
 <div className="table-div">
        <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color:"#adadad"}}>REFERENCE ID</TableCell>
            <TableCell style={{color:"#adadad"}} align="right">DATE</TableCell>
            <TableCell style={{color:"#adadad"}} align="right">AMOUNT</TableCell>
            <TableCell style={{color:"#adadad"}} align="right">INVOICE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">7/12/1998</TableCell>
              <TableCell align="right">${row.fat}</TableCell>
              <TableCell align="right"><img id ="pdf"src="https://image.flaticon.com/icons/png/512/80/80942.png" alt="pdf" /> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 </div>
  );
}
