import { Home } from 'pages/Home/Home';
import { NotFound } from 'pages/NotFound';
import { RepoInfo } from 'pages/RepoInfo/RepoInfo';
import { UserInfo } from 'pages/UserInfo/UserInfo';
import { useEffect, useState } from 'react';

import { Routes,Route,NavLink } from 'react-router-dom';
import { userFetch } from 'servises/Fetch';

import { GlobalStyle } from './GlobalStyle';
import { Loader } from './Loader/Loader';
import { SearchBar } from './SearchBar/SearchBar';



export const App = () => {
  const [userName, setUserName] = useState(null);
  const [data, setData] = useState(null);
  const [, setIsLoading] = useState(false);



  useEffect(() => {
    if (userName === null) {
      return;
    } else {
      userFetch(userName).then(res => {
      setData(res.data.items)
    }).catch(error => console.error(error.message))
      .finally(setIsLoading(false));
    }
    
  },[userName])


  const handleSubmitForm = userName => {

    setUserName(userName)
  }


  // console.log(data)

  return (
    <>
      
      <header>
        <nav>
          <NavLink  to='/' end>Home</NavLink>
          <NavLink to='/user'>User</NavLink>
          <NavLink to='/repo'>Repository</NavLink>
        </nav>
        <SearchBar onSubmit={handleSubmitForm} />
      </header>

      <Loader />

      <Routes>
        <Route index path="/" element={<Home users={data} />} />
        <Route path='/user' element={<UserInfo />} />
        <Route path='/repo' element={<RepoInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
