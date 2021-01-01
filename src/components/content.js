import React from 'react';
import User from './user';
export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
    this.handleCurrentUser = this.handleCurrentUser.bind(this);
    this.addOneUser = this.addOneUser.bind(this);
    this.addUsers = this.addUsers.bind(this);
  }

  componentDidMount() {
    this.addUsers()
  }

  handleCurrentUser(event) {
    event.preventDefault()
    if (event.target.tagName !== 'BUTTON') return;
    if (event.target.innerText.includes('Delete')) {
      let id = event.currentTarget.getAttribute('id');
      let data = this.state.data.slice()
      data.splice(Number(id), 1)
      this.setState({ data })
    } else {
      alert(event.target.innerText)
    }
  }

  handleAddUser() {
    this.addOneUser();
  }
  addUsers() {
    this.addOneUser().then(response => {
      if(this.state.data.length < 2) this.addUsers()
     })
  }

  addOneUser() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return fetch(proxyurl + this.props.url, { mode: 'cors', redirect: 'follow' }).then(res => res.json()).then(data => {
      data = data['results']
      this.setState({data: this.state.data.concat(data)})
    })
  }
  render() {
    return (
      <ul className='list-group'>
        {this.state.data.map((item, index) => (<li onClick={this.handleCurrentUser} id={index} key={index} className='list-group-item'><User info={item} /></li>))}
        <button onClick={() => this.addOneUser()} type='button' className='btn btn-inf add-user-btn col-12'>Add User</button>
      </ul>
    )
  }
}