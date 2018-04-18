//React
import React, { Component } from 'react';
//Modal
import Modal from 'react-responsive-modal';
// Styles
import { Header, Form, Button, Segment, Image, Responsive } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { handleLogin } from '../actions/auth';
import styled from 'styled-components';
import Tshirt1 from '../images/home/tshirt.jpg';

class Login extends Component {
  state = {email: '', password: '', open: false};

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { dispatch, history } = this.props;
    dispatch(handleLogin(email, password, history));
  }

  handleChange = (event) => {
    // use e to grab the id off the element also the value and set state
    // const { id, value } = event.target;
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value });
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const {email, password, open} = this.state;
  
    return (
      <div>
      <MainContainer>
        <FormContainer>
          <Segment basic>
            <Header as='h1' textAlign='center'>Go Kuku Login</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label htmlFor='email'>Email</label>
                <input
                  id='email'
                  placeholder='Email'
                  required
                  value={email}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='password'>Password</label>
                <input
                  id='password'
                  placeholder='Password'
                  type='password'
                  required
                  value={password}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Segment basic textAlign='center'>
                <Button type='submit'>Login</Button>
              </Segment>
            </Form>
            <Segment basic textAlign='center'>
              - or -
              < br/>
              login with
            </Segment>
            <Segment basic textAlign='center'>
              <Button
                class="huge ui facebook button"
                style={stylesfb.btn}
                onClick={this.onOpenModal}
              >
                <i class="facebook icon"></i>
                Facebook
              </Button>
              <Button
                class="huge ui twitter button"
                style={stylestw.btn}
                onClick={this.onOpenModal}
              >
                <i class="twitter icon"></i>
                Twitter
              </Button>
            </Segment>
          </Segment>
          <Modal open={open} onClose={this.onCloseModal} little textAlign='center'>
            <h3>Sorry!</h3>
            <p>This function is still under construction</p>
          </Modal>
        </FormContainer>
        <ImageContainer>
          <Image src={Tshirt1}/>
        </ImageContainer>
      </MainContainer>
       <br/>
       <br/>
      </div>
    );
  }
}


//Styled Components
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`
const FormContainer = styled.div`
  background: white;
  width: 50%;
`

const ImageContainer = styled.div`
  background: white;
  width: 50%;
`
const stylestw = {
  btn: {
    backgroundColor: '#55acee',
    color: '#fff',
    textAlign: 'center'

  },
}

const stylesfb = {
  btn: {
    backgroundColor: '#3b5998',
    color: '#fff',
    textAlign: 'center'
  },
}

export default connect()(Login);




//T-shirts, state, and function to display random image if we want to figure out the bug

// import Tshirt2 from '../images/home/tshirt2.jpg';
// import Tshirt3 from '../images/home/tshirt3.jpg';
// import Tshirt4 from '../images/home/tshirt4.jpg';

// randomImages:[Tshirt1, Tshirt2, Tshirt3, Tshirt4]}

// displayImage = () =>{
//   let num = Math.floor(Math.random() * 3);
//   let image = this.state.randomImages[num];
//   return (
//     <Image src={image}/>
//   )
// }
