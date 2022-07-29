import React, { useState } from "react";
import styled from "styled-components";
import FaqComponent from "./FaqComponent";

export default function Faq() {

    const faqs = [
        { question: 'How do I  get whitelist access? ', answer: 'Early Flambo WL are now closed. You can now earn the Chosen Ones WL through DAO collaborations or giveaways, or get the Vip Panzer role by following different quests explained every now and then on Discord, only accessible for Early Flambo WL members.' },
        { question: 'How many Panthers will I be able to purchase on drop? ', answer: 'Limited to one purchase per transaction. VIP Panzer will be able to mint two NFTs in the whitelist period, while Early Flambo and Chosen Ones will be able to mint one NFT during the whitelist mint period.' },
        { question: 'Where will mint happen? ', answer: 'Announcement on this will be made soon, but mint will happen in one of the main Solana Launchpads. Remember to not click any random link you see on Discord or receive by DMs. It might be a fake.' },
        { question: 'When will FlamboPanthers mint?', answer: 'We are expecting first half of August. Will confirm as soon as we have an exact date.' },
        { question: 'What will the price be? ', answer: 'We are not sure yet, and will be decided depending on market conditions. Either way, we are looking to have a cheap mint price.' }, //xxxx panthers will flambo
        { question: 'How large is the supply? ', answer: 'TBD.' }, //xxxx panthers will flambo
        { question: 'Where can I submit a collaboration request? ', answer: 'Check #| collab-form on discord.' },
    ];

    return (
        <>
            <FaqContainer id="faqs">
            <h3>  <span>&lt;</span>  FAQS <span>&gt;</span>  </h3>
                {faqs.map((faq) => <FaqComponent question={faq.question} answer={faq.answer}> </FaqComponent>)}
            </FaqContainer>
        </>
    )
}


const FaqContainer = styled.div`
    z-index: -1;
    margin-top: 100vh;
    
    font-family: 'Nunito';  
    padding: .4rem; 
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: space-between;
    width: 100%;
    text-align: center;
   
   
    h3{
        font-family: 'Nunito';  
        font-size: 6rem;
        font-width: 900;
        color: white;
        span{ 
            color: rgb(131, 80, 241);
        }
    }
    @media(max-width: 768px){
        h3{
            text-align:center;
            margin-left: auto;
            margin-right: auto;
            padding:auto;
            font-size: 2rem;

        }
     }
    
`