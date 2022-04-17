import * as React from 'react';
import { useNavigate,useParams } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from '@mui/material';

const rowss = JSON.parse(localStorage.getItem("EMP-DATA"))||[];

export default function Listemp() {

  let navigate = useNavigate();
  const [rows,setrows] = React.useState(rowss);
 
 const  DeleteData=(ID)=>{
   if(window.confirm("Do you Want to delete this record !!"))
  {
    const EmpData=JSON.parse(localStorage.getItem("EMP-DATA"))||[];
  const empdata= EmpData.filter((ele)=>ele.id!==ID);
   console.log(empdata)
   localStorage.setItem("EMP-DATA",JSON.stringify(empdata));
   setrows(empdata)}

 }


 React.useEffect(()=>{
  navigate("/employees")
  const EmpData=JSON.parse(localStorage.getItem("EMP-DATA"))||[];
  setrows(EmpData)

},[rows])

 const  EditData=(ID)=>{
  navigate(`/employees/update/${ID}`)
 }

 function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
const NAV=()=>{
  navigate("/employees/add")
}
  return (
    <>
     <div className="margin1" >
       
        <Button onClick={NAV} variant="contained">Add new </Button>
       
        </div>
      
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email Id</TableCell>
            <TableCell align="right">Mobile Number</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody  >
         
          {rows.length>0&&rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Avatar {...stringAvatar(`${row.Name}`)} />

              {/* <Avatar>{`${row.Name[0]} ${row.Name.substring(row.Name.indexOf(' ') + 1,row.Name.indexOf(' ')+2)}`}</Avatar>  */}
              </TableCell>
              <TableCell align="right">{row.Name}</TableCell>
              <TableCell align="right">{row.Email}</TableCell>
              <TableCell align="right">{row.MobileNum}</TableCell>
              <TableCell align="right"> 
              <Stack direction="row" spacing={2} >
                   <Button variant="outlined" onClick={()=>DeleteData(row.id)} startIcon={<DeleteIcon />}>
      
                   </Button>
                    <Button variant="contained" onClick={()=>EditData(row.id)} endIcon={<EditIcon />}>
      
                    </Button>
    </Stack></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

