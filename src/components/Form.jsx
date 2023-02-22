import React, { useState } from "react";
import { TextField, Button, Paper, Grid, Typography } from "@mui/material";
import { AttachFile } from "@mui/icons-material";

const Form = () => {

  // states

  const [inputList, setInputList] = useState([{ name: "", description: "" }]);
  const [sourceList, setSourceList] = useState([{ source: "" }]);
  const [counter, setCounter] = useState(0);

  const [source, setSource] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const handleInputChange = (e, i) => {
    let newForm = [...inputList]
    newForm[i][e.target.name] = e.target.value;
    setInputList(newForm)
  };


  const handleAddClick = () => {
    setInputList([...inputList, { name: inputList.name, description: inputList.description }]);
  };

  const handleRemove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    // localStorage.removeItem('form')
  };

  const handleAddSource = (e, index) => {
    if(sourceList.length < 5){
        setSourceList([...sourceList, [{source: ''}]])
      }else{
        alert("you can add maximum 5 sources");
    }
  };

  const saveForm = () => {
        // var courses = JSON.parse(localStorage.getItem('form') || "[]")
        var course = inputList
        
        console.log(inputList)
        localStorage.setItem('form', JSON.stringify(course))
        const allSources = JSON.parse(localStorage.getItem("form") || "[]");
         setInputList(allSources)
        console.log(inputList)
      }

  // image select
  const handleImagechange = (event) => {
    setImage(event.target.files[0]);
  };

  // adding sources to locastorage
  const addSource = () => {
    var sources = JSON.parse(localStorage.getItem("sources") || "[]");
    if (sources.length < 5) {
      sources.push(source);

      localStorage.setItem("sources", JSON.stringify(sources));
      setSource("");
    } else {
      alert("You can add maximum 5 sources");
    }
  };

 


  // Form UI
  return (
    <Grid container md={6}>
      
      {inputList.map((item, i) => {
        return (
          <Paper className="form" elevation={5}>
            <Grid container spacing={2}>
              <Grid
                container
                item
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: 22 }}
                    align="left"
                  >
                    Technology
                  </Typography>
                </Grid>
                <Grid item>
                  {inputList.length !== 1 && (
                    <Button
                      sx={{ marginRight: 1 }}
                      variant="contained"
                      color="error"
                      onClick={(e) => handleRemove(e, i)}
                    >
                      Delete
                    </Button>
                  )}
                  {inputList.length - 1 === i && (
                    <Button
                      variant="contained"
                      onClick={(e) => handleAddClick(e, i)}
                    >
                      + Add More
                    </Button>
                  )}
                </Grid>
              </Grid>

              <Grid item md={4} sm={12} xs={12}>
                <TextField
                  item
                  fullWidth
                  name='name'
                  size="small"
                  id="outlined-size-small"
                  label="Name"
                  variant="outlined"
                  value={item.name || ""}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Grid>
              <Grid item md={8} xs={12}>
                <TextField
                  item
                  fullWidth
                  name='description'
                  size="small"
                  id="outlined-size-small"
                  label="Descriptions"
                  variant="outlined"
                  value={item.description || ""} 
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Grid>
              <Grid container item md={6} sm={6} xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<AttachFile />}
                  component="label"
                >
                  <input
                    accept="image/*"
                    type="file"
                    onChange={handleImagechange}
                  />
                </Button>
              </Grid>

              <Grid
                container
                item
                spacing={{ md: 2, xs: 1 }}
                justifyContent="space-between"
              >
                <Grid item md={10} sm={10} xs={9} key={i}>
                  {sourceList.map((e) => {
                    return (
                      <TextField
                        fullWidth
                        id="outlined-size-small"
                        label="Source eg.www.google.com"
                        variant="outlined"
                        size="small"
                        value={source}
                        onChange={(event) => setSource(event.target.value)}
                      />
                    );
                  })}
                </Grid>
                <Grid item md={2} sm={2} xs={3}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={(e) => handleAddSource(e, i)}
                  >
                    +Add
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          
        );
      })}
      <Button variant="contained" color="success" onClick={saveForm}>Save</Button>
    </Grid>
  );
};

export default Form;
