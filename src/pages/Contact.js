import React, { Fragment, useState } from 'react'

function Contact() {

    const [a,b]=useState(10);
    const [s,h] = useState('none');
    const changesize = (x)=>{
        b(x.target.value);
    }

    const changev = (tog)=>{
            h(tog.target.value);
    }
    return (
        <Fragment>
            <select onChange={changesize}>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
                <option>60</option>
            </select>
            <select onChange={changev}>
                <option value="block">show</option>
                <option value="none">hide</option>
            </select>
            <p style={{fontSize:`${a}px`,margin:`${a}px`,padding:`${a}px`,display:s}}>lo sddfjklsj fkl jsdfkljskf jkos jfksfjkwj fkl; jskldfjklsjfklsj fklsjdflk;j skl;fj skl;f jkl;sj fklksjfklsjfklsjfkl;j sdkl;fj klsddjf klsjfkjj  sd</p>
        </Fragment>
    )
}

export default Contact