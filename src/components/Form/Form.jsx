import { TextField } from "@mui/material";
import React from "react";

const Form = ({ index, data, SetData }) => {
  const HandleValueChange = (e) => {
    let newData = { ...data };
    newData[e.target.id] = e.target.value;

    SetData(newData);
  };

  return (
    <div>
      {index === 0 ? (
        <div>
          <TextField
            id="name"
            label="Name"
            value={data.name || ""}
            onChange={HandleValueChange}
          />
          <TextField
            id="email"
            label="Email"
            value={data.email || ""}
            onChange={HandleValueChange}
          />
          <TextField
            id="phone"
            label="Phone"
            value={data.phone || ""}
            onChange={HandleValueChange}
          />
        </div>
      ) : index === 1 ? (
        <div>
          <TextField
            id="add1"
            label="Address Line 1"
            value={data.add1 || ""}
            onChange={HandleValueChange}
          />
          <TextField
            id="add2"
            label="Address Line 2"
            value={data.add2 || ""}
            onChange={HandleValueChange}
          />
          <TextField
            id="city"
            label="City"
            value={data.city || ""}
            onChange={HandleValueChange}
          />
          <TextField
            id="state"
            label="State"
            value={data.state || ""}
            onChange={HandleValueChange}
          />
          <TextField
            id="zip"
            label="Zip Code"
            value={data.zip || ""}
            onChange={HandleValueChange}
          />
        </div>
      ) : (
        <div>
          <div>{"Name : " + (data.name || "")}</div>
          <div>{"Email : " + (data.email || "")}</div>
          <div>{"Phone : " + (data.phone || "")}</div>
          <div>{"Address  : " + (data.add1 || "")}</div>
          <div>{data.add2 || ""}</div>
          <div>{"City : " + (data.city || "")}</div>
          <div>{"State : " + (data.state || "")}</div>
          <div>{"zip : " + (data.zip || "")}</div>
        </div>
      )}
    </div>
  );
};

export default Form;
