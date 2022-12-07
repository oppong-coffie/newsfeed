import React from 'react'
import '../css/Topstories.css'
import storyimg from '../images/storyimg.jpg'
import { Row, Col, Button, Divider } from 'antd';
import worldcup1 from '../images/worldcup1.jpg'
import worldcup2 from '../images/worldcup2.png'
import worldcup4 from '../images/worldcup4.jpg'
import worldcup3 from '../images/worldcup3.webp'
import worldcup5 from '../images/worldcup5.webp'
import worldcup6 from '../images/worldcup6.jpg'
import worldcup7 from '../images/worldcup7.png'
import top2 from '../images/top2.jfif'
import top3 from '../images/top3.webp'
import top8 from '../images/top8.jpg'
import top9 from '../images/top9.jpg'
import top10 from '../images/top10.jpg'
import top11 from '../images/top11.jpg'
import top12 from '../images/top12.JPG'
import corona1 from '../images/corona1.jpg'
import corona2 from '../images/corona2.jpg'
import corona3 from '../images/corona3.jpg'
import corona4 from '../images/corona4.jpg'
import corona5 from '../images/corona5.jpg'
import corona6 from '../images/corona6.jpg'
import sp1 from '../images/sp1.jpg'
import sp2 from '../images/sp2.jpg'
import sp3 from '../images/sp3.png'
import sp4 from '../images/sp4.jpg'
import sp5 from '../images/sp5.jpg'
import sp6 from '../images/sp6.webp'

const Topstories = () => {

  {/*TOP STORIES*/}
  const stories = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: top12,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: top3,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: top8,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: top9,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: top10,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: top11,
    },
  ]


  {/*WORLDCUP STORIES*/}
const worldcup = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
    description: '1st December 2022',
    image: worldcup1,
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
    description: '1st December 2022',
    image: worldcup2,
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
    description: '1st December 2022',
    image: worldcup3,
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
    description: '1st December 2022',
    image: worldcup7,
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
    description: '1st December 2022',
    image: worldcup4,
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
    description: '1st December 2022',
    image: worldcup5,
  },
]



  {/*CORONAVIRUS STORIES*/}
const corona = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
    description: '1st December 2022',
    image: corona1,
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
    description: '1st December 2022',
    image: corona2,
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
    description: '1st December 2022',
    image: corona3,
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
    description: '1st December 2022',
    image: corona4,
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
    description: '1st December 2022',
    image: corona5,
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
    description: '1st December 2022',
    image: corona6,
  },
]



  {/*SPORTS STORIES*/}
const sports = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
    description: '1st December 2022',
    image: sp1,
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
    description: '1st December 2022',
    image: sp6,
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
    description: '1st December 2022',
    image: sp2,
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
    description: '1st December 2022',
    image: sp5,
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
    description: '1st December 2022',
    image: sp3,
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
    description: '1st December 2022',
    image: sp4,
  },
]

  return (
    <div>
        <h1>Top Stories</h1>
        <div className="story1">
            <div className="storyimg"><img src={storyimg} alt="" /></div>
            <div className="storydesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimo ipsam quas ipsum corrupti! Voluptatibus <br></br>
            <small className='topstoriesDate'>1st December, 2022</small>
            </div>
        </div>
    

{/*sub top stories*/}

        <div className="worldcupstory">
        <Row>
        {stories.map((story) => (
          <Col xs={24} xl={8}>
            <div className="story2">
            <div className="substoryimg"><img src={story.image
            } alt="" /></div>
            <div className="storytitle">{story.title}<br></br>
            <small className='topstoriesDate'>{story.description}</small>
            </div>
            </div>
          </Col>
        
        ))}
        </Row>
        <Button type='primary' ghost>Read More...</Button>
        </div>

        <Divider/>



{/*worldcup stories*/}

        <div className="worldcup">
          <h1>WORLD CUP</h1>
          <div className="worldcupstory">
          <Row>
        {worldcup.map((worldcup) => (
          <Col xs={24} xl={8}>
            <div className="story2">
            <div className="substoryimg"><img src={worldcup.image
            } alt="" /></div>
            <div className="storytitle">{worldcup.title}<br></br>
            <small className='topstoriesDate'>{worldcup.description}</small>
            </div>
            </div>
          </Col>
        ))}
        </Row>
        <Button type='primary' ghost>Read More...</Button>
            </div>
            
        </div>
        <Divider/>


{/*CORONAVIRUS stories*/}

        <div className="worldcup">
          <h1> CORONAVIRUS </h1>
          <div className="worldcupstory">
          <Row>
        {corona.map((corona) => (
          <Col xs={24} xl={8}>
            <div className="story2">
            <div className="substoryimg"><img src={corona.image
            } alt="" /></div>
            <div className="storytitle">{corona.title}<br></br>
            <small className='topstoriesDate'>{corona.description}</small>
            </div>
            </div>
          </Col>
        ))}
        </Row>
        <Button type='primary' ghost>Read More...</Button>
            </div>
            
        </div>
        <Divider/>


{/*SPORTS STORIES*/}

        <div className="worldcup">
          <h1> SPORTS NEWS </h1>
          <div className="worldcupstory">
          <Row>
        {sports.map((sports) => (
          <Col xs={24} xl={8}>
            <div className="story2">
            <div className="substoryimg"><img src={sports.image
            } alt="" /></div>
            <div className="storytitle">{sports.title}<br></br>
            <small className='topstoriesDate'>{sports.description}</small>
            </div>
            
            </div>
          </Col>
        ))}
        </Row>
        <Button type='primary' ghost>Read More...</Button>
            </div>
            
        </div>
        <marquee behavior="" direction="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ducimus tempora, magnam dignissimos et doloribus ad consequuntur voluptate deserunt nesciunt excepturi corporis. Odit vel sunt, rerum hic, porro laudantium laborum aliquid totam, temporibus adipisci dignissimos labore eaque? Cum est optio atque, error ex velit repellendus nulla quisquam labore nam incidunt.</marquee>
      
    </div>

  )
}

export default Topstories
