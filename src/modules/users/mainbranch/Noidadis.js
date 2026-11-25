import React from 'react'

function Noidadis(props) {
  return (
    <div className='border bg-warning p-3'>
        <h2>Noidadis</h2>
        <select>
            {props.studentlist.map((d)=>{
                return(
                    <option>{d.age}</option>
                )
            })}
            
        </select>
    </div>
  )
}

export default Noidadis