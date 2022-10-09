import styled from "styled-components";
import React from "react";

function Footer() {
  return (
    <Main>
      <LeftFooter>
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src="/images/playstore.png" alt="playstore" />
        <img src="/images/Appstore.png" alt="Appstore" />
      </LeftFooter>
      <MidFooter>
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; furqan</p>
      </MidFooter>
      <RightFooter>
        <h4>Follow Us</h4>
        <a href="">Instagram</a>
        <a href="">Youtube</a>
        <a href="">Facebook</a>
      </RightFooter>
    </Main>
  );
}

export default Footer;

const Main = styled.div`
  margin-top: 10vmax;
  padding: 2vmax;
  background-color: rgb(34, 33, 33);
  color: white;
  display: flex;
  align-items: center;
`;
const LeftFooter = styled.div`
  width: 20%;
  display: flex;

  flex-direction: column;
  align-items: center;
  h4 {
    font-family: "Roboto";
    font-size: 1vmax;
  color: white;
  }
  p {
    text-align: center;
    font-size: 1.2vmax;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: white;
  }
  img {
    width: 10vmax;
    margin: 1vmax;
    cursor: pointer;
  }
`
const MidFooter = styled.div`
  width: 60%;

  text-align: center;
  h1 {
    font-size: 4vmax;
    font-family: "Roboto";
    color: #eb4034;
  }
  p {
    max-width: 60%;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    margin: 1vmax auto;
  color: white;
  }
`;
const RightFooter = styled.div`
  width: 20%;

  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    font-family: "Roboto";
    font-size: 1.4vmax;
    text-decoration: underline;
  color: white;
  }
  a {
    text-decoration: none;
    font-size: 1.3vmax;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    color: white;
    transition: all 0.5s;
    margin: 0.5vmax;
  color: white;
  }
  a:hover {
    color: #eb4034;
  }
`;
