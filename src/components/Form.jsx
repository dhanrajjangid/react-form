import React, { useEffect, useState } from "react";
import { TextField, Button, Paper, Grid, Typography } from "@mui/material";
import { AttachFile } from "@mui/icons-material";

const Form = () => {
  // states

  const [inputList, setInputList] = useState([
    { name: "", description: "", sources: [{ source: "" }] },
  ]);

  const [source, setSource] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [count, setCount] = useState(0);

  const handleInputChange = (e, i) => {
    let newForm = [...inputList];
    newForm[i][e.target.name] = e.target.value;
    setInputList(newForm);
  };

  const handleAddClick = (event, listIndex) => {
    setInputList([
      ...inputList,
      {
        name: "",
        description: "",
        sources: [{ source: "" }],
        // sourcesLength: { row: listIndex + 1, column: 0 },
      },
    ]);
  };

  const handleRemove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    localStorage.setItem("form", JSON.stringify(list));
  };

  const handleAddSource = (e, listIndex, name, desc) => {
    const newInputList = [...inputList];
    if (newInputList[listIndex].sources.length < 5){
    newInputList[listIndex].sources.push({ source: "" });
    setInputList(newInputList);
    }else{
      alert("you can add maximum of 5 sources")
    }
  };

  

  // image select
  const handleImagechange = (event) => {
    setImage(event.target.files[0]);
  };

  // // adding sources to locastorage
  // const addSource = () => {
  //   var sources = JSON.parse(localStorage.getItem("sources") || "[]");
  //   if (sources.length < 5) {
  //     sources.push(source);

  //     localStorage.setItem("sources", JSON.stringify(sources));
  //     setSource("");
  //   } else {
  //     alert("You can add maximum 5 sources");
  //   }
  // };

  const updateSource = (listIndex, event, j) => {
    const newInputList = [...inputList];
    newInputList[listIndex].sources[j].source = event;
    setInputList(newInputList);
    console.log(newInputList);
  };

  const saveForm = () => {
    // var courses = JSON.parse(localStorage.getItem('form') || "[]")
    var course = inputList;
    localStorage.setItem("form", JSON.stringify(course));
    const allSources = JSON.parse(localStorage.getItem("form") || "[]");
    setInputList(allSources);
    console.log(inputList);
  };
  
    useEffect(() => {
      var courses = JSON.parse(localStorage.getItem('form'))
    console.log(courses)

    setInputList(courses)
    },[])
    



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
                  name="name"
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
                  name="description"
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
                spacing={{ md: 2, sm: 1, xs: 1 }}
                justifyContent="space-between"
              >
                <Grid item md={10} sm={12} xs={12} key={i}>
                  {inputList[i].sources.map((e, j) => {
                    return (
                      <>
                        <TextField
                          fullWidth
                          id="outlined-size-small"
                          label="Source eg.www.google.com"
                          variant="outlined"
                          size="small"
                          value={inputList[i].sources[j].source}
                          onChange={(e) => updateSource(i, e.target.value, j)}
                        />
                      </>
                    );
                  })}
                  <Grid item md={2} sm={2} xs={3}>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={(e) =>
                        handleAddSource(
                          e,
                          i,
                          inputList[i].name,
                          inputList[i].description
                        )
                      }
                    >
                      +Add
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
      <Button variant="contained" color="success" onClick={saveForm}>
        Save
      </Button>
    </Grid>
  );
};

export default Form;
