import React, { useState, useEffect } from "react";
import { TextField, Button, Paper, Grid, Typography } from "@mui/material";
import { AttachFile, Save, Delete, Add } from "@mui/icons-material";
import { db } from "../firebase";
import {
  doc,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

const Form = () => {
  const formCollectionRef = collection(db, "technology");

  
  const [description, setDescription] = useState("");
  const [source, setSource] = useState("");
  const [formList, setFormLists] = useState([]);


  
  

  const deleteForm = async (id) => {
    const postDoc = doc(db, "technology", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(formCollectionRef);
      setFormLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deleteForm]);

  const [newName, setNewName] = useState(formList.name);
  const handleChange = (e) => {
    formList.name = "";
    setNewName(e.target.value);
  }
  return (
    <div>
      {formList.map((form) => {
        return (
          <Paper className="form" elevation={5}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 20 }}
                  align="left"
                >
                  Technology
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  color="error"
                  variant="contained"
                  onClick={() => {
                    deleteForm(form.id);
                  }}
                >
                  <Delete />
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={4} sm={12} >
                <TextField
                  item
                  fullWidth
                  size="small"
                  id="outlined-size-small"
                  label="Name"
                  variant="outlined"
                  value={form.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={8} xs={12}>
                <TextField
                  item
                  fullWidth
                  size="small"
                  id="outlined-size-small"
                  label="Descriptions"
                  variant="outlined"
                  value={form.description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </Grid>
            </Grid>
            

            
            <Grid container justifyContent="flex-end" spacing={1}>
              {/* <Grid item md={3}>
                <Button fullWidth variant="contained" startIcon={<Save />}>
                  Save
                </Button>
              </Grid> */}
              
            </Grid>
          </Paper>
        );
      })}
    </div>
  );
};

export default Form;
