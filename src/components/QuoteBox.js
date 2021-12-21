import quotes from '../quotes.json'
import { useState } from 'react';
import { getRandomColor } from './GetRandomColor';


const QuoteBox = () => {
    
    const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);
    
    const [color,setColor]= useState(getRandomColor);

    const [body, setBodyColor]= useState(getRandomColor);
   
    let wrapperFunction = () => {
        getColor();
        getQuote();
        getBodyColor();

    };

    let getColor = () => {
        setColor(randomColor)
    };
    
    let getQuote = () => {    
        setQuote(quotes[Math.floor(Math.random() * quotes.length)])
    };

    
    let getBodyColor = () => {
         setBodyColor(document.body.style.background = randomColor)
    };
    
    let randomColor = getRandomColor()
    
    document.body.style.background = color
    
    return(
            
            <div className='card'>             
                <i className="fas fa-quote-left" style={{color:color}}></i>
                <p className='quote' style={{color:color}}>{quote.quote}</p>
                <p className='author'style={{color:color}}>{quote.author}</p>
                <button style={{background:color}} onClick={wrapperFunction} className='btn'> <span className='unselectable'><code> > </code></span></button>
            </div>
      
    );

 
};

export default QuoteBox;