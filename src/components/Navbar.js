import React, { useState } from "react";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";
import "./Navbar.css";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { Link as Scroll } from 'react-scroll'

function Navbar() {

    const [clicked, setClick] = useState(false);
    const handleClick = () => {
        setClick(!clicked);
    }
    const linksInactive = () => { 
        setClick(false);
    }

    return (
        <>
            <NavbarContainer className="navbar">
                {/* <h2>  Navbar<span>responsive</span>  </h2> */}
                <h1 className="title">Flamboyant<span className="color-title">Panthers.</span></h1>
               
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <Scroll to="about" onClick={linksInactive} smooth={true}><a className="link">About</a></Scroll>
                    <Scroll to="faqs" onClick={linksInactive} smooth={true}><a className="link">Faqs</a></Scroll>
                    <Scroll to="flambox"  onClick={linksInactive} smooth={true}><a className="link">Flambox</a></Scroll>
                    <Scroll to="staff" onClick={linksInactive} smooth={true}><a  className="link">Staff</a></Scroll>
    
                    <div className="icon-label">
                        <a href="https://twitter.com/FlamboPanthers" target='blank' className="icon-item"> <FaTwitter size={clicked ? 40 : 17} /> </a>
                        <a href="https://discord.gg/3HZWsfbY4e" target='blank' className="icon-item"> <FaDiscord size={clicked ? 40 : 17} /> </a>
                    </div>
                </div>
                <div className="burguer">
                    <BurgerButton clicked={clicked} handleClick={handleClick} />
                </div>
            </NavbarContainer>
        </>
    )
}

export default Navbar

const NavbarContainer = styled.nav`
        top: 0;
        left: 0;
        width: 100%;
        margin:auto;
        position: -webkit-sticky;
        position: sticky;
    .title{
        color: white;
        margin-left: 20px;
    }
    font-family: 'Nunito';  
    h2{
        font-weight: 400;
        span {
            font-weight:bold;
        }
    }
    .icon-label{ 
        display:flex; 
        align-items:center; 
        justify-content: center;
        flex-direction: row;
        background: none;
    }
    padding: .4rem; 
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    a{
        cursor: pointer;
        color: white; 
        text-decoration: none; 
        font-family: 'Nunito';  
       
        font-weight: 600;
        border-radius: 40px;
        padding: 5px 5px 5px 5px;
        transition: all 0.5s ease; 
    } 
    .a{
        cursor: pointer;
        color: white; 
        text-decoration: none; 
        font-family: 'Nunito';  
       
        font-weight: 600;
        border-radius: 40px;
        padding: 5px 5px 5px 5px;
        transition: all 0.5s ease; 
    }
    .link:hover{ 
        background: rgba(131, 80, 241, 0.4);

    }
    .links {
        position: absolute; 
        z-index: 1000;
        transition: all .5s ease;
        font-family: 'Nunito';
        top: -700px; 
        left: -2000px; 
        margin-left: auto;
        margin-right: auto;
        text-align: center; 
        display:flex;
        align-items:center;
        flex-direction: row;
        a{
            color: white;
            font-size: 2rem;
            display: block;
        }
        
        @media(min-width: 768px){
            position: initial;
            margin: 0;
            a{ 
                margin: 10px 10px 10px 10px ; 
                font-size: 1.5rem; 
                color: white;
                display: flex;
            }
            
        }
    }
    .links.active{
        width: 100%;
        height: 85vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 10vh;
        left: 0;
        right: 0;
        text-align: center; 
        a{
            
            width: 90%;
            align-self: center;
            font-family: 'Nunito';
            font-weight: 800;
            color: white;
            padding: 20px 20px 20px 20px;
            .link{
              margin: auto;
              padding: auto;
              
            }
        }
        .icon-label{ 
            display:flex; 
            align-items:center; 
            justify-content: center;
            flex-direction: column;
            background: none;
        }
        a:hover{ 
            color: rgb(131, 80, 241);
        }
        background:  rgba(255,255,255, 0.1);
        border-radius: 20px;
        backdrop-filter: blur(20px);
    }
    .burguer { 
        @media(min-width: 768px){
            display:none;
        }
    }
`