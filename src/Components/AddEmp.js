
import * as React from "react";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Autocomplete from "@mui/material/Autocomplete";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

function AddEmp() {
  let navigate = useNavigate();
  const [value, setValue] = React.useState("");
  const [checked, setChecked] = React.useState([false, false]);
  const [alldata,setalldata]=React.useState({
        Name:"",
        MobileNum:"",
        Email:"",
        Address:"",
        State:"",
        City:"",
        date:"",
        Password:"",
        Gender:"",
  });

const [slider, setslider] =React.useState(3)



  React.useEffect(()=>{
   

  },[])

  
const AddHandler=()=>{
  const EmpData=JSON.parse(localStorage.getItem("EMP-DATA"))||[];
  let employee = {
    id:v4(),
    ...alldata,
    slider,
    checked
};
  EmpData.push(employee)
  localStorage.setItem("EMP-DATA",JSON.stringify(EmpData));
  alert("One Record added")
  setalldata({
  Name:"",
  MobileNum:"",
  Email:"",
  Address:"",
  State:"",
  City:"",
  date:"",
  Password:"",
  Gender:"",
})

setChecked([false,false]);
setValue("");
navigate("/employees");
}


  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };
  function valuetext(value) {
    return `${value}°C`;
  }
  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Learning a new language."
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Blogging"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );


  const handleChange = (event) => {
    setValue(event.target.value);
    setalldata(
      {
        MobileNum:alldata.MobileNum,
      Name:alldata.Name,
      Email:alldata.Email,
      Address:alldata.Address,
      State:alldata.State,
      City:alldata.City,
      date:alldata.date,
      Password:alldata.Password,
      Gender:event.target.value,
      C_skill:alldata.C_skill,
      Hobbeis:alldata.Hobbeis
    
    })
  };
  const top100Films = ["akjkj", "jhjhj", "jhjh"];
  const flatProps = {
    options: top100Films.map((option) => option),
  };

console.log(alldata.Name)
console.log(alldata.MobileNum);

  return (
    <>
    <div>
      <h2>
            Employees Details
          </h2>
        </div>
    <div className="main-div">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 5, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
    
      >
        <div>
          <TextField
            required
            id="standard-required"
            label="Name"
            type="text"
            variant="standard"
            value={alldata.Name}
            onChange={(e)=>setalldata({Name:e.target.value,
              MobileNum:alldata.MobileNum,
              Email:alldata.Email,
              Address:alldata.Address,
              State:alldata.State,
              City:alldata.City,
              date:alldata.date,
              Password:alldata.Password,
              Gender:alldata.Gender,
             
            })}
          />
          <TextField
            required
            id="standard-required3"
            label="Mobile Number"
            type="number"
            variant="standard"
            value={alldata.MobileNum}
            onChange={(e)=>setalldata(
              {
                MobileNum:e.target.value,
              Name:alldata.Name,
              Email:alldata.Email,
              Address:alldata.Address,
              State:alldata.State,
              City:alldata.City,
              date:alldata.date,
              Password:alldata.Password,
              Gender:alldata.Gender,
    
            
            })}
          />
          <TextField
            required
            id="standard-required1"
            label="Email"
            type="email"
            variant="standard"
            value={alldata.Email}
            onChange={(e)=>setalldata(
              {
                MobileNum:alldata.MobileNum,
              Name:alldata.Name,
              Email:e.target.value,
              Address:alldata.Address,
              State:alldata.State,
              City:alldata.City,
              date:alldata.date,
              Password:alldata.Password,
              Gender:alldata.Gender,
           
            
            })}
          />
        </div>

        <div className="display">
          <TextareaAutosize
            aria-label="Address"
            minRows={4}
            placeholder="Fill Your Address"
            style={{ margin: 20, width: 300 }}
            value={alldata.Address}
            onChange={(e)=>setalldata(
              {
                MobileNum:alldata.MobileNum,
              Name:alldata.Name,
              Email:alldata.Email,
              Address:e.target.value,
              State:alldata.State,
              City:alldata.City,
              date:alldata.date,
              Password:alldata.Password,
              Gender:alldata.Gender,
              
            
            })}

          />

          <Autocomplete
            {...flatProps}
            onChange={(event, value) => setalldata(
              {
                MobileNum:alldata.MobileNum,
              Name:alldata.Name,
              Email:alldata.Email,
              Address:alldata.Address,
              State:value,
              City:alldata.City,
              date:alldata.date,
              Password:alldata.Password,
              Gender:alldata.Gender,
             
            
            })}
            id="flat-demo"
            renderInput={(params) => {
            
              return<TextField {...params} label="State" variant="standard" />
            }}
            
          
          />
          <Autocomplete
            {...flatProps}
           onChange={(event, value) => setalldata(
              {
                MobileNum:alldata.MobileNum,
              Name:alldata.Name,
              Email:alldata.Email,
              Address:alldata.Address,
              State:alldata.State,
              City:value,
              date:alldata.date,
              Password:alldata.Password,
              Gender:alldata.Gender
            })}
            
            
            id="flat-demo1"
            renderInput={(params) => (
              <TextField {...params} label="City" variant="standard" />
            )  
          }
  
          />
        </div>

        <div>
          <TextField
            required
            id="standard-date-input"
            label="Date"
            type="date"
            variant="standard"
            value={alldata.date}
            onChange={(e)=>setalldata(
              {
                MobileNum:alldata.MobileNum,
              Name:alldata.Name,
              Email:alldata.Email,
              Address:alldata.Address,
              State:alldata.State,
              City:alldata.City,
              date:e.target.value,
              Password:alldata.Password,
              Gender:alldata.Gender
            })}
          />

          <TextField
            required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            style={{ margin: 20}}
            value={alldata.Password}
            onChange={(e)=>setalldata(
              {
                MobileNum:alldata.MobileNum,
              Name:alldata.Name,
              Email:alldata.Email,
              Address:alldata.Address,
              State:alldata.State,
              City:alldata.City,
              date:alldata.date,
              Password:e.target.value,
              Gender:alldata.Gender,
             
            
            })}
          />
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Gender
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </div>


        <div className="display">
        <Box sx={{ width: 200,marginRight:40}}>
          <label>communication skills</label>
      <Slider
        aria-label="communication skills"
        onChange={(e,value)=>setslider(value)
        }
        defaultValue={3}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={5}
      
      />
     
    </Box>
        <div>
      <FormControlLabel
        label="Parent"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
            </div>
      </Box>
      <div className="margin" > <Button onClick={AddHandler} variant="contained">Add new </Button></div>
      </div>
     
    </>
  );
}

export default AddEmp;
