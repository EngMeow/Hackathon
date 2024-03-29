import { useContext, useState } from "react";
import { SubsContext } from "../State/SubsContext.jsx";
import { Button, TextField } from "@mui/material";
import images from "../config/constants.js";
import '../assets/css/HackValidate.css'

export default function Validate () {
  const { registerUser } = useContext(SubsContext);
  const [name, setName] = useState(null);

  return (
    <>
      <div
        className="OpenEvent text-center"
      >
        <h1>Welcome to Hackthon Events.</h1>
        <img
          src={images.validate}
          style={{ width: "400px", height:'300px', objectFit:'cover' }}
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {name && (
          <div>
            <br />
            <Button
              variant="contained"
              className="p-3 mb-3"
              color="success"
              style={{ padding: "5px", width: "250px" }}
              onClick={() => {
                registerUser(name);
              }}>
              Login
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
