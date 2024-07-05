'use client'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';


function createData(id:number, name:string, progress:number, quantity:number, date:number, ) {
  return {
    id,
    name,
    progress,
    quantity,
    date,
    
  };
}
const rows = [
  
  createData(1, 'Horizon UI PRO', 305, 3.7, 67),
  createData(2, 'Horizon UI Free', 452, 25.0, 51),
  createData(3, 'Weekly Update', 262, 16.0, 24),
  createData(4, 'Venus 3D Asset', 159, 6.0, 24),
  createData(5, 'Marketplace', 356, 16.0, 49),
];
const Checktable = () => {
  const [selected, setSelected] = useState([]);
  const isSelected = (id) => selected.indexOf(id) !== -1;
  return (
    <>
    <Box sx={{ width: '100%', }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <TableHead>
            <TableRow>
                <TableCell colSpan={4}>
                <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h5"
          id="tableTitle"
          component="div"
        >
          Check Table
        </Typography>
              </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.progress}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                  </TableRow>
                );
              })}
          
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
    </Box>
    </>
  )
}

export default Checktable