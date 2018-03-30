//React
import React from 'react';
//Redux
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
//axios
import axios from 'axios';
//Semantic-ui make everything nice
import {
  Card,
  Container,
  Divider,
  Dropdown,
  Grid,
  Button,
  Icon,
  Header,
  Segment,
  Image,
  Menu,
} from 'semantic-ui-react';
import styled from 'styled-components';
import { setHeaders } from '../actions/headers';
import {getProducts} from '../actions/products';
import { addToCart } from '../actions/my_products';


class Products extends React.Component {

state = {handle: '', page: 1, products: []}

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

products = () => {
  const { products } = this.props;
    const { handle } = this.state;
    let visible = products;
//added functionality to filter categories
    if (handle)
      visible = products.filter( product => product.handle === handle )
    return visible.map( product =>
  //return this.props.products.map(product =>
    <Card key={product.id}>
      <Image src={product.alt1} />
      <Card.Content>
        <Card.Header>
          {product.title}
        </Card.Header>
        <Card.Header>
          {product.variant_price}
        </Card.Header>
        <Card.Meta>
       </Card.Meta>
        <Image src={product.vendor} />
        <Card.Meta>
          {product.logo}
        </Card.Meta>

      </Card.Content>
      <Card.Content extra>
      </Card.Content>

      <Link to= {`/products/${product.id}`}>
        <Button
        fluid
        color='blue'>
      View Item
        </Button>
      </Link>
    </Card>
  )
}

// Figure out how we can add a Header for CATEGORIES and
//for BRANDS then populate with Brands as well...

clearCategory = () => {
  this.setState({ handle: '' })
}

handleSelect = (e, {value}) => {
  this.setState({ handle: value })
}

categoryOptions = () => {
  const { handles } = this.props;
  return handles.map( (h,i) => {
    return { key: i, text: h, value: h }
  })
}

handleClick = (id) => {
  console.log(id);
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
      debugger
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
          Try It Out!
        </Header>
        </Segment>

            <Dropdown
              placeholder='Select Category or Brand'
              fluid
              selection
              options={this.categoryOptions()}
              value={handle}
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
              { this.state.products.map( p =>
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
