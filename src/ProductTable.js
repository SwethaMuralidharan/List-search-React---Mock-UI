import React, { Component } from "react";
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
class ProductTable extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const isAvailable=this.props.isAvailable;
        const searchText=this.props.searchText;
        let products=this.props.products;

        const computedstyles = {margin:'0 auto'}
        const rows=[]
        let rowCategory=null;

        
        products.forEach(element => {
            if(element.name.includes(searchText)===false){
                return;
            }
            if(isAvailable && element.stocked===false){
                return;
            }

            if(rowCategory!==element.category){
                rows.push(<ProductCategoryRow category={element.category} key={element.category}/>)
            }
            rows.push(<ProductRow product={element} key={element.name}/>)
            rowCategory=element.category
        });
    

        return(
            <div>
                <table style={computedstyles}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
              
              
            </div>
        )
    }
}
export default ProductTable;