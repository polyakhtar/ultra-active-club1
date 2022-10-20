import React, { useEffect, useState } from 'react';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Iteams from '../Iteams/Iteams';
import './Body.css'
import picture from '../Picture/picture.jpg'

import Break from '../Break/Break';


const Body = () => {
    const [cart, setCart] = useState([])
    const [brakes, setBrake] = useState([])
    const [iteams, setIteam] = useState([0])

    const [time, setTime] = useState(0)

    useEffect(() => {
        const hello = localStorage.setItem("Brake", JSON.stringify(brakes))
        setTime(JSON.parse(localStorage.getItem("Brake")))


    }, [brakes])


    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setIteam(data))
    }, [])
    return (
        <div className='body'>
            <div className="iteams-container">
                {
                    iteams.map(iteam => <Iteams key={iteam.id} iteam={iteam} cart={cart} setCart={setCart}></Iteams>)
                }
            </div>
            <div className="cart-container">
                <div>
                    <div className='user-bio'>
                        <img src={picture} alt="" />
                        <div >
                            <h2 className='user-name'>Poly Akhtar</h2>
                            <div className='user-location'>
                                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                                <p>Cumilla, Bangladesh</p>
                            </div>
                        </div>
                    </div>

                    <div className='info-container'>

                        <div >
                            <h1>40</h1>
                            <h3>KG</h3>
                        </div>
                        <div >
                            <h1>5</h1>
                            <h3>Height</h3>
                        </div>
                        <div >
                            <h1>22</h1>
                            <h3>Years</h3>
                        </div>

                    </div>
                    <h2 className='add-break'>Add A Break</h2>
                    <div className='break-time'>
                        {

                            iteams.map(iteam => <Break key={iteam.id} iteam={iteam} brakes={brakes} setBrake={setBrake}></Break>)
                        }
                    </div>

                    <div>
                        <h2 className='details'>Gym Details: </h2>
                        <div className='gym-time'>
                            <h3>Total GYM Time</h3>
                            <p>{cart} Seconds</p>
                        </div>
                    </div>
                    <div>
                        <div className='gym-time'>
                            <h3>Totoal Break Time</h3>
                            <p>{time} Seconds</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Body;