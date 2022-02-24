import React,{useState} from 'react'
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {Col,Button,Modal} from "react-bootstrap";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";


function valuetext(value) {
  return `${value}°C`;
}

function FilterBar() {
  
   const [smShow, setSmShow] = useState(true);
  
     
    const [value, setValue] = useState([20, 37]);
     const [age, setAge] = useState("");


     const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
      <>
    <div>
    <Modal
            
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
            centered
          >
            <Modal.Header style={{ backgroundColor: "#009acc" }} closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                <span className="Please-enter-your-PI-modal">
                <div className="modal-heading">
                  Please enter your PIN code, So we can provide better result
                  accordingly.
                  </div>
                </span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="Modal-Body">
            <div>
            <TextField id="outlined-basic" label="Pin-Code" variant="outlined" />
            </div>
            <div>
            <Button variant="outline-info" className="Avilable-Size-Btn-modal">
                 APPLY
                </Button>{" "}
            </div>
            </Modal.Body>
          </Modal>
     <Col className="Filter-Left-Bar" >
            <Col>

              <div sm={2}  className="filter-btns">
                <Button variant="light">FILTER BY</Button>
                <Button variant="light">RESET ALL</Button>
              </div>
            </Col>
            <div className="filter">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Collection
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChangeAge}
                  label="Collection"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Color
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChangeAge}
                  label="Color"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChangeAge}
                  label="Categories"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <div className="Slider-Box">
                <Box size="small">
                  Price Range
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Box>
              </div>
             
              <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Short By
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChangeAge}
                  label="Short By"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Filter 1
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChangeAge}
                  label="Filter 1"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Filter 2
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChangeAge}
                  label="Filter 2"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Filter 3
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChangeAge}
                  label="Filter 3"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Col>
    
    </div>
    
    </>
  )
}

export default FilterBar