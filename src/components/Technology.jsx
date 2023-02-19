import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import {
  Table,
  Avatar,
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Technology = () => {
  const [formData, setFormData] = useState([]);

  const formCollectionRef = collection(db, "technology");

  useEffect(() => {
    const querySnapshot = async () => {
      const data = await getDocs(formCollectionRef);
      setFormData(
        data.docs.map((doc) => ({
          tabledata: doc.data(),
        }))
      );   
    };
    querySnapshot();

  }, []);

  return (
    <div className="App">
      <TableContainer sx={{ maxWidth: 1000 }} component={Paper}>
        <Table sx={{ minWidth: 900 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Image</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {formData.map((row, key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Avatar
                    alt="Demy Sharp"
                    src={row.tabledata.url}
                    sx={{ width: 56, height: 56 }}
                  ></Avatar>
                </TableCell>

                <TableCell component="th" scope="row">
                  {row.tabledata.name}
                </TableCell>
                <TableCell>{row.tabledata.description}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Technology;
