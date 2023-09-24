import React, { useState } from 'react'
import Button from '../Components/Button'
import { FiChevronRight } from 'react-icons/fi'
import { FiChevronLeft } from 'react-icons/fi'
function Categories() {
    const [visible, setVisible] = useState(false)
    const categories = [
        "All", "Volleyball", "News", "Music", "Television series", "Live", "Sketch comedy", "Sports leagues", "Gaming", "Game shows", "Turkish pop music", "Arabesque", "Camping", "Acoustic guitar", "Folk Music", "Comedy", "Pop Music", "Rock Music", "Recently uploaded"
    ]
    return (
        <div className='categoriess fixed top-70px left-1/6 bg-0f0f0f z-10'>
            <form className='flex gap-4 py-4'>
                {
                    categories.map((category, index) => (
                        <Button key={index} title={category}></Button>
                    ))
                }
            </form>
            <button
                onClick={() => {
                    document.querySelector(".categoriess").removeAttribute("style");
                    document.querySelector(".categoriess").style.right = "35px";
                    const temp = visible === true ? false : true;
                    setVisible(temp)
                }}
                title='Next'
                className={"fixed z-20 top-9-5 bg-0f0f0f hover:bg-gray-400 p-2 rounded-full right-7 shadow-2xl shadow-neutral-800 " + (visible === true && "hidden")}>
                <FiChevronRight className='w-6 h-6'></FiChevronRight>
            </button>
            <button
                onClick={() => {
                    document.querySelector(".categoriess").removeAttribute("style");
                    document.querySelector(".categoriess").style.left = "315px";
                    const temp = visible === true ? false : true;
                    setVisible(temp)
                }}
                title='Previous'
                className={"fixed z-20 top-9-5 bg-0f0f0f hover:bg-gray-400 p-2 rounded-full left-76 shadow-2xl shadow-neutral-800 " + (visible !== true && "hidden")}>
                <FiChevronLeft className='w-6 h-6'></FiChevronLeft>
            </button>
        </div>
    )
}

export default Categories