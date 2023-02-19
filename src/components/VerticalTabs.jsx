import * as React from "react";
import { Grid, Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Form from "./Form";
import FormFetch from "./FormFetch";
import AddMoreCopy from "./AddMoreCopy";
import Technology from "./Technology";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box fullWidth sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Add Technology" value="1" />
            <Tab label="View" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container direction="column" md={5} justifyContent="center">
            <Grid item>
              <FormFetch />
            </Grid>
            <Grid item>
              <AddMoreCopy />
            </Grid>
            <Grid item>
              <Form />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2">
          <Technology />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
