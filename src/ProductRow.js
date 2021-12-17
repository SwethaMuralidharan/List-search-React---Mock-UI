import React,{Component} from "react";
class ProductRow extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const product = this.props.product;
        const computedstyles=(product.stocked?{color:'black'}:{color:'red'})
        return(
          <tr>
              <td style={computedstyles}>{product.name}</td>
              <td>{product.price}</td>
          </tr>
        )
    }
}
export default ProductRow;