import React, { Component } from 'react';
import { Header, Image, Segment, Container, Grid, Divider, Responsive } from 'semantic-ui-react';
import Tshirt from '../images/home/Kuku.main.jpg';
import Iphone from '../images/home/iphone-blank.jpg';
import appIcon from '../images/home/button-appstore.png';
import googlePlay from '../images/home/Android.png';
import styled, { keyframes } from 'styled-components';


const AppLinks = styled.div`
  display: flex;
  justify-content: space-around;
  fluid
`

class Home extends Component {
  render() {
    return (
      <Segment basic style={ styles.mainContainer}>
        <Image style={styles.image} height="560px" fluid centered src={Tshirt} />
        <Container style={styles.middleContainer} height="400px">
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
              <h2>Test</h2>
              <p> slave food dispenser. Why must they do that hack up furballs yet use lap as chair thinking longingly about tuna brine you have cat to be kitten me right meow but hit you unexpectedly but climb a tree. Soft kitty warm kitty little ball of furr purrrrrr find empty spot in cupboard and sleep all day milk the cow for white cat sleeps on a black shirt destroy the blinds and all of a sudden cat goes crazy. </p>
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
          </Container>
      </Segment>
    );
  }
}

const styles = {
  main: {
    color: "#FFF",
  },
  image: {
    alignSelf: "center",
  },

  middleContainer: {
    height:'540px',
    background: 'white',
    width: '100%',
    justifyContent: 'center',
  },
  appIcon:{
    width: '160px'
  }

}

export default Home;
