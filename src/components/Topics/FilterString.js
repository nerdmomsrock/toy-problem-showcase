import React, { Component } from 'react';


class FilterString extends Component {
    constructor () {
        super();
        this.state = {
            unfilteredArray: [],
            userInput: '',
            filteredArray: [],

        }
    }
    handleChange = (val) => {
        this.setState({userInput: val});
    }

    filteredUpdate = (userInput) => {
        let family = [...this.state.unfilteredArray];
        let filteredArray = [];
        for (let i = 0; i < family.length; i ++){
            if (family[i].startsWith('C')){
                this.state.filteredArray.push(family[i])
            }
        }
        this.setState({filteredArray: family});
    }
    render () {

        
        return (
            <div className="puzzleBox filterStringPB">
               <h4>Filter String</h4>
               <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
               <button className="confirmationButton" onClick={(e) => this.filteredUpdate(this.state.userInput)}>Click To Filter</button>
               <span className="puzzleText">Unfiltered Array: {JSON.stringify(this.state.unfilteredArray)}</span>
               <span className="resultsBox filterStringRB">Filtered Array: {JSON.stringify(this.state.filteredArray)}</span>

           </div>
    
           
        )
    }
    
}

export default FilterString;
