import React, { Fragment } from 'react'

import GlobalStyle from '../../styles/global'

import { Container, Form, From, CurrencyInputContainer, DropDownButton } from './styles'

import { connect } from 'react-redux';
import { Creators as AuthActions } from '../../store/reducers/auth';

import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      from: 1000,
      to: 0,
      fromTag: 'USD',
      toTag: 'BRL',
      loading: false,
    };

  }

  // componentDidMount() {
  //   this.props.signIn('sdffsdf','sdfsdf')
  // }
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
    }, () => {
      this.convertCurrency(this.state.from)
    })


  }

  convertCurrency = (from) => {
    const apiKey = "2d44d2a77cc0d5378eaab250f5835576"
    const fromCurrency = 'USD'
    const toCurrency = 'BRL'
    const amount = 50

    let url = `https://apilayer.net/api/live?access_key=2d44d2a77cc0d5378eaab250f5835576&currencies=EUR,GBP,CAD,PLN&source=USD&format=1`

    this.setState({
      loading: true,
    })

    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      const total = parseFloat(from) * parseFloat(data.quotes.USDCAD)

      console.log(total)
      this.setState({
        loading: false,
        to: Math.round(total * 100) / 100,
      })
    })

    .catch(function() {
      console.log("Booo");
    });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
       return <Redirect to='/dashboard'/>;
    }

    return (

    <Fragment>
        <Container>
          <CurrencyInputContainer>
            <From>
              <span>Valor enviado</span>
              <Form>
                <input
                  name="from"
                  type="number"
                  min="0.00"
                  max="100000.00"
                  step="0.01"
                  value={this.state.from}
                  onChange={this.handleChange}
                />
              </Form>
            </From>
            <DropDownButton>
              <span>
                {this.state.fromTag}
              </span>
            </DropDownButton>
          </CurrencyInputContainer>
          <CurrencyInputContainer>
            <From>
              <span>Valor recebido</span>
              <Form>
                <input
                 name="to"
                 type="text"
                 value={ this.state.loading ? 'calculando...' : this.state.to }
                 readOnly
                />
              </Form>
            </From>
            <DropDownButton>
              <span>
                {this.state.toTag}
              </span>
            </DropDownButton>
          </CurrencyInputContainer>
        </Container>
    <GlobalStyle />
  </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ///auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  //signIn: (email, password) => dispatch(AuthActions.signIn(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

