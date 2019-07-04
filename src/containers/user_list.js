import React, { Component } from 'react'
import { connect } from 'react-redux'
/**
 * ComponentName
 */
 class UserList extends Component {
  render() {
    return (
          <div>
              <ul ClassName="col-md-4">
                  {
                     this.props.myUsers.map((user)=>{
                       return (
                       <li ClassName="list-group-item" key={user.id}>
                          {user.name}
                       </li>
                        )
                     })
                  }
              </ul>
          </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    myUsers : state.users
  }

}

export default connect(mapStateToProps)(UserList)
