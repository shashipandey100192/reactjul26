import React from 'react'
import Delhibranch from './Delhibranch'
import Upbranch from './Upbranch'

function Headoffice() {

    const username = "ravi singh";

    const msg = ()=>{
        alert("wecome to props");
    }

    const users=[
        {name:"kumar",age:20,course:"java"},
        {name:"kumar1",age:200,course:"mern"},
        {name:"kumar1",age:100,course:"phy"},
        {name:"kumar3",age:80,course:"excel"},
    ]

    localStorage.setItem("mylocal",JSON.stringify(users));

  return (
    <div className='border'>
        <h1>Headoffice</h1>
        <div className='border'>
            <Delhibranch xyz={username} abc="ppppppp" mymsg ={msg}></Delhibranch>
        </div>

<div className='border p-3 bg-info'>
            <Upbranch msg={msg} userlist={users}></Upbranch>
            </div>

    </div>
  )
}

export default Headoffice