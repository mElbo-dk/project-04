/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './style.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Edit from './components/edit/Edit'
import Create from './components/Create/Create'
import Library from './components/Create/Library'
import DocumentShow from './components/Create/DocumentShow'




const App = () => (
  <BrowserRouter>
			<>
				<Navbar />
				<Switch>
				  <Route exact path="/" component={Home} />
				  <Route path="/register" component={Register} />
				  <Route path="/login" component={Login} />
				  <Route path="/edit/:id" component={Edit} />
				  <Route path="/Create" component={Create} />	
					<Route path="/Library" component={Library} />
          <Route path="/documents/:id" component={DocumentShow} />

				</Switch>

	<Footer />
	</>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root')) 