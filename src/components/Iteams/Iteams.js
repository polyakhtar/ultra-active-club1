import React from 'react';
import './Iteams.css'

const Iteams = ({ iteam, cart, setCart }) => {
    const { name, img, discription, duration, age } = iteam

    const addToCart = () => {
        const info = parseInt(duration)
        if (cart) {
            const newtime = parseInt(cart + info)
            setCart(newtime)
        }
    }

    console.log(cart)
    return (
        <div className='iteam'>
            <div className='iteam-info'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>{discription}</p>
                <h6 style={{ fontSize: '18px' }}>Used Time {duration}S</h6>
                <p>For age {age}</p>
                <button onClick={addToCart} className='add-btn'>Add To List</button>
            </div>


        </div>
    );
};

export default Iteams;