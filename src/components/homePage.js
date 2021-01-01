import React from 'react';
import { Helmet } from 'react-helmet';
import LayOut from './layout';
import Content from './content';
let colors = { base: '#344966', contrast: '#B08EA2', text: "#F0F4EF", sharp: "#84714F", light: "#1E96FC" }


export default class Home extends React.Component {
  someMethod() {
    console.log('javascript is running');
  }
  head() {
    return (
      <Helmet>
        <title>My little Page Title</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="theme-color" content="#000000"/>
      </Helmet>
    )
  }
  render() {
    return (
      <div>
        {this.head()}
        <LayOut name='home'/>
        <main className='container'>
          <div id='page-title' className='page-header'>
            <h1 className='text-center'>Rodney Matambo</h1>
            <p className='font-weight-lighter text-center'> Greetings</p>
          </div>
          <p>
            <Content url='https://randomuser.me/api'/>
          </p>
          <button onClick={() => this.someMethod()}>A nice button</button>
        </main>
      
      </div>
    )
  }
}