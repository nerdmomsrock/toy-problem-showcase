import React, { Component } from 'react';


class FilterObject extends Component {
    constructor () {
        super ();
        this.state = {
            unfilteredArray: [{}] ,
                
            userInput: '',
            filteredArray: [],
        };
    }

    handleChange = (val) => {
     this.setState({userInput: val});
     
    }
     
    filterEmployees  = () => {
        const filtered = [...this.state.unfilteredArray]
        for (let i = 0; i < filtered.length; i ++){
            if (filtered[i].name.startsWith('T')){
               this.state.filteredArray.push(filtered[i])
            }else {
                this.state.unfilteredArray.push(filtered[i])
            }
               
            
        }
        this.setState({filteredArray: filtered})



    }


    render () {
        console.log(this.state);
        return (
            
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={(e) => this.filterEmployees(this.state.userInput)}>Click To Filter</button>
                <span className="puzzleText">Unfiltered Array: {JSON.stringify(this.state.employees)}</span>
                <span className="resultsBox filterObjectsRB">Filtered Array: {JSON.stringify(this.state.filteredArray)}</span>

            </div>
    
           
        )
    }
    
}

export default FilterObject;
