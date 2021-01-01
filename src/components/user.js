import React from 'react';
import { render } from 'react-dom';

export default class User extends React.Component {
  
  constructor(props) {
    super(props)
  }
  render() {
    let { gender, email, cell, name } = this.props.info;
    
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3 text-center">{`${name.last}, ${name.first}`}</h1>
          <p className="lead">Phone: {cell}</p>
          <p className='lead'>Email: {email}</p>
          <p className='lead'>Gender: {gender}</p>
          <button type='button' className='btn btn-danger delete-btn col-6'>Delete User</button>
          <button type='button' className='btn btn-info update-btn col-6'>Update User</button>
        </div>
      </div>
    )
  }
}