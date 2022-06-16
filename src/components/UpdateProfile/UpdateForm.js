import React from "react";
import { Card, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const UpdateForm = ({ handleClose }) => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card
      sx={{
        // maxWidth: 345,
        // background: "linear-gradient(45deg, #009c95, #8ec7c3)",
        bgcolor: "#fff",
        borderRadius: "20px",
      }}
    >
      <h2 style={{ color: "black" }}>Update Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="Name"
            control={control}
            defaultValue=""
            rules={{ required: "Name required" }}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Name"
                variant="outlined"
                value={value}
                onChange={onChange}
                sx={{
                  input: { color: "#10182e" },
                }}
                InputLabelProps={{
                  style: { color: "#10182e" },
                }}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="Description"
            control={control}
            defaultValue=""
            rules={{ required: "Description required" }}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Description"
                variant="outlined"
                value={value}
                onChange={onChange}
                multiline
                rows={4}
                sx={{
                  marginTop: "2vh",
                  input: { color: "#10182e" },
                }}
                InputLabelProps={{
                  style: { color: "#10182e" },
                }}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="Contact Link"
            control={control}
            defaultValue=""
            rules={{ required: "Contact link required" }}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Contact Link"
                variant="outlined"
                value={value}
                onChange={onChange}
                sx={{
                  marginTop: "2vh",
                  input: { color: "#10182e" },
                }}
                InputLabelProps={{
                  style: { color: "#10182e" },
                }}
              />
            )}
          />
        </div>
        <div>
          <Button
            variant="outlined"
            component="label"
            sx={{
              color: "#009c95",
              backgroundColor: "white",
              borderColor: "#009c95",
              height:"8%"
            }}
            style={{ marginTop: "2vh" }}
          >
            Upload Avatar
            <input type="file" hidden />
          </Button>
        </div>
        <div style={{ margin: "2vh" }}>
          <Button
            disableElevation
            variant="contained"
            onClick={handleClose}
            sx={{
              color: "white",
              backgroundColor: "#db3a37",
            }}
            style={{ marginRight: "1vh" }}
          >
            Cancel
          </Button>
          <Button
            disableElevation
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#009c95",
              color: "white",
            }}
          >
            Update
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default UpdateForm;
