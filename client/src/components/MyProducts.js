import React, { Fragment } from 'react';
import {
  Card,
  Image,
  Button,
} from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setHeaders } from '../actions/headers';

class MyProducts extends React.Component {
  state = { products: [] }

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/my_products')
      .then( res => {
        this.setState({ products: res.data })
        dispatch(setHeaders(res.headers));
      });
  }

  handleClick = (id) => {
    const { products } = this.state;
    const { dispatch } = this.props;
    axios.put(`/api/show_products/${id}`)
    axios.delete(`/api/my_products/${id}`)
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
    const { products } = this.state;
    return (
      <Fragment>
        <Card.Group itemsPerRow={4}>
          { products.map( p =>
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
               <Link to= {`/products/${p.id}`}>
                 <Button
                   fluid
                   color='teal'
                 >
                   View Product Details
                 </Button>
               </Link>
                <Button.Group>
                 <Button
                   icon
                   labelPosition='left'
                   floated='left'
                   >
                   <Link to={p.link} target="_blank">Buy it Now!</Link>
                 </Button>
                 <Button
                   icon
                   labelPosition='right'
                   floated='right'
                   onClick={() => this.handleClick(p.id)}
                  >
                  Remove Item
                  </Button>
                </Button.Group>
             </Card.Content>
           </Card>
            )
          }
        </Card.Group>
      </Fragment>
    )
  }
}

export default connect()(MyProducts)
