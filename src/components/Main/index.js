import React, { Fragment } from 'react'

import GlobalStyle from '../../styles/global'

import Sidebar from '../Sidebar'
import Header from '../Header'
import CurrencyCalc from '../CurrencyCalc';


const Main = () => (
    <Fragment>
    <Header />
    <Sidebar />
    <CurrencyCalc />
    <GlobalStyle />
  </Fragment>
)

export default Main;
