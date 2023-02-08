import './App.css';
import SideNav from './components/SideNav';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AllTodos from './components/AllTodos';
import DashBoard from './components/DashBoard';
import MyCalendar from './components/MyCalendar';
import SmallCalendar from './components/templates/SmallCalendar';
import TopNav from './components/TopNav';
import ChatWindow from './components/ChatWindow';
import {useStateValue} from './StateProvider'
import AuthLogin from './components/templates/AuthLogin';
import { useState } from 'react';

function App() {

  const [{user}, dispatch] = useStateValue();
  // const [user, setUser] = useState(null);
  console.log('inside app above')

  return (
    <Router>
      {!user?(
        <AuthLogin/>
      ):
        <>
        {console.log("inside app")}
        <div className='flex bg-[#f9f9f9] h-[100vh]'>
          <SideNav/> 

          <div className='flex-1 mr-4'>
            <TopNav/>

            <Routes>
              <Route path= '/' element={<DashBoard/>}/>
              <Route path='/mytasks' element={<AllTodos/>}/>
              <Route path='/mycalendar' element={<SmallCalendar/>}/>    
              <Route path='/channels/:channelID' element={<ChatWindow/>}/>      
          
              </Routes>
          </div>


        </div>
        </>
       }
    </Router>
  );
}

export default App;
