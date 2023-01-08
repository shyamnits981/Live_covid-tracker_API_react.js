import React, { useEffect, useState } from 'react'

const Covid = () => {
    const [data, setData] = useState([])

    const getCovidData = async () => {
        try {
            const res = await fetch("https://data.covid19india.org/data.json")
            const actualdata = await res.json();
            console.log(actualdata.statewise[0])
            setData(actualdata.statewise[0])
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCovidData()

    }, []);

    return (
        <div className='container'>
            <div className='class1'><h2>Active</h2>{data.active}</div>
            <div className='class1'><h2>Confirm</h2>{data.confirmed}</div>
            <div className='class1'><h2>Death</h2>{data.deaths}</div>
            <div className='class1'><h2>Recover</h2>{data.recovered}</div>
            <div className='class1'><h2>Confirm Death</h2>{data.deltaconfirmed} </div>
            <div className='class1'>6</div>
        </div>
    )
}

export default Covid