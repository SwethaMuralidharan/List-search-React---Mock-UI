import React,{Component} from "react";
class ProductCategoryRow extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <tr>
                <th>
                {this.props.category}
                </th>
            </tr>
        )
    }
}
export default ProductCategoryRow;