import { NavLink } from "react-router-dom";
import "./write.css";
import Writeimg from './create.jpg'

export default function Write() {
  return (
    <div className='write'>
        <img className='writeimg' src={Writeimg} alt='write'/>
        <form className='writeform'>
        <div className='writeformgroup'>
           <label htmlFor='fileinput'>
           <i className=" writeicon fa-solid fa-plus"></i>
           </label>
            <input type='file' id='fileinput' />
            <input type='text' placeholder='title' className='writeinput' autofocus={true}/>
            </div>
 
            <div className='writeformgroup'>
                <textarea placeholder='Tel Your story' type='text' className='writetext'></textarea>
                </div>
                <button className='writesubmit'>
                  <NavLink to='thanks' className='link'>
                  Publish
                  </NavLink></button>
        </form>
    </div>
  )
}
