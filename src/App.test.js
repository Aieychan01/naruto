import { render, screen } from '@testing-library/react';
import App from './App';
import {Quotes} from './frase';
import {Button} from './Button';

test('renders the app with a button, a quote and a button', () => {
  render(<App />);
  const butonEl = screen.getByRole('button');
  const imagEl = screen.getByRole('img');
  const textEl = screen.getByText(/Speaker/);

  expect(butonEl).toBeInTheDocument();
  expect(imagEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
  
});

const quotes = 'test quote';
const speaker = 'random speaker';

test('renders received quote, speaker and a button', () =>{
  render(<Quotes />);

  const butonEl = screen.getByRole('button');
  const quotes = screen.getByRole(quotes);
  const speakEl = screen.getByText(`-${speaker}`);

  expect(butonEl).toBeInTheDocument();
  expect(quotes).toBeInTheDocument();
  expect(speakEl).toBeInTheDocument();


});

test('renders button with text', () =>{
  render(<Button>Test</Button>);

  const butonEl = screen.getByText('Test');

  expect(butonEl).toBeInTheDocument();
 
});
