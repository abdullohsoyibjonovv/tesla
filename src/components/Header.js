import React, { useState } from 'react'
import styled from 'styled-components'


function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a>
        <Imagebut>
            <img src="/images/logo.svg" alt="" />
        </Imagebut>
       
      </a>
      <Menu>
        <a href="#">Vehicles</a>
        <a href="#">Energy</a>
        <a href="#">Charging</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <p onClick={() => setBurgerStatus(true)}><a href="#">menu</a></p>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <p onClick={() => setBurgerStatus(false)}>✖</p>
        </CloseWrapper>
        <Mob>
        <li> <a href="#">Model S</a></li> 
        <li> <a href="#">Model 3</a></li> 
        <li>  <a href="#">Model X</a></li>
        <li>  <a href="#">Model Y</a></li>
        </Mob>
        <li><a href="">Existing Inventory</a></li>
        <li><a href="">Used Inventory</a></li>
        <li><a href="">Trade-in</a></li>
        <li><a href="">Cybertrck</a></li>
        <li><a href="">Roadaster</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
      min-height: 60px;
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
       
`
const Imagebut =styled.div`
         object-fit: cover;
`

const Menu = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
        
      a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap
      }
      @media(max-width: 800px) {
        display: none;
      }
`

const Mob = styled.div`
     display: none;
     @media(max-width: 800px) {
       display: flex;
       flex-direction: column;
       font-weight: 600;
       
       
      li{
       padding: 15px 0;
       border-bottom: 1px solid rgba(0, 0, 0, .2);

       a{
        font-weight: 600;
       }
    }
      

}
`

const RightMenu = styled.div`
      display: flex;
      align-items: center;
      a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;      
      }
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    diplay: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li{
       padding: 15px 0;
       border-bottom: 1px solid rgba(0, 0, 0, .2);

       a{
        font-weight: 600;
       }
    }
`
const CloseWrapper = styled.div`
     display: flex;
     justify-content: flex-end;
     p{
      cursor: pointer;
     }
`