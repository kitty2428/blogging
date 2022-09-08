import { NavLink } from 'react-router-dom';
import './Post.css';
import Postimg from './community.jpg';

export default function Post() {
  return (
   <>
    <div className='post'>
<img className='postimg' src={Postimg} alt='postImage'/>
<NavLink to='singlepost'></NavLink>
   <div className='postinfo'>
   <div className='postcats'>
    <span className='postcat'>Community</span>
    <span className='postcat'>Social</span>
   </div>
   <span className='posttitle'>
   Lorem ipsum dolor sit amet
   </span>
<hr/>
<span className='postdate'>15 mins ago</span>
    </div>
    </div>
   </>
  )
}