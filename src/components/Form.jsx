import { useState } from "react";
import styled from "@emotion/styled";
import { Box, InputBase, Button } from "@mui/material";
import { getweather } from "../services/api";

const Container = styled(Box)({
  background: "#1974D2",
  padding: 10,
});

const Input = styled(InputBase)({
  color: "#fff",
  marginRight: "20",
  fontSize: 18,
});

const GetButton = styled(Button)({
  background: "#e67e22",
});

const Form = ({ setResult }) => {
  const [data, setData] = useState({ city: "", country: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const getweatherinfo = async () => {
    let response = await getweather(data.city, data.country);
    setResult(response);
  };

  return (
    <Container>
      <Input placeholder="City" onChange={(e) => handleChange(e)} name="city" />
      <Input
        placeholder="Country"
        onChange={(e) => handleChange(e)}
        name="country"
      />
      <GetButton variant="contained" onClick={() => getweatherinfo()}>
        Get Wheather
      </GetButton>
    </Container>
  );
};

export default Form;
