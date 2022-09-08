import React from 'react';
import "./About.css";
import Aboutimg from "./about.jpg";

export default function About() {
  return (
    <>
    <div className='wholeabout'>
    <div className='about'>
       <div className='abouttitle'>
       <div className='abouttitlelg'>Our Story ...
        </div>
        </div>
    </div>
    <div className='aboutbgimg'>
    <img className='aboutimg' src={Aboutimg} alt='our story'/>
    <div className='abouttitlesm'> Strong Women Team  ...</div>
    <br/>
    <p className='aboutdescrip'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     
    </p>
    </div>
    </div>
    </>
  )
}
