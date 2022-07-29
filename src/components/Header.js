import { AppBar, Collapse, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useState } from "react";
import { Link as Scroll } from 'react-scroll'
import './Header.css';
import Navbar from "./Navbar";
import whitepaper from './Panthers-Whitepaper.pdf';
export default function Header() {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
    <div className="header" id="header" >
        {/* <AppBar className="appbar" position="absolute" elevation={0} style={{ background: "none" }}> */}
            {/* <Toolbar className="wrapper" > */}
                {/* <h1 className="title">Flamboyant<span className="color-title">Panthers.</span></h1>
                <Navbar></Navbar> */}
               
            {/* </Toolbar> */}
        {/* </AppBar> */}

        <Collapse in={checked} {... (checked ? { timeout: 1500 } : {})} collapsedSize={0}>
            <div className="header-text">
                <h1>Join the <span className="color-title">Flambo</span> movement. Connect with your <span className="color-title">Panther</span> Ego. </h1>

            <a href={whitepaper} download="PanthersWhitepaper" target="_blank" className="download-whitepaper"> Whitepaper </a>


                <Scroll to="about" smooth={true}>
                    <IconButton >
                        <ExpandMoreIcon className="icon-godown" style={{ fontSize: '8rem' }} />
                    </IconButton>
                </Scroll>
            </div>
        </Collapse>
    </div >);
}