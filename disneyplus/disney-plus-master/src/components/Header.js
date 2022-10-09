import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {auth,provider} from '../redux/firebase';
import {useHistory} from 'react-router-dom'
import { useEffect } from 'react'

function Header(props) {

    useEffect(() => {
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                props.userLogin(user.displayName,user.email,user.photoURL)
                history.push("/")    
            }
        })
    }, [])

    const history= useHistory();
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            let user=result.user
            props.userLogin(user.displayName,user.email,user.photoURL)
            history.push("/")
        })
    }

    const signOut=()=>{
        auth.signOut()
        .then(()=>{
            props.userSignout();
            history.push("/login")
        })
    }


    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="disney+" />
            </Logo>
            {!props.username?
            (<Login onClick={signIn}>
                LOGIN
            </Login>)
            :
            <>
            <NavMenu>
            <Link to="/home">
                <a>
                    
                    <img src="/images/home-icon.svg" alt="home" />
                    <span>Home</span>
                </a>
                </Link>
                <a>
                    <img src="/images/search-icon.svg" alt="search"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="search"/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="search"/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="search"/>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="search"/>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <Userimg>
                <img src={props.userphoto} alt="user" onClick={signOut}/>
            </Userimg>   
            </>
            }         
        </Nav>
    )
}

export default Header

const Nav=styled.nav`
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 36px;
    position: fixed;
    max-height: 70px;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
`
const Logo=styled.a`
    width: 80px;
    max-height: 70px;
`

const NavMenu=styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    a{
        display: flex;
        align-items: center;
        padding: 0px 12px;
        text-decoration: none;
        color: white;
        cursor: pointer;
        img{
            height: 20px;
        }
        span{
            font-size: 13px;
            letter-spacing: 1.47px;   
            position: relative;
        &:after{
            content: "";
            height: 2px;
            background-color: white;
            position: absolute;
            left: 0px;
            right: 0px;
            bottom: -6px;
            opacity: 0;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
        }
        &:hover{
            span:after{
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }
    @media (max-width:768px){
        display: flex;
        flex-direction: column;
        height: calc(100vh - 65px);
        position: absolute;
        justify-content: space-around;
        margin-top: 65px;
        top: 0;
        right: 0;
        background-color: #090b13;
        transform: translateX(100%);
        
    }
`

const Userimg=styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;