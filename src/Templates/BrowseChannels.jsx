import React from 'react'

function BrowseChannels() {
    return (
        <div className='py-4 px-2'>
            <ul>
                <li className='py-1 px-3 rounded-xl hover-bg-3f3f3f mb-0.5'>
                    <a href="#/" className='flex justify-start gap-5 items-center'>
                        <svg height="24" viewBox="0 0 24 24" width="24" focusable="false" className='pointer-events-none block w-8 h-8' fill='white'><path d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4v2zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path></svg>
                        <span className='text-white'>Browse channels</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default BrowseChannels