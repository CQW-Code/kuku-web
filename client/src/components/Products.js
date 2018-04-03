//React
import React from 'react';
//Redux
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
//axios
import axios from 'axios';
//Semantic-ui make everything nice
import {
  Button,
  Card,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
} from 'semantic-ui-react';
import styled from 'styled-components';
import { setHeaders } from '../actions/headers';
import {getProducts} from '../actions/products';
import { addToCart } from '../actions/my_products';

class Products extends React.Component {

state = {handle: '', products: []}

  componentDidMount = () => {
    const { dispatch } = this.props;
    axios.get('/api/products')
    .then( res => {
      dispatch(setHeaders(res.headers))
      this.setState({ products: res.data })
      dispatch(getProducts(res.products));
  }).catch(err => {
      console.log(err)
  })
}

filterCategory = () => {
    const { products } = this.state;
    const { handle } = this.state;
    let visible = products;
    if (handle)
      visible = products.filter( p => p.handle === handle )
    return visible.map( p =>
      <Card key={p.id}>
      <h2>{p.name}</h2>
       <Image src={p.alt1} />
     <Card.Content>
      <Card.Header>
      {p.title}
      </Card.Header>
      <Card.Header>
       {p.variant_price}
      </Card.Header>
       <Card.Description>
         {p.vendor}
       </Card.Description>
     </Card.Content>
     <Link to= {`/products/${p.id}`}>
        <Button
            fluid
            color='blue'>
          View Me!
            </Button>
          </Link>
        <Button
        onClick={() =>
          this.handleClick(p.id)
        }>
        {p.incart ? (
          <p>Remove From Cart</p>
        ) : (
          <p>Add to Cart</p>
        )} 
      </Button>
     </Card>
     )
}


clearCategory = () => {
  this.setState({ handle: '' })
}

handleSelect = (e, {value}) => {
  this.setState({ handle: value });
  this.visible
}

categoryOptions = () => {
  const { handles } = this.props;
  return handles.map( (h,i) => {
    return { key: i, text: h, value: h }
  })
}

handleClick = (id) => {
  const { products } = this.state;
  const { dispatch } = this.props;
  axios.put(`/api/products/${id}`)
    .then( res => {
      dispatch(setHeaders(res.headers))
      this.setState({
        products: products.filter( p => p.id !== id )
      })
    })
    .catch( err => {
      console.log(err)
    })
}


  render() {
    const {handle} = this.state;
    
    return (
      <div>
    <Segment
      style={styles.background}>
      <Header
        as='h3'
        size='huge'
        textAlign='center'
         style={style.h3}>
          Go Kuku!
        </Header>
        </Segment>

            <Dropdown
              placeholder='Select Category or Brand'
              fluid
              selection
              value={handle}
              options={this.categoryOptions()}
              onChange={this.handleSelect}
              />
            { handle &&
                <Button
                  fluid
                  color= 'black'
                  onClick={this.clearCategory}
                 >
                   Clear Filter: {handle}
                 </Button>
            }
            <Divider />

         <Card.Group itemsPerRow = {4}>
                {this.filterCategory()}
        </Card.Group>

      </div>

    )
  }
}

const styles = {
  background: {
    backgroundColor: "black",
  }
}
const style = {
  h3: {
    color: "lightblue",
  }
}

const mapStateToProps = (state, props) => {

    const {products}=state
    const handles = [...new Set(products.map( h => h.handle))]
    //const vendors = [...new Set(products.map(v => v.vendor))]
        return { products,
                handles,
                product: state.products.find(
                  (product) => product.id === parseInt(props.match.params.id),
                ),
              }
            }


export default connect(mapStateToProps)(Products);
