import React from 'react';
//import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import {
  Button,
  Card, 
  Container,
  Header,
  Icon,
  Image,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import axios from 'axios';
import {setHeaders} from '../actions/headers';
import {Link} from 'react-router-dom';
import Logo from '../images/home/KUKU2 (2).jpg'


 class Womens extends React.Component {

  state = {
    products: [],
    showProduct: true, 
    page:1, 
    totalPages:0, 
    open: false
  }

  componentDidMount() {
    axios.get('/api/products')
      .then( res => {
        this.setState({ products: res.data })
        console.log(this.state.products)
    }).catch(err => {
      console.log(err)
    })
  }
     handleLove = (id) => {
    const { products } = this.state;
    const { dispatch } = this.props;
    axios.put(`/api/products/${id}`)
    axios.put(`/api/show_products/${id}`)
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({
          products: products.filter( p => p.id !== id )
        })
    }).catch( err => {
      console.log(err)
    })
  }

   handleHate = (id) => {
    const { products } = this.state;
    const { dispatch } = this.props;
    axios.put(`/api/hated_items/${id}`)
    axios.put(`/api/show_products/${id}`)
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({
          products: products.filter( p => p.id !== id )
        })
    }).catch( err => {
      console.log(err)
    })
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onBottomVisible=()=>{
    const page = this.state.page + 1;
    axios.get(`/api/products?page=${page}&per_page=12`)
      .then( ({data}) => {
        this.setState( state => {
          return {products: [...state.products, ...data], page: state.page+1}})
      }).catch(err => {
        console.log(err)
      })
    }

  filterWomen = (handle) => {
    const { products, open } = this.state;
    const {user}= this.props;

    return products.map( p => {
      if(p.handle === 'Womens' && p.show_product === true){
        return(
          <Card style={styles.cardStyle} key={p.id}>
            <h2>{p.name}</h2>
          <Image style={styles.images} src={p.alt1} />
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
          <Responsive as="Image" minWidth={1000}>
            <Link to= {`/products/${p.id}`}>
              <Button
                fluid
                color='teal'
              >
                View Product Details
              </Button>
            </Link>
          </Responsive>
          <Card.Content>
            <Button
              icon
              size='big'
              animated='fade'
              floated='left'
              onClick={() =>
                user.id === undefined ? this.onOpenModal() : this.handleHate(p.id)
              }
            >
              <Button.Content hidden>
              <Icon name='thumbs down' color='red' />
            </Button.Content>
              <Button.Content visible>Dislike</Button.Content>
            </Button>
            <Button
              icon
              size='big'
              animated='fade'
              floated='right'
              onClick={() =>
                user.id === undefined ? this.onOpenModal() : this.handleLove(p.id)
              }
            >
            <Button.Content hidden>
              <Icon name='heart' color='pink' />
            </Button.Content>
            <Button.Content visible>Love It!</Button.Content>
          </Button>
          </Card.Content>
          <Modal open={open} onClose={this.onCloseModal} little textAlign='center'>
            <h2>You are not logged in!</h2>
            <p>
              Unless you have an account with KUKU, we can't remember what products you like! For the best user experience,
              please register and login.
            </p>
            <Link to={'/register'}>
              <Button basic color='teal'>Register</Button>
            </Link>
            <Link to={'/login'}>
              <Button basic color='teal'>Login</Button>
            </Link>
          </Modal>
        </Card>
      )
      }
    })
  }

  render() {
    return(
      <Container>
        <Segment style={styles.background}>
          <Image src={Logo} 
            className="ui centered image" 
            size="medium" 
            alt="Kuku Logo"/>
        </Segment>
         <Visibility
          once = {false}
          continuous={true}
          onBottomVisible={()=>this.onBottomVisible()}
        >
        <Header
          inverted color = 'teal'
          textAlign='center'
          size='huge'>
            Women's Collection
        </Header>
        <Card.Group 
          computer={8}
          mobile={2}
          tablet={4}
          centered>
            {this.filterWomen()}
        </Card.Group>
        </Visibility>
      </Container>
    )
  }
} 

const styles = {
  background: {
    backgroundColor: "black",
  },
  scroller: {
    height: '80vh',
    overflow:'auto'
  },
  cardStyle: {
    display: 'block',
  },
  images: {
    height: '12vw',
  },
  
}
export default Womens;