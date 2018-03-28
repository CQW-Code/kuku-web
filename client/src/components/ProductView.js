
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
                (descrptionfiller)All new for 2018. Our latest 40-Liter Waterproof backpack takes everything you loved about the original model and added some enhanced modifications that will make this bag stronger and more functional. Blacked-Out, our Covert style bag is popular with tactical and military applications as well as with those that prefer more subtlelogoon their equipment. Additionally, there are no reflective patches on this pack to maintain the blacked out integrity of the pack. At 40 Liters, This pack provides an enormous amount of storage and more impressively, it will keep all of your gear 100% quick-submersion waterproof. The addition of a cinch strap with UTX clip at the top of the back provides the ability to both tighten down the top of the pack as well as strapping down anyvarietyf gear you would like to drape over the top of the pack. Also new on this model are two hypalon tether points on either side of the pack above the mesh pockets providing a tough connection point for whatever you would like to add to the pack. Carried over, are the daisy-chain straps that run parallel on the back of the pack providing multiple anchor points for added bungee straps or carabiners. We warranty all of our straps and welded seams from defect and we want you to buy with complete confidence that any concern with these elements of your pack will be addressed swiftly by Rockagator.
              </Header>
            </Dimmer>
          <Header as='h3'>Hydric Series 40 Liter </Header>
            <CardMain fluid>
              <Image src={Tshirt} />
                <Card.Content>
                  <Card.Header>Hydric Series 40 Liter</Card.Header>
                  <Card.Meta>Rockagator</Card.Meta>
                  <Card.Description>Unisex</Card.Description>
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
