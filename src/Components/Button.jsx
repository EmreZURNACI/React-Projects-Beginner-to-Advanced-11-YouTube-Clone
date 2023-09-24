import React from 'react'
import axios from 'axios';
import { GetVideos } from '../Features/YoutubeSlice'
import { useDispatch } from 'react-redux';
function Button({ title }) {
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const options = {
            method: 'GET',
            url: 'https://youtube138.p.rapidapi.com/search/',
            params: {
                q: e.target.name,
                hl: 'tr',
                gl: 'TR'
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_APIURL,
                'X-RapidAPI-Host': process.env.REACT_APP_APIHOST
            }
        };
        try {
            const response = await axios.request(options);
            dispatch(GetVideos(response.data.contents));

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <button onClick={(e) => handleSubmit(e)} type='submit' name={title} className="bg-272727 hover:opacity-90 text-white  py-2 px-4 rounded-lg text-lg font-normal whitespace-nowrap">
            {title}
        </button>
    )
}

export default Button