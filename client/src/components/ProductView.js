
import React from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Image, Button, Segment, Reveal, Header, Container, Dimmer,Grid } from 'semantic-ui-react';
import Tshirt from '../images/home/tshirt.jpg'
import styled from 'styled-components';
import {getProducts} from '../actions/products';


class ProductView extends React.Component{

state = {} 
  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })
  
  render() {
    const { product={}} = this.props; 
     const { active } = this.state
  return( 
      <div>
        <Grid container columns={1}>
         <Grid.Column>
          <Dimmer.Dimmable as={Card} dimmed={active} fluid>
            <Dimmer active={active} onClickOutside={this.handleHide}>
              <Header as='h3' icon inverted>
                  {product.body}
              </Header>
            </Dimmer>
          <Header as='h3'>{product.title} </Header>
            <CardMain fluid>
              <Image src={product.image_src} />
                <Card.Content>
                  <Card.Header>{product.title}</Card.Header>
                  <Card.Meta>{product.variant_price}</Card.Meta>
                  <Card.Meta>{product.vendor}</Card.Meta>
                  <Card.Description>{product.handle}</Card.Description>
              </Card.Content>
            </CardMain>
        </Dimmer.Dimmable>
        <Button.Group>
          <Button icon='plus' onClick={this.handleShow} />
          <Button icon='minus' onClick={this.handleHide} />
        </Button.Group>
          </Grid.Column>
        </Grid>
      </div>
   )
  }
}
const CardMain = styled.div `
 
`
const ContainerMain = styled.div `
  width: 60%
  height: 40%
  
`
const mapStateToProps = (state, props) => {
  return { product: state.products.find( a => a.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(ProductView)
