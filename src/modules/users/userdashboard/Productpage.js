import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Productpage() {
    const [user, userlist] = useState([]);
    // const apidata = () => {
    //     axios.get("https://dummyjson.com/users?limit=50").then((r) => {
    //         console.log(r.data);
    //         userlist(r.data.users);
    //     })
    // };

    const apidata = () => {
      fetch("https://dummyjson.com/users?limit=50").then((d)=>{
        return d.json();
      }).then((myd)=>{
        console.log(myd);
        userlist(myd.users);
      })
    };



    useEffect(() => {
        apidata();
    }, []);



    return (
        <div className='container-fluid'>
            <div className='row'>
                {user.map((c,a) => {
                    return (
                        <div className='col-md-3 mt-2' key={a}>
                            <Link to={"details/"+c.id} className='card p-2 shadow'>
                                <h5>name:{c.username}</h5>
                                <p>Email Id: {c.email}</p>
                                <p>Phone No: {c.phone}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Productpage