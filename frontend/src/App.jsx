import React from 'react';
import Header from "./components/header";
import Subheader from './components/Subheader';
import Notes from './components/Notes';
import Feed from './components/Feed';

function App() {
    return (
        <div className="bg-blue-50 h-screen">
            <Header />
            <div className='container mx-auto grid grid-cols-6 gap-5'>
                <div className='col-span-4'>
                    <Subheader title={"Mis Notas"} />
                    <Notes />
                </div>
                <div className='col-span-2 '>
                    <Subheader title={"Feed"} />
                    <Feed />
                </div>
                <div className='col-span-4 row'>
                </div>
            </div>
        </div>
    );
}

export default App;
