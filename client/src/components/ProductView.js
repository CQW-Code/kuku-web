
import React from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Image, Button, Segment, Reveal, Header, Container, Dimmer,Grid } from 'semantic-ui-react';
import Tshirt from '../images/home/tshirt.jpg'
import styled from 'styled-components';
import {getProducts} from '../actions/products';
class ProductView extends React.Component{
state = { active: false } 
  handleShow = () => this.setState({ active: !this.state.active })
  
  render() {
    const { product={}} = this.props; 
     const { active } = this.state
  return( 
      <div>
        <SegmentButtons>
          <Button.Group compact>
            <Button animated>
              <Button.Content visible>Last Product</Button.Content>
              <Button.Content hidden>
                <Icon name='left arrow' />
              </Button.Content>
            </Button>
            <Button animated>
              <Button.Content visible>Next Please</Button.Content>
              <Button.Content hidden>
                <Icon name='right arrow' />
              </Button.Content>
            </Button>
          </Button.Group>
        </SegmentButtons>
        <br />
        <SegmentMain>
          <GridMain>
            <Grid container columns={1}>
            <Grid.Column>
              <Dimmer.Dimmable as={Card} dimmed={active} fluid>
                <Dimmer active={active} onClickOutside={this.handleHide}>
                  <Header as='h3' icon inverted>
                    Title: {product.title}
                    Price: {product.variant_price}
                    Vendor: {product.vendor}
                    Description: {product.body}
                  </Header>
                </Dimmer>
              <Header as='h3'>{product.title} </Header>
                <Card fluid >
                  <Image src={product.image_src} />
                    <Card.Content>
                    <Button icon labelPosition='left' floated='left'>
                      <Icon name='thumbs down' />
                      Forget It. 
                    </Button>
                    <Button icon labelPosition='right' floated='right'>
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
                  "Back"
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
  return { product: state.products.find( a => a.id === parseInt(props.match.params.id )) }
}
export default connect(mapStateToProps)(ProductView)
