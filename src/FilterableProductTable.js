import React,{Component} from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component{
    constructor(props){
        super(props);
        this.state={
            filterText:'',
            isStockOnly:false
        }
        this.handleSearchTextChange=this.handleSearchTextChange.bind(this);
        this.checkBoxChange=this.checkBoxChange.bind(this);
    }
    handleSearchTextChange(searchValue){
        this.setState({
            filterText:searchValue
        })
        console.log(this.state.filterText)
    }
    checkBoxChange(value){
        this.setState({
            isStockOnly:value
        })
    }
    render(){
        return(
            <div className="allproducts">
                <SearchBar 
                    searchText={this.state.filterText} 
                    isAvailable={this.state.isStockOnly}
                    onTextChange={this.handleSearchTextChange}
                    onCheckBoxChange={this.checkBoxChange}
                />

                <ProductTable 
                    products={this.props.products}
                    searchText={this.state.filterText}
                    isAvailable={this.state.isStockOnly}
                    />
            </div>
          
        )
    }
}
export default FilterableProductTable;