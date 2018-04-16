import React, { Component } from 'react';
import { Image, Segment, Container, Grid, Divider, Responsive, Button } from 'semantic-ui-react';
import Tshirt from '../images/home/Kuku.main.jpg';
import Iphone from '../images/home/IphoneX.png';
import appIcon from '../images/home/button-appstore.png';
import googlePlay from '../images/home/AndroidLink.png';
import styled from 'styled-components';
import Android from '../images/home/Android.png';
import { Link } from 'react-router-dom';


const AppLinks = styled.div`
  display: flex;
  justify-content: space-around;
  fluid
`

const ButtonLink = styled.a`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
`

class Home extends Component {
  render() {
    return (
      <Segment basic style={ styles.mainContainer}>
        <ButtonLink>
          <Button fluid color='black'>
            <Link to="/products" style={styles.text}>Shop Traditionally</Link>
          </Button>
          <Button fluid color='black'>
            <Link to="/products/32" style={styles.text}>Go KUKU!</Link>
          </Button>
        </ButtonLink>
        <br/>
        <Image style={styles.image} height="fill" fluid centered src={Tshirt} />
        <br/>
        <Container style={styles.middleContainer}>
          <Divider />
          <Grid>
            <Grid.Row centered columns={3}>
              <Grid.Column
                computer={8}
                mobile={16}
                tablet={8}
              >

                <Responsive as="Image" minWidth={750}>
                  <Image style={styles.iPhone} centered width="35%" src={Iphone}/>
                </Responsive>
              </Grid.Column>
              <Grid.Column
                computer={8}
                mobile={16}
                tablet={8}
              >
                <h2>Try a Fun New Way To Shop.</h2>
                <p>Why must they do that hack up furballs yet use lap as chair thinking longingly about tuna brine you have cat to be kitten me right meow but hit you unexpectedly but climb a tree. Soft kitty warm kitty little ball of furr purrrrrr find empty spot in cupboard and sleep all day milk the cow for white cat sleeps on a black shirt destroy the blinds and all of a sudden cat goes crazy. </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid>
            <Grid.Row centered columns={3}>
              <Grid.Column
                computer={8}
                mobile={16}
                tablet={8}
              >
                <h2>Like Tinder But Every Match Is A Winner!</h2>
                <p>QUACK! Hodor hodor - hodor... Hodor hodor hodor hodor hodor. Hodor. Hodor hodor - hodor, hodor. Hodor hodor hodor! Hodor, hodor - hodor?! Hodor hodor - hodor... Hodor hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, HODOR hodor, hodor hodor... Hodor hodor hodor. Hodor, hodor, hodor. Hodor HODOR hodor, hodor HODOR hodor, hodor hodor. Hodor. Hodor. Hodor hodor; hodor hodor? QUACK! </p>
              </Grid.Column>
              <Grid.Column
                computer={8}
                mobile={16}
                tablet={8}
              >
                <Responsive as="Image" minWidth={750}>
                  <Image style={styles.Android} centered width="35%" src={Android}/>
                </Responsive>
              </Grid.Column>
            </Grid.Row>
          </Grid>
         
        </Container>
        <Divider />
        <Container>
  
       <AppLinks>
            <Image
              src={appIcon}
              as='a'
              href='https://www.apple.com/ios/app-store/'
              size='small'
              target='_blank'
              rel='noopener noreferrer'
              centered
            />
            <Image
              src={googlePlay}
              as='a'
              href='https://play.google.com/store/apps?hl=en'
              size='small'
              target='_blank'
              rel='noopener noreferrer'
              centered
            />
          </AppLinks>
         
          <LinkLink
              to= '/faq'
            >
             FAQs
          </LinkLink>
          <LinkLink
            to= '/privacypolicy'
          >
            Privacy Policy
          </LinkLink>                          
          <LinkLink
            to= '/terms'
          >
            Terms and Conditions
          </LinkLink>
          <LinkLink
            to= '/settings'
          >
           Settings
          </LinkLink>
        </Container>
      </Segment>
       
    );
  }
}

const styles = {
  text: {
    color: '#ffffff',
  },
  main: {
    color: "#FFF",
  },
  image: {
    alignSelf: "center",
  },

  middleContainer: {
    height:'fill',
    background: 'white',
    width: '100%',
    justifyContent: 'center',
  },
  appIcon:{
    width: '160px'
  },
  btns:{
    padding: '10px',
    width: '10vw',
    height: '5vh',
  },
  btnsTOS:{
    padding: '10px',
    width: '15vw',
    height: '5vh',
  },

}

const LinkLink= styled.a`
  color: teal;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  &:hover{
     color: #b2d8d8;
  }
`

export default Home;
