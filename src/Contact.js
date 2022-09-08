import { NavLink } from "react-router-dom";
import "./Contact.css";
import Sidebar from "./Sidebar";


export default function Contact() {
  return (
    <>
    <div className='contact'>
    <div className='contactelemnt'>
   
        <form className='contform'>
            <label htmlFor='name'> Name</label><br/>
            <input type='text' placeholder='Your name ...' className='contactinput' autofocus={true}/>
<br/>
            <label htmlFor='name'> Email</label><br/>
            <input type='text' placeholder='Your email ...' className='contactinput' />
       <br/>     
            <label htmlFor='name'> Your Name</label><br/>
            <textarea type='text' placeholder='Your name ...' className='contactmsg'/>
            <br/>
            
        </form>
        <button className='contactsubmit'>
                  <NavLink to='/thanks' className='link'>
                  Send
                  </NavLink></button>
    </div>
    <Sidebar/>
    </div>
    </>
  )
}
