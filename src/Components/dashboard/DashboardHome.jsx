import React from 'react';
import Folders from './Folders';
import VideoHome from './videos/VideoHome';

export default function VideoList() {
    return (
        <div>
          
           
            <main className='flex mt-16'>
                <div className='absolute top-32 left-5 folders-component ml-8 mr-8 basis-1/6'>
                    <Folders />
                    <section className='w-52 h-auto bg-new-green' >                       
                    </section>
                </div>
                <VideoHome />
            </main>
        </div>
    )
}
