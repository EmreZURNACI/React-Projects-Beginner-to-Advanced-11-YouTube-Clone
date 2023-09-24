import React from 'react'

function ListItem({ children }) {
    return (
        <li className='py-1 px-3 rounded-xl hover-bg-3f3f3f mb-0.5'>
            <a href="#/" className='flex justify-start gap-5 items-center'>
                {
                    children
                }
            </a>
        </li>
    )
}

export default ListItem