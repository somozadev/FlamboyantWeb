import { Collapse } from "@mui/material";
import React from "react";
import useWindowPosition from "../hook/useWindowPosition";
import './MainInfo.css';

export default function MainInfo() {
    const checked = useWindowPosition('header');
    return (
        <div className="MainInfo" id="place-to-visit">
            <div className="spacer"></div>
            <Collapse in={checked} {... (checked ? {timeout : 1000} : {})} collapsedSize={0}>
                <div  className="test"><h1 checked={checked}>COMING SOON</h1></div>
            </Collapse>
        </div>

    );
}