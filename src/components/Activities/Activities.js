import React from 'react';
import Swal from 'sweetalert2';
import './Activities.css'

const completeActivites = () => {
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Your activities completed',
        showConfirmButton: false,
        timer: 1500
    })
}
const Activities = () => {
    return (
        <div>
            <button onClick={completeActivites} className='complete'>Complete Activities</button>
        </div>
    );
};

export default Activities;