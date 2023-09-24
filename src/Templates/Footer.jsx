import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
function Footer() {
    return (
        <div className='py-4 px-2'>
            <ul>
                <li className='py-1 px-3 mb-0.5'>
                    <div className='gap-2 flex font-medium mb-1'>
                        <a href="/#" className='text-aaa text-xs' >About</a>
                        <a href="/#" className='text-aaa text-xs' >Press</a>
                        <a href="/#" className='text-aaa text-xs' >Copyright</a>
                    </div>
                    <div className='gap-2 flex font-medium mb-1'>
                        <a href="/#" className='text-aaa text-xs' >Contect us</a>
                        <a href="/#" className='text-aaa text-xs' >Creators</a>
                    </div>
                    <div className='gap-2 flex font-medium mb-1'>
                        <a href="/#" className='text-aaa text-xs' >Advertise</a>
                        <a href="/#" className='text-aaa text-xs' >Developers</a>
                    </div>
                </li>
                <li className='py-1 px-3 mb-0.5'>
                    <div className='gap-2 flex font-medium mb-1'>
                        <a href="/#" className='text-aaa text-xs' >Terms</a>
                        <a href="/#" className='text-aaa text-xs' >Privacy</a>
                        <a href="/#" className='text-aaa text-xs' >Policy & Safety</a>
                    </div>
                    <div className='gap-2 flex font-medium mb-1'>
                        <a href="/#" className='text-aaa text-xs' >How YouTube Works</a>
                    </div>
                    <div className='gap-2 flex font-medium mb-1'>
                        <a href="/#" className='text-aaa text-xs' >Test new features</a>
                    </div>
                </li>
                <li className='py-1 px-3 mb-0.5'>
                    <p className='text-xs flex items-center text-717171 gap-0.5'><AiOutlineCopyrightCircle></AiOutlineCopyrightCircle> 2023 Google LLC</p>
                </li>
            </ul>
        </div>
    )
}

export default Footer