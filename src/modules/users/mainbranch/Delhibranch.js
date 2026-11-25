import React from 'react'

function Delhibranch(props) {
  return (
    <div>
        <h3>Delhibranch</h3>
        <h4> {props.xyz}</h4>
         <h4> {props.abc}</h4>
         <input type="button" value="show message" onClick={props.mymsg}/>
        
    </div>
  )
}

export default Delhibranch