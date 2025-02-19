import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import dayjs from "dayjs";

const EmployeeAccount = () => {
  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 item xs={6}>
          <TextField
            id="emp-id"
            label="Emp ID"
            variant="standard"
            placeholder="Emm ID"
            margin="normal"
            fullWidth
          />
          <TextField
            id="pan"
            label="PAN"
            variant="standard"
            placeholder="PAN Number"
            margin="normal"
            fullWidth
          />
        </Grid2>
        <Grid2 item xs={6}>
          <TextField
            id="uan"
            label="UAN"
            variant="standard"
            placeholder="UAN"
            margin="normal"
            fullWidth
          />
          <TextField
            id="pf-no"
            label="PF Number"
            variant="standard"
            placeholder="PF Number"
            margin="normal"
            fullWidth
          />
        </Grid2>
      </Grid2>
    </>
  );
};

export default EmployeeAccount;
