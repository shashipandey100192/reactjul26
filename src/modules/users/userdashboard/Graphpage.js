import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';


const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];



function Graphpage() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <select className='form-select'>
                        <option>sdf</option>
                    </select>
                </div>
                <div className='col-12 g-0'>
                    <BarChart
                        style={{ width: '100%', maxWidth: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
                        responsive
                        data={data}>
                        {/* <CartesianGrid /> */}
                        <XAxis dataKey="name"/>
                        <YAxis width="auto"/>
                        <Tooltip/>
                        <Legend />
                        <Bar dataKey="pv" barSize={20} fill="red"/>
                        <Bar dataKey="uv" barSize={20} fill="green"/>
                        <Bar dataKey="amt" barSize={20} fill={"orange"}/>
                    </BarChart>
                </div>
            </div>
        </div>
    )
}

export default Graphpage