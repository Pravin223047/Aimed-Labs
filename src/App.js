/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import styled from "styled-components";
import Eye from "./eye.png";
import Login from "./login.jpeg";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  padding: 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    img {
      width: 100%;
    }
  }
`;

const Right = styled.div`
  box-shadow: 0 0 25px 1px rgba(128, 127, 127, 0.541);
  border-radius: 10px;
  display: flex;
  background: linear-gradient(45deg, #ffffff, #ddecff);
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const RightH = styled.h2`
  font-size: 3rem;
  font-weight: 900;

  @media screen and (max-width: 1200px) {
    font-size: 2rem;
    font-weight: 700;
  }
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  border: 1px solid black;
  @media screen and (max-width: 1200px) {
    margin: 0;
    padding: 0;
    border: none;
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  text-align: left;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  font-weight: 500;
`;

const InputBoxInner = styled.div`
  display: flex;
  justify-content: space between;
  height: 3rem;
  width: 100%;
  border: 1px solid #00275a;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 6px;

  @media screen and (max-width: 1200px) {
    height: 2.5rem;
  }
`;

const Input = styled.input`
  background: transparent;
  border-radius: 6px;
  outline: none;
  border: none;
  font-size: 1.2rem;
  width: 100%;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Checkbox1 = styled.div`
  display: flex;
  gap: 0.7rem;
  color: gray;
`;

const Link = styled.a`
  letter-spacing: 0.8px;
  color: #ff8000;
  font-weight: 500;
`;

const RegisterLink = styled(Link)`
  font-weight: 700;
`;

const PasssLink = styled(Link)`
  text-decoration: none;
`;

const Box = styled.div`
  width: 100%;
  padding: 1rem;
  height: 3rem;
  margin: 2rem 0;
`;

const Button = styled.button`
  color: #fff;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #1575a7;
  border-radius: 6px;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 3rem;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const LoginPage = () => {
  return (
    <Container>
      <Left>
        <img src={Login} alt="Login Image" />
      </Left>
      <Right>
        <Form action="login.php" method="post">
          <RightH>Login</RightH>
          <InputBox>
            <Label htmlFor="name">Login ID</Label>
            <InputBoxInner>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Login ID"
                required
              />
            </InputBoxInner>
          </InputBox>
          <InputBox>
            <Label htmlFor="password">Password</Label>
            <InputBoxInner>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                required
              />
              <img
                src={Eye}
                alt="Show Password"
                id="password-toggle"
                style={{ width: "2rem" }}
              />
            </InputBoxInner>
          </InputBox>
          <Checkbox>
            <Checkbox1>
              <input type="checkbox" id="remember-me" name="remember-me" />
              <Label htmlFor="remember-me">Remember me</Label>
            </Checkbox1>
            <PasssLink>Change Password</PasssLink>
          </Checkbox>
          <Checkbox>
            <Checkbox1>
              <input type="checkbox" id="agree-terms" name="agree-terms" />
              <Label htmlFor="agree-terms">
                Agree to <Link href="#">Terms & Conditions</Link>
              </Label>
            </Checkbox1>
          </Checkbox>
          <Box>
            <Button type="submit">Login</Button>
          </Box>
          <div className="register">
            Don't have an account?{" "}
            <RegisterLink href="#">Register here</RegisterLink>
          </div>
        </Form>
      </Right>
    </Container>
  );
};

export default LoginPage;
