import React, { Component } from 'react';


class EvenAndOdd extends Component {
    constructor () {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        };
    }

    handleChange = (val) => {
        this.setState({userInput: val});
    }
   
    assignEvenAndOdds = (userInput) => {
        const evens = [...this.state.evenArray]
        const odds = [...this.state.oddArray]
        const input = this.state.userInput.split(',');
       for (let i = 0; i < input.length; i ++){
        if (input[i]%2===0){
            evens.push(input[i])
        }else {
            odds.push(input[i])
        }
    }
        this.setState({evenArray: evens, oddArray: odds})

    }


    render () {
        console.log(this.state);
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={this.assignEvenAndOdds}>Click To Sort</button>
                <span className="resultsBox">Even Array: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odd Array: {JSON.stringify(this.state.oddArray)}</span>
            </div>
    
           
        )
    }
}
    


export default EvenAndOdd;



