import React, { useState } from "react";
import styled from "styled-components";
import { Button } from './Button';
import som from './sons/sons.mp3';

const audio = new Audio(som);
export const Quotes = () => {
    const [frase, setFrase] = useState('');

    function buscar () {
         audio.play();
        setFrase('Oi, meu nome é Naruto!')
    }


    return (
        <div>
        <Wrapper>
            {frase}
            <br/>
            <br/>
            <Button onClick={buscar}>Quote No Jutsu</Button>
            
        </Wrapper> 
        </div>
        
    )
};



const Wrapper = styled.div`
flex: 1;
display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
`;

const Quote = styled.p`
   font-size: 2em;
   flex: 1;
   margin: 0;
`;

const Speaker = styled(Quote)`
   text-align: right;
   margin-bottom: 50px;
`;


