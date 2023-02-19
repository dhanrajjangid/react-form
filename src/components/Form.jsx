import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submit } from "../features/technology";
import { TextField, Button, Paper, Grid, Typography } from "@mui/material";
import { AttachFile, Save, Delete } from "@mui/icons-material";
import { db, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { v4 } from "uuid";

const Form = () => {
  const dispatch = useDispatch();

  const formCollectionRef = collection(db, "technology");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [source, setSource] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const handleImagechange = (event) => {
    setImage(event.target.files[0]);
  };

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

  const allSources = JSON.parse(localStorage.getItem("sources") || "[]");

  const techValues = () => {
    dispatch(
      submit({
        name: name,
        description: description,
        url: url,
        allSource: allSources,
      })
    );
  };

  techValues();

  const handleImage = () => {
    if (image == null) return;
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the Image URL");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  handleImage();


  return (
    <Paper className="form" elevation={5}>
      <Grid container spacing={2}>
        <Grid item md={4} sm={12} xs={12}>
          <TextField
            item
            fullWidth
            size="small"
            id="outlined-size-small"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(event) => setName(event.target.value)}
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
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Grid>
        <Grid container item md={6} sm={6} xs={12} >
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

        <Grid container item spacing={{md: 2, xs:1}} justifyContent="space-between">
          <Grid item md={10} sm={10} xs={9}>
            <TextField
              fullWidth
              id="outlined-size-small"
              label="Source eg.www.google.com"
              variant="outlined"
              size="small"
              value={source}
              onChange={(event) => setSource(event.target.value)}
            />
          </Grid>
          <Grid item md={2} sm={2} xs={3}>
            <Button fullWidth variant="contained" onClick={addSource}>
              +Add
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Form;
