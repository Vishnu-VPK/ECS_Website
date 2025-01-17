import React from 'react'
import CardRayyan from '../CardRayyan/CardRayyan.jsx'
import Footer from '../Footer/Footer.js'
import Navbar from '../Navbar/Navbar.jsx'
import "./developers.css"
import Particle from "../Particle"
const Developers = ({currentUser,setCurrentUser}) => {
  
  const devData = [
  {
    name: "Rayyan Shaikh",
    desig: "Junior Technical Member",
    insta: "link",
    linkedin: "link",
    src:"https://i.ibb.co/q5WX5D2/pfp1.png" 
  },
  {
    name: "Rohan Jha",
    desig: "Junior Technical Member",
    insta: "link",
    linkedin: "link",
    src:"https://i.ibb.co/ZhppwJ8/IMG-20211110-164910.jpg" 
  },
  {
    name: "Vishnu Padmakumar",
    desig: "Junior Technical Member",
    insta: "link",
    linkedin: "link",
    src:"https://i.ibb.co/7zcrkSy/Whats-App-Image-2022-11-03-at-11-31-49-PM.jpg",
  },
  {
    name: "Himangshu Sharma",
    desig: "Junior Design Member",
    insta: "link",
    linkedin: "link",
    src:"https://i.ibb.co/jWk9mkG/IMG-20220225-012129-105.jpg"
  },
  {
    name: "Aryadeep Gogoi",
    desig: "Junior Design Member",
    insta: "link",
    linkedin: "link",
    src:"https://i.ibb.co/jWk9mkG/IMG-20220225-012129-105.jpg"
  },
  {
    name: "Jacinth Mahanta",
    desig: "Junior Design Member",
    insta: "link",
    linkedin: "link",
    src:"https://i.ibb.co/jWk9mkG/IMG-20220225-012129-105.jpg"
  },
  {
    name: "Maharnav",
    desig: "Junior Design Member",
    insta: "link",
    linkedin: "link",
    src:"https://i.ibb.co/jWk9mkG/IMG-20220225-012129-105.jpg"
  }
  ]



  return (
    <>
    <Particle/>
    <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
    <div className="dev-container1"> 
        {devData.map((elem, i) => 
          (<CardRayyan 
          key={i}
          data={elem}

          />)

        )}
        
    </div>
    <Footer/>
    </>
  )
}

export default Developers