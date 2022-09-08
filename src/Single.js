import Sidebar from './Sidebar';
import './single.css';
import Singlepost from './Singlepost.js';

export default function Single() {
  return (
    <>
    <div className='single'>
        <Singlepost/>
        <Sidebar/>
    </div>
    </>
  )
}
