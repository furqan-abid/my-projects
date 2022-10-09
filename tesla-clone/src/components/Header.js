import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Translate } from '@mui/icons-material';

function Header() {
  const [burgerStatus,setBurgerStatus]=useState(false);
  const onBurgerTriger= () => setBurgerStatus(!burgerStatus)
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Model S</a>
      </Menu>
      <RightMenu>
        <a href="">shop</a>
        <a href="">tesla account</a>
      <CoustomMenu onClick={onBurgerTriger}/>
      </RightMenu>
      <BurgerNav onBurgerTriger={burgerStatus}>
        <CoustomClose onClick={onBurgerTriger}/>
        <li><a href="">Existing Inverntory</a></li>
        <li><a href="">Used Inverntory</a></li>
        <li><a href="">Trade-in</a></li>
        <li><a href="">Cybertruck</a></li>
        <li><a href="">Roadster</a></li>
        {console.log(burgerStatus)}
      </BurgerNav>
    </Container>
    )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex: 1;
a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
}
@media (max-width: 768px) {
  display: none;
}
`

const RightMenu=styled.div`
display: flex;
align-items: center;
justify-content: center;
a{
  font-weight: 600;
  text-transform: uppercase;
  flex-wrap: nowrap;
  margin-right: 10px;
}`

const CoustomMenu=styled(MenuIcon)`
cursor: pointer;
`

const BurgerNav=styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: white;
width: 300px;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: flex-start;
text-align: start;
transform: ${event => event.onBurgerTriger ? 'translateX(0)' : 'translateX(100%)'};
li{
  padding: 15px;
  border-bottom:1px solid rgba(0,0,0,0.2);
}
`

const CoustomClose=styled(CloseIcon)`
margin-left: auto;
cursor: pointer;
`