import React from "react";
import { Card, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const url = "https://openmic-backend-api.herokuapp.com";

const updateUser = async (user) => {
  const response = await fetch(url + "/users/me", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token"),
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

const UpdateForm = ({ handleClose }) => {
  const { handleSubmit, control } = useForm();

  const myProfile = JSON.parse(localStorage.getItem("user"));

  const [count, setCount] = React.useState(0);

  const onSubmit = (data) => {
    console.log(data);
    myProfile.name = data.name;
    myProfile.desc = data.desc;
    myProfile.contact = data.contact;
    myProfile.image = data.image;
  };

  return (
    <Card
      sx={{
        bgcolor: "#fff",
        borderRadius: "20px",
      }}
    >
      <h2 style={{ color: "black" }}>Update Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="Display Name"
            control={control}
            defaultValue={myProfile.name}
            rules={{ required: "Name required" }}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Display Name"
                variant="outlined"
                value={value}
                onChange={onChange}
                sx={{
                  input: { color: "#10182e" },
                }}
                InputLabelProps={{
                  style: { color: "gray" },
                }}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="Description"
            control={control}
            defaultValue={myProfile.desc || "Professional bass player available weekends"}
            rules={{ required: "Description required" }}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Description"
                variant="outlined"
                value={value}
                onChange={onChange}
                {...setCount(value.length)}
                multiline
                rows={6}
                sx={{
                  marginTop: "2vh",
                  input: { color: "#10182e" },
                }}
                inputProps={{ maxLength: 100 }}
                InputLabelProps={{
                  style: { color: "gray" },
                }}
                helperText={`${count}/100`}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="Instagram"
            control={control}
            defaultValue={myProfile.contact || "garfield"}
            rules={{ required: "Instagram username required" }}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Instagram"
                variant="outlined"
                value={value}
                onChange={onChange}
                sx={{
                  marginTop: "2vh",
                  input: { color: "#10182e" },
                }}
                InputLabelProps={{
                  style: { color: "gray" },
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
              height: "8%",
            }}
            style={{ marginTop: "2vh" }}
          >
            Upload Image
            <input type="file" hidden />
          </Button>
        </div>
        <div style={{ margin: "2vh" }}>
          <Button
            disableElevation
            variant="contained"
            onClick={() => window.location.reload(true)}
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
