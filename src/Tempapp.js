import React, { useEffect, useState } from 'react'
import { FaStreetView } from 'react-icons/fa'
import './components/css/style.css'
const Tempapp = () => {
    // const changedata = (e) => {
    //     console.log(e.target.value);
    // }
    const [City, SetCity] = useState(null);
    const [search, setsearch] = useState("jalandhar");
    useEffect(() => {
        const fetchapi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=14d3a713aaf3079f15028eb33f9e71b7`
            const res = await fetch(url)
            const resjs = await res.json()
            SetCity(resjs.main)
        }
        fetchapi();
    }, [search])
    return (
        <>
            <div className="container">
                <div className="box">
                    <div className="inputdata">
                        <input type="search"
                            onChange={(e) => { setsearch(e.target.value) }}
                            className='inputfield'
                            defaultValue='' />
                    </div>
                    {!City ? (
                        <p className='errormsg'>no data found</p>
                    ) : (

                        <div className="info">
                            <h2 className="location">
                                <FaStreetView /> {search}
                            </h2>
                            <h1 className="temp"> {City.temp}° cel</h1>
                            <h3 className='tempmin_max'>min: {City.temp_min}° cel | max : {City.temp_max}° cel</h3>
                        </div>
                    )
                    }
                </div>
            </div>

        </>
    )



}

export default Tempapp;
