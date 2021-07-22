
import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className="profile-div">
                <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="img" />
                <img id="icon" src="https://iconsplace.com/wp-content/uploads/_icons/0000ff/256/png/edit-icon-2-256.png" alt="icon" />
            </div>
            <div>
                <form action="">
                   <div className="form">
                   <div>
                    <label htmlFor="name">first name</label> <br/>
                    <input type="text"  /> <br/>
                    </div>
                   <div>
                   <label htmlFor="name">last name</label> <br/>   
                    <input type="text"  />
                   </div>
                   </div>
                   <div className="email">
                   <label htmlFor="name">email</label> <br/>   
                    <input type="text"  />
                   </div>
                   <div className="save">
                       <button  >save changes</button>
                   </div>
                </form>
            </div>
            </div>
        )
    }
}
