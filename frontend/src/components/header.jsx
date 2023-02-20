import React from 'react';

const Header = () => {
    return (
        <div className='bg-blue-500 mb-5'>
            <div className='flex justify-between items-center'>
                <h1 className='text-white ml-5 text-4xl p-5 font-bold border-black'>
                    Recuerdame
                </h1>
                <div>
                <button type="button" 
                className='text-white text-2xl p-2 mx-5'>
                    Cerrar Sesión
                </button>
                </div>
            </div>
        </div>
    )
}

export default Header
