import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Grid, Typography, Paper } from "@mui/material";
import Form from "./Form";

const AddMoreCopy = () => {
  // const technology = useSelector((state) => state.technology.value);
  const [persons, setPerson] = useState([]);

  const handleAddPerson = () => {
    const addPerson = [...persons, []]
    setPerson(addPerson)
  };

  const deleteForm = (i) => {
    const deleteVal = [...persons]
    deleteVal.splice(i, 1)
    setPerson(deleteVal)
        // localStorage.removeItem(persons.key)

}


//   const saveForm = () => {
//     var courses = JSON.parse(localStorage.getItem(persons.key) || "[]")
//     const addItem = () => {
//     var course = {
//       name: technology.name,
//       description: technology.description,
//     }
//     courses.push(course)

//     localStorage.setItem(persons.length, JSON.stringify(course))
//   }
//   addItem();
// }

console.log(persons)


  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      spacing={0}
      sx={{ marginTop: "20px", marginBottom: "5px" }}
    >
      <Grid container item justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography sx={{ fontWeight: "bold", fontSize: 22 }} align="left">
            Technology
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => handleAddPerson()}>
            + Add More
          </Button>
        </Grid>
      </Grid>
      <Grid item>
        {persons.map((data, ind) => {
        return (
          <Grid value={data}>
          <Button  variant="outlined" color="error" onClick={() => deleteForm(ind)}>
            Delete
          </Button>
          <Form ind={ind}/>
        </Grid>
        )
      })}
  </Grid>
      {/* <Grid item>
        <Button variant="contained" onClick={saveForm}>Save</Button>
      </Grid> */}

    </Grid>
  );
};

export default AddMoreCopy;
