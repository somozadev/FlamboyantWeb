import styled from 'styled-components';
import React from 'react';

function FlamboPrize(props) {
  return (
        <FPComp className='flambo-prize'>
            <img className='image' src={props.image}/>
            <h1 className='ratio'> {props.ratio} %</h1>
            <p className='description'> {props.description} </p>
        </FPComp>
    
  )
}

export default FlamboPrize

const FPComp = styled.div`
    width: 100%;
    max-width: 360px;
    align-self: center;
    display: flex; 
    overflow: hidden;
    justify-content: center; 
    align-items: center; 
    text-align: center;
    flex-direction: column;
    border: solid 0.5px rgba(255, 255, 255, 0.1);
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 40px;
    transition: 0.3s 50ms all ease-in;
    :hover {
        background-color: rgba(131, 80, 241, 0.4);
        border: solid 1px rgba(131, 80, 241, 1);
        max-width: 370px;
    }
    img {
        min-width: 350px;
        max-width: 450px;
        width: 50%;
    }
    .ratio{ 
        font-size: 1rem;
        font-weight: 900;
        position: relative;
        top: 20px;
        left: 110px; 
        height: 45px;
        background-color: rgba(255, 255, 255, 0.1);
        color:  rgb(143 229 185 / 80%);
        border-radius: 50px;

        display: flex;
        justify-content: center; 
        align-items: center;
        text-align: center; 
        padding-left: 5px;
        padding-right: 5px;
    
    }
    .description{ 
        width: 100%;
        border-radius: 0px;
        margin-bottom: 0px; 
    }


`