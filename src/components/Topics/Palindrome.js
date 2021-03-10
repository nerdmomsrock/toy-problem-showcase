import React, { Component } from 'react';


class Palindrome extends Component {
    constructor (){
        super();
        this.state = {
            userInput: '',
            palindrome: '',
        }
    }

    handleChange = (val) => {
        this.setState ({userInput: val});
    }

    isPal = (userInput) => {
        const words = userInput.split();
        const reverseWords = userInput.split('').reverse().join('');
        if (words === reverseWords) {
            this.setState ({palindrome: 'true'});
        } else {
            this.setState ({palindrome: 'false'});
        }
            
        
    
        
    }



    render () {
        
        return (
            <div className='puzzleBox palindromePB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onclick={ () => this.isPal(this.state.userInput)}>Click to Check</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
    
           
        )
    }
    
}

export default Palindrome;
