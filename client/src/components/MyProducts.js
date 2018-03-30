import React from 'react';
import {
  Card,
  Image,
  Divider,
} from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
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

  render() {
    const { products } = this.state;
    return (
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
           </Card.Content>
         </Card>
          )
        }
      </Card.Group>
    )
  }
}

export default connect()(MyProducts)
