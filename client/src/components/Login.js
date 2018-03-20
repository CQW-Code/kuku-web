//React
import React, { Component } from 'react';
// Styles 
import { Header, Form, Button, Segment, Container, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';
import { setFlash } from '../actions/flash';
import styled from 'styled-components';

class Register extends Component {
  state = {email: '', password: '' };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { dispatch, history } = this.props;
  }

  handleChange = (event) => {
    // use e to grab the id off the element also the value and set state
    // const { id, value } = event.target;
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value });
  }

  render() {
    const {email, password} = this.state;

    return (
      <div>
      <AppContainer>
        <Segment basic>
        </Segment>
      </AppContainer>
      <AppContainer>
        <Segment basic>
          <Header as='h1' textAlign='center'>Go Kuku</Header>
          <Header as='h3' textAlign='center'>- Login -</Header>
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
            Login With 
          </Segment>
          <Segment basic textAlign='center'>
          <Button 
            class="huge ui facebook button"
            style={styles.btn}
          >
          <i class="facebook icon"></i>
          Facebook
          </Button>
          </Segment>
        </Segment>
      </AppContainer>
      </div>
    );
  }
}

//Styled Components 
const AppContainer = styled.div`
  background: white;
  width: 50%;
`

const styles = {
  btn: {
    backgroundColor: '#3b5998',
    color: '#fff',
    textAlign: 'center'
    
  },
}

export default connect()(Register);
