import React, { useEffect } from 'react'
import Videos from './Videos'
import Sidebar from "../Templates/Sidebar";
import Categories from '../Templates/Categories'
import axios from 'axios';
import { GetVideos } from '../Features/YoutubeSlice';
import { useDispatch } from 'react-redux';
import { GetVideosFromApi } from '../Services/GetVideosFromApi'
function Home() {
  const dispatch = useDispatch();
  if (localStorage.getItem("key") !== null) {
    const getVideosByKey = async () => {
      const options = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/search/',
        params: {
          q: localStorage.getItem("key"),
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
    getVideosByKey();
    localStorage.clear();
  }
  else {
    GetVideosFromApi();
  }
  useEffect(() => {

  }, [dispatch])
  return (
    <>
      <div className="flex">
        <div className="w-1/6 sidebar">
          <Sidebar />
        </div>
        <div className="w-5/6 ">
          <Categories />
          <Videos />
        </div>
      </div>
    </>
  )
}

export default Home