import React, { Component } from 'react'

export default class License extends Component {
    render() {
        return (
           <div >
               <div style={{display:"flex"}}>
               <div className="license-div">
                <h4>Current Plan</h4>
                <div style={{display:"flex"}}>
                <h3>Pro</h3>
                 <p style={{marginLeft:"40px" ,   marginTop: "6px",color: "green"}}>Upgrade</p>
                </div>
            </div>

            <div className="license-div">
                <h4>Valid Till</h4>
                <h3>Mar 12 2022</h3>
            </div>
            <div className="license-div">
                <h4>Next due amount</h4>
                <h3>$23</h3>
            </div>
               </div>

               <div style={{marginTop:"70px",marginLeft:"10px"}}>
                   <p>Have coupon code?</p>
                   <input style={{width:"247px",borderRadius:"5px"}} placeholder="EX:NEWUSER30"/>
               </div>
               <div className="save1">
                       <button  >save changes</button>
                   </div>
           </div>
        )
    }
}
