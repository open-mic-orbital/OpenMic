import React from "react";
import { Card, TextField, Button, CircularProgress } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import url from "../../utils/url";

const UpdateForm = (props, { handleClose }) => {
  const { handleSubmit, control } = useForm();

  const myProfile = props.props.user;
  const setUser = props.props.setUser;

  // State for loading indicator
  const [loading, setLoading] = React.useState(false);

  // State for description word count
  const [count, setCount] = React.useState(0);

  const [uploadedImage, setUploadedImage] = React.useState(null);

  const fileUploadHandler = (event) => {
    setUploadedImage(event.target.files[0]);
  };

  const updateUser = async (data) => {
    const formData = new FormData();

    formData.append("name", data["DisplayName"]);
    formData.append("description", data["Description"]);
    formData.append("contact", data["Contact"]);
    formData.append(
      "enabled",
      data["Description"] !== "No description provided" &&
        data["Contact"] !== "No username provided"
    );
    if (uploadedImage != null) {
      formData.append("img", uploadedImage);
    }

    const response = await fetch(url + "/users/me", {
      method: "PATCH",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: formData,
    });

    const responseJSON = await response.json();
    return responseJSON;
  };

  const onSubmit = (data) => {
    setLoading(true);
    if (uploadedImage == null) {
      updateUser(data)
        .then((newUser) => {
          console.log(newUser);
          localStorage.setItem("user", JSON.stringify(newUser));
          setUser(newUser);
        })
        .then((v) => {
          setLoading(false);
        })
        .catch((e) => {
          alert("An error occured. Please try again later.");
          setLoading(false);
        });
    } else {
      if (uploadedImage.size > 1000000) {
        alert("Image size is too big. Images should be less than 1MB.");
      } else {
        updateUser(data)
          .then((newUser) => {
            console.log(newUser);
            localStorage.setItem("user", JSON.stringify(newUser));
            setUser(newUser);
          })
          .then((v) => {
            setLoading(false);
          })
          .catch((e) => {
            alert("An error occured. Please try again later.");
            setLoading(false);
          });
      }
    }
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
            name="DisplayName"
            control={control}
            defaultValue={myProfile.name || myProfile.userName}
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
            defaultValue={myProfile.description || "No description provided"}
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
            name="Contact"
            control={control}
            defaultValue={myProfile.contact || "No username provided"}
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
          <Controller
            name="Image"
            control={control}
            defaultValue={
              myProfile.image ||
              "https://cdn.costumewall.com/wp-content/uploads/2018/09/jon-arbuckle.jpg"
            }
            rules={{ required: "Image required" }}
            render={({ field: { onChange, value } }) => (
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
                <input
                  type="file"
                  name="file"
                  accept="image/jpeg, image/jpg, image/png"
                  onChange={fileUploadHandler}
                  hidden
                />
              </Button>
            )}
          />
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
            disabled={loading}
            sx={{
              backgroundColor: "#009c95",
              color: "white",
            }}
          >
            {(!loading && "Update") || <CircularProgress size={20} />}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default UpdateForm;

// Suppresses warnings about bad state.
const backup = console.error;
console.error = function filterWarnings(msg) {
  const supressedWarnings = ["Cannot update a component"];
  if (!supressedWarnings.some((entry) => msg.includes(entry))) {
    backup.apply(console, arguments);
  }
};
