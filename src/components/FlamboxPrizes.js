import React from "react";
import styled from "styled-components";
import "./FlamboxPrizes.css";
import flambox from "../img/flambobox.png";
import FlamboPrize from "./FlamboPrize";

import cap_black from '../img/prizes/cap-black.PNG';
import cap_blue from '../img/prizes/cap-blue.PNG';
import cap_flambo from '../img/prizes/cap-flambo.PNG';
import _package from '../img/prizes/package.PNG';
import pants_black from '../img/prizes/pants-black.png';
import pants_grey from '../img/prizes/pants-grey.png';
import phonecase_black from '../img/prizes/phonecase-black.PNG';
import shortshirt_grey from '../img/prizes/shortshirt-grey.PNG';
import shortshirt_white from '../img/prizes/shortshirt-white.PNG';
import shortshirt_black from '../img/prizes/shortshirt-black.PNG';
import stayflambo_black from '../img/prizes/stayflambo-black-2sides.png';
import stayflambo_grey from '../img/prizes/stayflambo-grey-2sides.png';
import stayflambo_white from '../img/prizes/stayflambo-white-2sides.png';
import hoodie_grey from '../img/prizes/hoodie-grey-2sides.PNG';
import hoodie_black from '../img/prizes/hoodie-black-2sides.PNG';
import hoodie_colors from '../img/prizes/hoodie-colors.PNG';
import stickers from '../img/prizes/stickers.PNG';


export default function FlamboxPrizes() {

    const FlamboPriceArray = [
        { image: cap_black, ratio: '10', description: 'a flambo cap.' },
        { image: cap_blue, ratio: '10', description: 'a flambo cap.' },
        { image: cap_flambo, ratio: '100', description: 'a flambo cap.' },
        
        { image: stayflambo_black, ratio: '100', description: 'a black shirt stay flambo.' },
        { image: stayflambo_grey, ratio: '100', description: 'a grey shirt stay flambo.' },
        { image: stayflambo_white, ratio: '100', description: 'a white shirt stay flambo.' },
        
        { image: pants_black, ratio: '100', description: 'black sports pants.' },
        { image: pants_grey, ratio: '100', description: 'grey sports pants.' },
        { image: phonecase_black, ratio: '100', description: 'a phone case.' },
        
        { image: shortshirt_grey, ratio: '100', description: 'a grey shirt.' },
        { image: shortshirt_white, ratio: '100', description: 'a white shirt.' },
        { image: shortshirt_black, ratio: '100', description: 'a black shirt.' }, 

        { image: hoodie_grey, ratio: '100', description: 'a grey hoodie.' },
        { image: hoodie_black, ratio: '100', description: 'a black hoodie.' },
        { image: hoodie_colors, ratio: '100', description: 'a color exclusive hoodie.' },
        { image: stickers, ratio: '100', description: 'a bunch of stickers.' },
        { image: _package, ratio: '100', description: 'a bag.' },
        
    ];


    return (
        <>
            <FlamboxPrizesContainer id="flambox">
                <h3>  <span>&lt;</span>  Flambox Prizes <span>&gt;</span>  </h3>
                <div className="flambobox">
                    <img src={flambox} className="image" />
                </div>
                {/* <p>
                    More information will soon be published about the Mistery Flamboxes, which will be a free mint for Flambo Panther holders. You will discover the merch and prizes designs, amounts, holder benefits, and more... Stay tuned to our socials!
                </p> */}
            </FlamboxPrizesContainer>
            <FlamboPrizesGroup className="flambo-prizes-group">
                {FlamboPriceArray.map((FlamboPriceArray) => <FlamboPrize image={FlamboPriceArray.image} description={FlamboPriceArray.description} ratio={FlamboPriceArray.ratio}> </FlamboPrize>)}
            </FlamboPrizesGroup>
        </>
    )
}

const FlamboPrizesGroup = styled.div`
    display: flex; 
    gap: 10px 200px;
    margin-top: 20vh;
    margin-right: auto;
    margin-left: auto;
    flex-wrap: wrap;
    // border: 2px solid white;
    border-radius: 80px;
    align-items: center; 
    justify-content: center; 
    text-align: center; 
    padding: .4rem; 
    width: 60vw;
`
const FlamboxPrizesContainer = styled.div`
    
    margin-top: 80vh;
    font-family: 'Nunito';  
    padding: .4rem; 
    height: 100vh;
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    width: 100%;
    text-align: center;
`