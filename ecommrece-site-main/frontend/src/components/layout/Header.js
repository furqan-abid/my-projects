import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <a>
        <h1>Ecommrece</h1>
      </a>
      <Menu>
        <a href="#">home</a>
        <a href="#">about</a>
        <a href="#">contact</a>
        <a href="#">blog</a>
      </Menu>
      <RightMenu>
        <a href="">shop</a>
      </RightMenu>
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
  background-color: #0000006b;
  a{
    max-width: 150px;
      img{

      }
  }
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
