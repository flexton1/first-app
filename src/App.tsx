import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Greetings from './components/WishMessage';
import LoginForm from './components/loginForm';
import UserList from './components/UserList';
import UserList2 from './components/UserList2';
import Navbar from './components/navbar';
import {Routes, Route, Navigate} from 'react-router-dom';
import UserDetails from './components/UserDetails';
import About from './components/About';


function App() {
  return (
    <React.Fragment>

      <Navbar />

     <Routes>

    <Route path={'/'} element={<Navigate to={'/contacts/list'}/>} />
    <Route path={'/contacts/list'} element={<UserList2 />}/>
    
    <Route path={'/contacts/:id'} element={<UserDetails />}/>

    <Route path={'/about'} element={<About />}/>
     </Routes>
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      {/* <div className="container mt-3">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold text-success">App Component</p>
              <p className="fst-italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, sed. Hic accusamus perferendis nemo? Sunt ab accusamus nulla? Sit, aspernatur voluptatem voluptas fugiat odio facilis, velit sed alias totam explicabo aliquam ad numquam error!</p>
              <button className='btn btn-success btn-sm'>
                <i className='fa fa-book mr-1'/>Read more</button>
            </div>
          </div>




        <div className="row">
          <div className="col">
            <UserList2 />
          </div>
        </div> */}






















          {/* <div className="row">
            <div className="col">
              <UserList />
            </div>
          </div> */}







        {/* <div className="row">
          <div className="col">
            <Counter />
          </div>
        </div>

      <div className="row">
        <div className="col">
          <Greetings />
        </div>
      </div> */}

{/* <div className="row">
  <div className="col">
    <LoginForm />
  </div>
</div> */}


        {/* </div>
      </div> */}
    </React.Fragment>
  );
}

export default App;
