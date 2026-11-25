import React from 'react'
import Noidadis from './Noidadis'

function Upbranch(props) {
  return (
    <div>
        <h1>Upbranch</h1>
        <button onClick={props.msg} className='btn btn-outline btn-danger'> alert</button>
        <select>
            {props.userlist.map((d)=>{
                return(
                    <option>{d.name}</option>
                )
            })}
            
        </select>
        <Noidadis studentlist={props.userlist}></Noidadis>
        </div>
  )
}

export default Upbranch