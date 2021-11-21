import React, { useContext } from 'react'  
import { Route, Routes, Redirect } from 'react-router-dom';
import { AuthContext } from '../context';
import About from '../pages/About';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';
import { privateRoutes, publicRoutes } from '../router';
import Loader from './UI/Loader/Loader';

const AppRouter = () => { 
  const {isAuth, setISAuth, isLoading} = useContext(AuthContext)
  console.log(isAuth)

  if (isLoading) {
    return <Loader />
  }

    return (
      isAuth
      ?
      <Routes>
          {privateRoutes.map((route, index) => 
            <Route key={index}
              element={route.component}
              path={route.path}
              exact={route.exact}
              />
          )}         
      </Routes>
      :
      <Routes>
          {publicRoutes.map((route, index) => 
            <Route key={index}
              element={route.component}
              path={route.path}
              exact={route.exact}
              />
          )} 
                 
      </Routes>
        
    )
}

export default AppRouter