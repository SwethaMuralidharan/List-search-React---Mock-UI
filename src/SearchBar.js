import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        const name=e.target.type;
        if(name=="text"){
            this.props.onTextChange(e.target.value)
        }
        if(name=="checkbox"){
            this.props.onCheckBoxChange(e.target.checked)
        }
       
    }
    render(){
        return(
            <form className="form">
                <input 
                    type="text" 
                    className="search"
                    placeholder="Search..." 
                    value={this.props.searchText} 
                    onChange={this.handleChange}/>
                <p className="checkfilter">
                    <input
                        type="checkbox" 
                        checked={this.props.isAvailable} 
                        onChange={this.handleChange}/>
                    Only show products in stock
                </p>
                
            </form>
        )
    }
}
export default SearchBar;