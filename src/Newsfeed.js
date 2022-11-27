import React from 'react'
import './Newsfeed.css'

const topnews = [
    {
      id: 1,
      name: 'Ghana vs Purtugal',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
    {
      id: 2,
      name: 'Man raped his tarnet',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
    {
      id: 3,
      name: 'Student stole gari',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
    {
      id: 4,
      name: 'Mixing gari with salt',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
  ]

const localnews = [
    {
      id: 1,
      name: 'MP got beaten',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
    {
      id: 2,
      name: 'Farmer to cut Cocoa and rubber',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
    {
      id: 3,
      name: 'citrus pounch reaches the public',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
    {
      id: 4,
      name: 'Man killed for rituals',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
  ]

const foreignnews = [
    {
      id: 1,
      name: 'Russia beat Ukrain',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
    {
      id: 2,
      name: 'US finance minister sacked',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
    {
      id: 3,
      name: 'Demonstration against tax',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
    {
      id: 4,
      name: 'Foreign color or local colors',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
  ]

const sportnews = [
    {
      id: 1,
      name: 'Kotoko vs Olympics',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
    {
      id: 2,
      name: 'Milo games in Tepa',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
    {
      id: 3,
      name: 'TTU wins all medals',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
    {
      id: 4,
      name: 'Data from GFA',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
  ]

const businessnews = [
    {
      id: 1,
      name: 'Turning water into wine',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
    {
      id: 2,
      name: 'Fuel to drop by 65%',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
    {
      id: 3,
      name: '2022 Budget read aloud',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
    {
      id: 4,
      name: 'Ghana shutdown new recruitment',
      message: 'Hello World, today is the day of the match between Ghana and Purtugal. The match will be played at 8pm. Please come and support your team. Thank you',
      Date: '23rd November,2022',  
    },
  ]

const Newsfeed = () => {
  return (
    <div>
        
      <p className='newstype'>Top News</p>
      <div className="main">
      {topnews.map((item) => (
        <div key={item.id} className="container">
          <p2 className="topic">{item.name}</p2>
          <p className='message'>{item.message}</p>
          <small className='date'>{item.Date}</small>
          </div>
      ))}
      </div>
      
      <p className='newstype'>Local News</p>
      <div className="main">
      {localnews.map((item) => (
        <div key={item.id} className="container">
          <p2 className="topic">{item.name}</p2>
          <p className='message'>{item.message}</p>
          <small className='date'>{item.Date}</small>
          </div>
      ))}
      </div>
      <p className='newstype'>Foreign News</p>
      <div className="main">
      {foreignnews.map((item) => (
        <div key={item.id} className="container">
          <p2 className="topic">{item.name}</p2>
          <p className='message'>{item.message}</p>
          <small className='date'>{item.Date}</small>
          </div>
      ))}
      </div>
      <p className='newstype'>Sport News</p>
      <div className="main">
      {sportnews.map((item) => (
        <div key={item.id} className="container">
          <p2 className="topic">{item.name}</p2>
          <p className='message'>{item.message}</p>
          <small className='date'>{item.Date}</small>
          </div>
      ))}
      </div>
      <p className='newstype'>Business News</p>
      <div className="main">
      {businessnews.map((item) => (
        <div key={item.id} className="container">
          <p2 className="topic">{item.name}</p2>
          <p className='message'>{item.message}</p>
          <small className='date'>{item.Date}</small>
          </div>
      ))}
      </div>

    </div>
  )
}

export default Newsfeed