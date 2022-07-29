import React from "react";
import styled from 'styled-components'




    function StaffComponent(props){
        
        return (
            <StaffComp>
                <div className={`staffcomp-container`}>
                    <img src= {props.imgPath}></img>
                    <h1> {props.name} </h1>
                    <p> {props.description} </p>
                </div>
            </StaffComp>
        )
    }
    export default StaffComponent

const StaffComp = styled.div`


color: rgb(186, 154, 255);
border: 2px solid white;
border-radius: 40px; 
overflow: hidden;
background: black;
h1{
    font-size: 2.5rem;
    margin: 0 0 0 0;
    margin-top: -8px;
}
p{
    max-width: 400px;
    color: white; 
    display:flex; 
    justify-content: center;
    margin: auto;
    font-size: 1rem;
}
img{
    margin-bottom: 0;
        border-bottom: 2px solid white;
        max-width: 500px;
        width: 100%;
    }
margin: 95px 95px 95px 95px;

@media (max-width: 600px) {
    margin: 10px 10px 10px 10px;
    margin-bottom: 25px;

  }
margin-bottom: 50px;
`