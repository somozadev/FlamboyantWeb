import React from "react";
import styled from "styled-components";
import StaffComponent from "./StaffComponent";


export default function Staff() {

    const staff = [
        { name: 'Bagheera', imgPath: 'assets/Bagheera.jpeg', description: 'In charge of the legal department, experience with business structure. ' },
        { name: 'Skipper', imgPath: 'assets/Skipper.jpeg', description: 'Graduated in business administration and legal law. RRSS manager.' },
        { name: 'Kittenkiller', imgPath: 'assets/Kittenkiller.jpeg', description: 'Graduated in game development and engineering, a web3 developer enthusiast.' },
        { name: 'DixterDrawer', imgPath: 'assets/DixterDrawer.png', description: 'Graduated in fine arts with urban painting with 10 years of experience.' },
        { name: 'Espelta', imgPath: 'assets/Espelta.png', description: 'Freelance graphic designer, previous work experience in mayor companies.' },
        { name: 'DestonScream', imgPath: 'assets/DestonScream.png', description: 'Web developer with 15+ years of experience, passionate about investing in crypto.' },
    ];

    return (
        <>
            <StaffContainer id="staff">
            <h3 className="first-child">  <span>&lt;</span>  STAFF <span>&gt;</span>  </h3>
                {staff.map((staff) => <StaffComponent key={staff.name} name={staff.name} imgPath={staff.imgPath} description={staff.description}> </StaffComponent>)}
            </StaffContainer>
        </>
    )
}

const StaffContainer = styled.div`
        
    margin-top: 100vh;
    z-index: 1;
    
    font-family: 'Nunito';  
    padding: .4rem; 
    display: flex; 
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center; 
    justify-content: space-between;
    width: 100%;
    text-align: center;
    
    .first-child{  
        width: 100%;
    }
   
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