import React from 'react';

import { Helmet } from 'react-helmet';
import LayOut from './layout';
export default class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = { user: props.user };
  }

  someMethod() {
    console.log("message")
  }

  getUsers() {
    return fetch('randomuser.me/api').then(res => res.json()).then(response => {
      alert(response);
        this.setState({ user: response['results'][0] })
    })
  }

  renderUsers() {
    if (this.state.user) {
      let user = this.state.user
      let { name, gender } = user;
      return (
        <div>
          <h1>Greetings {name.first}, {name.last}</h1>
          <p>We happen to know that you are { gender }</p>
        </div>
      )
    } else {
      return (<p>No Users</p>)
    }
  }
  head() {
    return (
      <Helmet>
        <title>About Page</title>
      </Helmet>
    )
  }
  render() {

    return (
      <div>
        {this.head()}
        <LayOut name='About'/>
        <h1>
          About Page
        </h1>
        <section className='people'>
          <Content/>
        </section>
        <button onClick={() => this.someMethod()}>A nice button</button>
      </div>
    )
  }
}