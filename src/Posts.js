import './posts.css';
import Post1 from './Post1.js';
import Post2 from './Post2.js';
import Post3 from './Post3.js';
import Post4 from './Post4.js';
import Post5 from './Post5.js';
import Post6 from './Post6.js';

export default function Posts() {
  return (
    <>
    <div className='posts'>
        <Post1/>
        <Post2/>
        <Post3/>
        <Post4/>
        <Post5/>
        <Post6/>
        
    </div>
    </>
  )
}
