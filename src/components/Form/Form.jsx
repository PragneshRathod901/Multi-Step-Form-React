import { TextField, Box } from "@mui/material";
import React from "react";

const Form = ({ index, data, SetData, error, setError }) => {
  const validate = (e) => {
    let error = "";
    if (!e.target.value) {
      return "required!";
    }
    switch (e.target.id) {
      case "email":
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!!e.target.value && !re.test(e.target.value)) {
          error = "Please enter valid Email!";
        }
        break;

      default:
        break;
    }
    return error;
  };

  const HandleValueChange = (e) => {
    let err = validate(e);
    if (err || error[e.target.id] !== err) {
      let newData = { ...error };
      newData[e.target.id] = err;
      setError(newData);
    }
    let newData = { ...data };
    newData[e.target.id] = e.target.value;

    SetData(newData);
  };

  return (
    <div>
      {index === 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1em",
            rowGap: "1em",
            justifyContent: "center",
          }}
        >
          <TextField
            id="name"
            label="Name"
            value={data.name || ""}
            onChange={HandleValueChange}
            error={!!error.name}
            helperText={error.name || ""}
          />
          <TextField
            id="email"
            label="Email"
            value={data.email || ""}
            onChange={HandleValueChange}
            required
            error={!!error.email}
            helperText={error.email || ""}
          />
          <TextField
            id="phone"
            label="Phone"
            value={data.phone || ""}
            onChange={HandleValueChange}
            required
            error={!!error.phone}
            helperText={error.phone || ""}
          />
        </Box>
      ) : index === 1 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1em",
            rowGap: "1em",
            justifyContent: "center",
          }}
        >
          <TextField
            id="add1"
            label="Address Line 1"
            value={data.add1 || ""}
            onChange={HandleValueChange}
            required
            error={!!error.add1}
            helperText={error.add1 || ""}
          />
          <TextField
            id="add2"
            label="Address Line 2"
            value={data.add2 || ""}
            onChange={HandleValueChange}
            required
            error={!!error.add2}
            helperText={error.add2 || ""}
          />
          <TextField
            id="city"
            label="City"
            value={data.city || ""}
            onChange={HandleValueChange}
            required
            error={!!error.city}
            helperText={error.city || ""}
          />
          <TextField
            id="state"
            label="State"
            value={data.state || ""}
            onChange={HandleValueChange}
            required
            error={!!error.state}
            helperText={error.state || ""}
          />
          <TextField
            id="zip"
            label="Zip Code"
            value={data.zip || ""}
            onChange={HandleValueChange}
            required
            error={!!error.zip}
            helperText={error.zip || ""}
          />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1em",
            rowGap: "0.5em",
            justifyContent: "center",
          }}
        >
          <div>{"Name : " + (data.name || "")}</div>
          <div>{"Email : " + (data.email || "")}</div>
          <div>{"Phone : " + (data.phone || "")}</div>
          <div>{"Address  : " + (data.add1 || "")}</div>
          <div>{data.add2 || ""}</div>
          <div>{"City : " + (data.city || "")}</div>
          <div>{"State : " + (data.state || "")}</div>
          <div>{"zip : " + (data.zip || "")}</div>
        </Box>
      )}
    </div>
  );
};

export default Form;
