import React, { Fragment } from 'react'

import GlobalStyle from '../../styles/global'

import Sidebar from '../Sidebar'
import Header from '../Header'


const Main = () => (
    <Fragment>
    <Header />
    <Sidebar />
    <GlobalStyle />
  </Fragment>
)

export default Main;
