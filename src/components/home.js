import React, { useState, useEffect } from 'react';
import './home.css';
import Card from './card';
import axios from 'axios';

export default function Home(props) {
    const [heading, setHeading] = useState('');
    const [data, setData] = useState([]);

    useEffect(()=>{
            axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=bf93f00eb71846148eb26500605ea59a")
                .then((res) => {
                    setHeading("General")
                    setData(res.data.articles)
                })
        },[])

    const getGeneralData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=bf93f00eb71846148eb26500605ea59a")
            .then((res) => {
                setHeading("General")
                setData(res.data.articles)
            })
    }
    const getSportsData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=bf93f00eb71846148eb26500605ea59a")
            .then((res) => {
                setHeading("Sports")
                setData(res.data.articles)
            })
    }
    const getScienceData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=bf93f00eb71846148eb26500605ea59a")
            .then((res) => {
                setHeading("Science")
                setData(res.data.articles)
            })
    }
    const getEntertainmentData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=bf93f00eb71846148eb26500605ea59a")
            .then((res) => {
                setHeading("Entertainment")
                setData(res.data.articles)
            })
    }
    const getTechnologyData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=bf93f00eb71846148eb26500605ea59a")
            .then((res) => {
                setHeading("Technology")
                setData(res.data.articles)
            })
    }
    const getBusinessData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bf93f00eb71846148eb26500605ea59a")
            .then((res) => {
                setHeading("Business")
                setData(res.data.articles)
            })
    }
    const getHealthData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=bf93f00eb71846148eb26500605ea59a")
            .then((res) => {
                setHeading("Health")
                setData(res.data.articles)
            })
    }
    const getIndiaData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=bf93f00eb71846148eb26500605ea59a")
            .then((res) => {
                setHeading("India")
                setData(res.data.articles)
            })
    }
    const getUSAData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=bf93f00eb71846148eb26500605ea59a")
            .then((res) => {
                setHeading("USA")
                setData(res.data.articles)
            })
    }
    const getCanadaData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=ca&apiKey=bf93f00eb71846148eb26500605ea59a")
            .then((res) => {
                setHeading("Canada")
                setData(res.data.articles)
            })
    }


    let mapuse = data.map((value, index) => {
        return (<Card
                key={index}
                image={value.urlToImage}
                title={value.title}
                description={value.description}
                url={value.url}
                />

        )
    })


    return (
        <div className='home'>
            <div className='home-child-1'>
                <p className='sidebar-heading'>Category</p>
                <button className='sidebar-btn' onClick={getGeneralData}>General</button>
                <button className='sidebar-btn' onClick={getSportsData}>Sports</button>
                <button className='sidebar-btn' onClick={getScienceData}>Science</button>
                <button className='sidebar-btn' onClick={getEntertainmentData}>Entertainment</button>
                <button className='sidebar-btn' onClick={getTechnologyData}>Technology</button>
                <button className='sidebar-btn' onClick={getBusinessData}>Business</button>
                <button className='sidebar-btn' onClick={getHealthData}>Health</button>
                <div className="sidebar-border">
                    <p className='sidebar-heading'>Country</p>
                </div>
                <button className='sidebar-btn' onClick={getIndiaData}>India</button>
                <button className='sidebar-btn'onClick={getUSAData} >USA</button>
                <button className='sidebar-btn'onClick={getCanadaData} >Canada</button>
            </div >
            <div className='home-child-2' >
                <div className='home-heading'>
                    {heading}
                </div>
                <div>
                    {mapuse}
                </div>
            </div>
        </div>
    )
}