import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Productpage() {
    const [user, userlist] = useState([]);
    const apidata = () => {
        axios.get("https://dummyjson.com/users?limit=50").then((r) => {
            console.log(r.data.users);
            userlist(r.data.users);
        })
    };

    useEffect(() => {
        apidata();
    }, []);



    return (
        <div className='container-fluid'>
            <div className='row'>
                {user.map((c) => {
                    return (
                        <div className='col-md-3 mt-2'>
                            <div className='card p-2'>
                                <h5>name:{c.username}</h5>
                                <p>Email Id: {c.email}</p>
                                <p>Phone No: {c.phone}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Productpage