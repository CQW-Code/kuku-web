//React
import React from 'react';
//Redux
import { connect } from 'react-redux';
import { setHeaders } from '../actions/headers';
//Axios
import axios from 'axios';
//Semantic-ui, styling
import styled from 'styled-components';
import {
  Card,
  Icon,
  Image,
  Button,
  Segment,
  Reveal,
  Header,
  Container,
  Dimmer,
  Grid,
} from 'semantic-ui-react';



class ProductView extends React.Component{
state = { active: false, products: [] }
  handleShow = () => this.setState({ active: !this.state.active })

  handleLove = (id) => {
    const { dispatch, history, productIndex, products } = this.props;
    axios.put(`/api/products/${id}`)
    axios.put(`/api/show_products/${id}`)
      .then( res => {
        dispatch(setHeaders(res.headers))
        const productListLength = products.length - 1
        if (productIndex === productListLength) {
          history.push('/products/')
        } else {
          const product = products[productIndex + 1]
          history.push(`/products/${product.id}`)
        }
        this.setState({
          products: this.state.products.filter( p => p.id !== id )
        })
      })
      .catch( err => {
        console.log(err)
      })
  }

  handleHate = (id) => {
    const { dispatch, history, productIndex, products } = this.props;
    axios.put(`/api/hated_items/${id}`)
    axios.put(`/api/show_products/${id}`)
      .then( res => {
        dispatch(setHeaders(res.headers))
      })
    const productListLength = products.length - 1
    if (productIndex === productListLength) {
      history.push('/products/')
    } else {
      const product = products[productIndex + 1]
      history.push(`/products/${product.id}`)
    }
    this.setState({
      products: this.state.products.filter( p => p.id !== id )
    })
  }

  render() {
    const { product={}} = this.props;
     const { active } = this.state
  return(
      <div>
        <SegmentMain>
          <GridMain>
            <Grid container columns={1}>
            <Grid.Column>
              <Dimmer.Dimmable as={Card} dimmed={active} fluid>
                <Dimmer active={active} onClickOutside={this.handleHide}>
                  <Header as='h1' inverted>
                    {product.title}
                  </Header>
                  <br />
                  <Header as='h2' inverted>
                    {product.variant_price}
                  </Header>
                  <br />
                  <Header as='h3' inverted>
                    {product.vendor}
                  </Header>
                  <br />
                  <Header as='h3' color='teal'>
                    {product.body}
                  </Header>
                </Dimmer>
              <Header as='h3'>{product.title} </Header>
                <Card fluid >
                  <Image src={product.image_src} />
                    <Card.Content>
                    <Button
                      icon
                      labelPosition='left'
                      floated='left'
                      onClick={() =>
                        this.handleHate(product.id)
                      }
                    >
                      <Icon name='thumbs down' />
                      Forget It.
                    </Button>
                    <Button
                      icon
                      labelPosition='right'
                      floated='right'
                      onClick={() =>
                        this.handleLove(product.id)
                      }
                    >
                      <Icon name='heart' color='pink' />
                      Love It!
                    </Button>
                  </Card.Content>
                </Card>
            </Dimmer.Dimmable>
            <Button.Group compact>
              <Button onClick={this.handleShow}>
                { active === false
                  ?
                  "Tell Me More"
                  :
                  "X"
                }
              </Button>
            </Button.Group>
              </Grid.Column>
            </Grid>
          </GridMain>
        </SegmentMain>
      </div>
   )
  }
}
const GridMain = styled.div`
  width: 58%
  height: 58%
  text-align: center
`
const SegmentMain = styled.div`
  display: flex
  justify-content: center
`
const SegmentButtons = styled.div`
  display: flex
  justify-content: center
`
const mapStateToProps = (state, props) => {
  const { products } = state
  return {
    product: products.find( a => a.id === parseInt(props.match.params.id )),
    productIndex: products.findIndex( a => a.id === parseInt(props.match.params.id )),
    products,
  }
}
export default connect(mapStateToProps)(ProductView)
