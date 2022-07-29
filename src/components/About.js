import React from "react";
import styled from "styled-components";


export default function About() {

    return (
        <>
            <AboutContainer id="about">
                <h3>  <span>&lt;</span>  ABOUT <span>&gt;</span>  </h3>
                <div>
                    <p>
                        Main FlamboPanthers objective is to create a project that works as a gap between Web2 and Web3, with a faithful community that supports and helps Flambo grow in all aspects.
                    </p>
                    <p>
                        On the other hand, we are currently building FLAMBO. As compared to other services platforms, it will be much cheaper and fully Web3 based, so NFT, crypto, and basically all crypto enthusiasts, as we all are, find a more comfortable platform where hire the people they are looking for in this difficult space. Platforms proceeds will be invested based on holders and the space needs. Platform use will be completely free (no fees) for Flambo Panthers holders.
                    </p>
                    <p>
                        Another aspect to consider are Mistery Flamboxes, one of the things we’ve developed with the objective of earning customers fidelity, since it will 100% be paid for by the team personal funds, and community will be able to check the prizes pre-mint. What we are looking for wwith this is for the customers to check how we believe and how we work in the project, and using the mint funds to make the Flambo brand and service grow both for its marketing and development.
                    </p>
                </div>
                {/* {staff.map((staff) => <StaffComponent key={staff.name} name={staff.name} imgPath={staff.imgPath} description={staff.description}> </StaffComponent>)} */}
            </AboutContainer>
        </>
    )
}

const AboutContainer = styled.div`
        
    margin-top: 100vh;
    
    font-family: 'Nunito';  
    padding: .4rem; 
    
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    width: 100%;
    text-align: center;
    
    h3{
        
        width: 100%;
        font-family: 'Nunito';  
        font-size: 4rem;
        font-width: 900;
        color: white;
        span{ 
            color: rgb(131, 80, 241);
        }
    }
  
      
    p{
        max-width: 1100px;
        margin: 10px 10px 10px 10px;
        padding: 10px 10px 10px 10px;
        font-family: 'Nunito';  
        font-size: 1.9vh;
        font-width: 900;
        color: white;
        span{ 
            color: rgb(131, 80, 241);
        }
        background-color: rgba(0, 0, 0, 0.25);
        border-radius: 40px;
    }
  
    
`