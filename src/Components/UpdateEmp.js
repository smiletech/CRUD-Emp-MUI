import * as React from "react";
import {useNavigate,useParams} from "react-router-dom";
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

const EmpDatas=JSON.parse(localStorage.getItem("EMP-DATA"));
function UpdateEmp() {
  let { id } = useParams();
  let navigate = useNavigate();
  const EmpDataa=EmpDatas.filter((ele)=>ele.id==id)
  const EmpData=EmpDataa[0];
    const [value, setValue] = React.useState(EmpData.Gender);
    const [checked, setChecked] = React.useState(EmpData.checked);
    const [slider, setslider] =React.useState(2)
    const [alldata,setalldata]=React.useState({
      Name:EmpData.Name,
      MobileNum:EmpData.MobileNum,
      Email:EmpData.Email,
      Address:EmpData.Address,
      State:EmpData.State,
      City:EmpData.City,
      date:EmpData.date,
      Password:EmpData.Password,
      Gender:EmpData.Gender,
});

 React.useEffect(()=>{
 
},[alldata])



const UpdateHandler=()=>{
  const EmpData=JSON.parse(localStorage.getItem("EMP-DATA"))||[];

  for(let i=0;i<EmpData.length;i++)
  {
    if(EmpData[i].id===id)
    {
      EmpData[i].id=id;
      EmpData[i].Name=alldata.Name;
      EmpData[i].Email=alldata.Email;
      EmpData[i].MobileNum=alldata.MobileNum;
      EmpData[i].Address=alldata.Address;
      EmpData[i].State=alldata.State;
      EmpData[i].City=alldata.City;
      EmpData[i].date=alldata.date;
      EmpData[i].Password=alldata.Password;
      EmpData[i].Gender=alldata.Gender;
      EmpData[i].slider=slider;
      EmpData[i].checked=checked;
    }
  }



  console.log(JSON.stringify(EmpData))
  
  localStorage.setItem("EMP-DATA",JSON.stringify(EmpData));
  alert("One Record updated")
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
  navigate("/employees")
};



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
    };
  
    const State = ["Maharashtra", "Bihar", "Goa"];
    const City = ["North Goa", "Patna", "Pune"];
    
    const flatProps1 = {
      options: City.map((option) => option),
    };
    const flatProps = {
      options: State.map((option) => option),
    };
  return (
    <>

    <div>
      <h2>
          Update Employees Details
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
            id="standard-required1"
            label="Name"
            type="text"
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
            id="standard-required2"
            label="Mobile Number"
            type="number"
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
            id="standard-required3"
            label="Email"
            type="email"
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
            value={alldata.State}
            id="flat-demo"
            renderInput={(params) => (
              <TextField {...params} label="State" variant="standard" />
            )}
          />
          <Autocomplete
            {...flatProps1}
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
           value={alldata.City}
            id="flat-demo1"
            renderInput={(params) => (
              <TextField {...params} label="City" variant="standard" />
            )}
          />
        </div>

        <div>
          <TextField
            required
            id="standard-date-input"
            label="Date"
            type="date"
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
        <Box sx={{ width: 200 }}>
      <Slider
        onChange={(e,value)=>setslider(value)
        }
        aria-label="communication skills"
        // defaultValue={slider}
        value={slider}
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

      <div className="margin" > <Button onClick={UpdateHandler} variant="contained">Update</Button></div>
      </div>
     
    </>


  )
}

export default UpdateEmp