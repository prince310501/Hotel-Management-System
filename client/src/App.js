import React from 'react'
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/screen/Home'
import ContactUs from './components/screen/ContactUs'
import SignUp from './components/screen/SignUp';
import Login from './components/screen/Login';
import Detail from './components/screen/Detail';
import AllReviews from './components/screen/AllReviews';
import AllBlogs from './components/screen/AllBlogs';
import Facility from './components/screen/Facility';
import BookForm from './components/screen/BookForm'
import AddReview from './components/screen/AddReview'
import AddBlog from './components/screen/AddBlog'
import Bill from './components/screen/Bill'
import Customer from './components/screen/Customer';
import MyBlogs from './components/screen/MyBlogs'
import MyReviews from './components/screen/MyReviews'
import Edit from './components/screen/Edit'
import Profile from './components/screen/Profile'
import History from './components/screen/History'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/ContactUs' component={ContactUs}/>
          <Route path='/Facility' component={Facility}/>
          <Route path='/Login' component={Login}/>  
          <Route path='/Signup' component={SignUp}/>
          <Route path='/Detail' component={Detail}/>
          <Route path='/AllReviews' component={AllReviews}/>
          <Route path='/AllBlogs' component={AllBlogs}/>
          <Route path='/BookForm' component={BookForm}/>
          <Route path='/AddReview' component={AddReview}/>
          <Route path='/AddBlog' component={AddBlog}/>
          <Route path='/Bill/:bookid' component={Bill}/>
          <Route path='/Customer' component={Customer}/>
          <Route path='/MyBlogs' component={MyBlogs} />
          <Route path='/MyReviews' component={MyReviews} />
          <Route path='/Profile' component={Profile} />
          <Route path='/History' component={History} />
          <Route path='/Edit/:id' component={Edit} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
