import React from 'react';
import Bulletin from './Bulletin';
// import Folders from './Folders';
import VideoHome from './videos/VideoHome';

export default function VideoList() {
    const [active, setActive] = ("")
    return (
        <div>
            <main className='flex mt-16'>
                <div className='absolute top-32 left-5 folders-component ml-8 mr-8 mt-8 basis-1/6'>
                    {/* <Folders active= {active} /> */}
                    <Bulletin/>
                    <section className='w-52 h-auto bg-new-green' >                       
                    </section>
                </div>
                <VideoHome active={active} />
            </main>
        </div>
    )
}
