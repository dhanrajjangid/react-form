import React, { useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Button, Grid, Typography, Paper } from "@mui/material";
import { Delete } from "@mui/icons-material";
import Form from "./Form";
import FormFetch from "./FormFetch";

const AddMoreCopy = () => {

  const formCollectionRef = collection(db, "technology");

  const technology = useSelector((state) => state.technology.value);

  let handleAddPerson = async (e) => {
    await addDoc(formCollectionRef, {
      name: technology.name,
      description: technology.description,
      url: technology.url,
      source: technology.allSource,
    });
    e.preventDefault();
    localStorage.clear();
    
    };

  return (
    <Grid container direction="column" alignItems="center" spacing={0} sx={{marginTop: "20px", marginBottom: "5px"}}>
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
              <Button variant="contained" onClick={handleAddPerson}>
                + Add More
              </Button>
            </Grid>
          </Grid>
          
       
      
    </Grid>
  );
};

export default AddMoreCopy;
