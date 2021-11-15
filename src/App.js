import './App.css';
import narutoImag from './img/naruto.png';
import styled from 'styled-components';
import { Quotes } from './frase';
import fundo from './img/bg.jpeg';



function App() {
  
  return (
    <Conteudo>
      < Quotes />
      <NarutoImag src={narutoImag} alt='naruto' />
    </Conteudo>
  );
}

const Conteudo = styled.div`
height: 100vh;
padding: 0;
display: flex;
justify-content: center;
align-items: center;
background: url(${fundo}) center no-repeat;
  background-size: cover ;
`;
const NarutoImag = styled.img`
max-width: 50vw;
align-self: flex-end;
`;
export default App;
