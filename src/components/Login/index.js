import React, { Fragment } from 'react'

import GlobalStyle from '../../styles/global'

import { Container, Form } from './styles'

import { connect } from 'react-redux';
import { Creators as AuthActions } from '../../store/reducers/auth';

import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: false,
      redirect: false,
      from: 0,
      to: 0,
    };

  }

  componentDidMount() {
    this.props.signIn('sdffsdf','sdfsdf')
  }
  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    this.setState({ error: false });

    if (!(username === 'euler.alvarenga@icloud.com' && password === 'foreman')) {
      console.log(username);
      return this.setState({ redirect: true });
    }

    console.log("you're logged in. yay!");

  }

  handleChange = (event) => {
    this.setState({
      from: event.target.value,
      to: parseInt(event.target.value * 2)
    }
      , () => console.log(this.state.username));
  }



  render() {
    const { redirect } = this.state;

    if (redirect) {
       return <Redirect to='/dashboard'/>;
    }

    return (

    <Fragment>
        <Container>
            <Form onSubmit={this.onSubmit}>
                <img src="#" height="42" />
                <input  name="email" type="email" placeholder="Seu e-mail" required="required"/>
                <input  name="password" type="password" placeholder="Senha 7 digitos" required="required"/>
                <button type="submit">Entrar</button>
                <a  href="/signup">Criar conta grátis</a>
          <input name="from" type="text" value={this.state.from} onChange={this.handleChange} />

          <input name="to" type="text" value={this.state.to}  />

            </Form>
        </Container>

    <GlobalStyle />
  </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(AuthActions.signIn(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

