//React
import React from 'react';
//Redux
import {connect} from 'react-redux';
//axios
import axios from 'axios';
//Semantic-ui make everything pretty
import {
  Card,
  Header,
  Segment,
  Image,
} from 'semantic-ui-react';
import {getProducts} from '../actions/products';
import Tshirt1 from '../images/home/tshirt.jpg';
import Tshirt2 from '../images/home/tshirt2.jpg';
import Tshirt3 from '../images/home/tshirt3.jpg';
import Tshirt4 from '../images/home/tshirt4.jpg';
import ItemCard from './ItemCard.js';



class Products extends React.Component {

state = {page: 1, products: [], randomImages:[Tshirt1, Tshirt2, Tshirt3, Tshirt4]}

componentDidMount() {
  const { dispatch } = this.props;
  axios.get('/api/products')
    .then( res => {
      debugger
      this.setState({ products: res.data })
      dispatch(getProducts(res.products));
  }).catch(err => {
      console.log(err)
  })
}

displayImage = () =>{
  let num = Math.floor(Math.random() * 3);
  let image = this.state.randomImages[num];
  return (
    <Image src={image}/>
  )
}

  render() {
    const {products} = this.state;
    return(
      <div>
      <Segment inverted>
      <Header
        as='h3'
        size='huge'
        textAlign='center'
        inverted color ='white'>
          View All Products
          </Header>
        </Segment>
          <Card.Group itemsPerRow = {4}>
              {products.map(p =>
                  <ItemCard key={p.id} p={p} />
                )}
        </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product
   }
}
export default connect(mapStateToProps)(Products);
