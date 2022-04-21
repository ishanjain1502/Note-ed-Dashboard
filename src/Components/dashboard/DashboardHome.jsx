import React from 'react';
import Navbar from '../NavBar/Navbar';
import Folders from './Folders';
import VideoHome from './videos/VideoHome';

export default function VideoList() {
    return (
        <div>
            <Navbar/>
           
            <main className='flex mt-16'>
                <div className=' folders-component ml-8 mr-8 basis-1/4'>
                    <Folders />
                    <section className='w-52 h-auto bg-new-green' >s
                       
                    </section>
                </div>
                <VideoHome />
            </main>
        </div>
    )
}
