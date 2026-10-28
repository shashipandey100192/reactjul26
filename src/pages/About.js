import { Fragment } from "react/jsx-runtime";

function Aboutpage()
{
    return <h1 style={{color:"red",backgroundColor:"green"}}>this is first page ggggggg</h1>;
}

export default Aboutpage;


function Abc()
{
    return <h3>heading one</h3>
}
export {Abc}

export function Student()
{
    return "sjdhfjsdhfjshdjfhs"
}

export function Companyinfo()
{
    const name="ravi";
    const age = 40;
    const stu={name:"rohit",age:20,phone:"8454545"};
    return(
        <Fragment>
            <h2>this is heading two</h2>
            <h3>username:{name}</h3>
            <h1>age:{age}</h1>
            <h1>age:{10+80}</h1>
         
        </Fragment>
    )
}

export const Service = ()=>{
    const age=50;

    return(
        <Fragment>
            <h1>this is heading {age}</h1>
            <p>server <h1>this is </h1> page</p>
        </Fragment>
    )
}



