import React, { useState } from "react";
import styled from 'styled-components'




    function FaqComponent(props){
        const [clicked, setClick] = useState(false);
        const handleClick = () => {
            setClick(!clicked);
        }
        return (
            <FaqComp className="faqComp">
                <div onClick={handleClick} className={`faqcomp-container ${clicked ? '' : 'hidden'}`}>
                    <h1> {props.question} </h1>
                    <h4> {props.answer} </h4>
                </div>
            </FaqComp>
        )
    }
    export default FaqComponent

const FaqComp = styled.div`
   display: flex;
    align-items: center; 
    justify-content: center; 
    flex-direction: column;
    font-family: 'Nunito';
    color: white; 
    background: rgba(131, 80, 241, 0.7);
    backdrop-filter: blur(20px);
    border-radius: 30px;
    margin-bottom: 15px;
    width: 860px;
    min-height: 80px;
    cursor: pointer;

    h1{
        padding-top: 40px;
        padding-bottom: 20px;
        margin: 20px 20px 20px 20px;
    }
    h4{
        margin: 10px 10px 10px 10px;
        font-weight: 400;
        font-size: 1.2rem;
        transition: all .2s;
    }
    .faqcomp-container.hidden{ 
        h4{
            visibility: hidden;
            height: 0%;
            margin: -20px;
        }
        h1{
            margin-top: -5px;

        }
    }

    @media(max-width: 768px){
       
        max-width: 350px;
        min-width: 300px;
        margin-left:auto;
        margin-right:auto;
        min-height: 50px;
        text-align: center;
        h1{ 
            font-size: 0.9rem;
        }
        h4{
            font-size: 0.5rem;
        }
     }

`