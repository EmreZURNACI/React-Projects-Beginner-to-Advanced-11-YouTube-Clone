import axios from 'axios';
import { useDispatch } from 'react-redux';
import { GetVideos } from '../Features/YoutubeSlice';
export const GetVideosFromApi = async () => {
    const dispatch = useDispatch();
    const options = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/home/',
        params: { hl: 'tr', gl: 'TR' },
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
