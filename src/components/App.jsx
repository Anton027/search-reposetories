import { Home } from 'pages/Home/Home';
import { NotFound } from 'pages/NotFound';
import { RepoInfo } from 'pages/RepoInfo/RepoInfo';
import { UserInfo } from 'pages/UserInfo/UserInfo';
import { useEffect, useState } from 'react';

import { Routes,Route,NavLink } from 'react-router-dom';
import { repoFetch } from 'servises/Fetch';

import { GlobalStyle } from './GlobalStyle';
import { SearchBar } from './SearchBar/SearchBar';



export const App = () => {
  const [repoName, setRepoName] = useState('');
  const [data, setData] = useState({});
  const [, setIsLoading] = useState(false);


  useEffect(() => {
    if (!repoName) {
      return;
    }
    repoFetch(repoName).then(res => {
      setData(res.data)
    }).catch(error => console.error(error.message))
      .finally(setIsLoading(false));
  },[repoName])

  const handleSubmitForm = repoName => (
    setRepoName(repoName)
  ) 
  console.log(data)

  return (
    <>
      <header>
        <nav>
          <NavLink to='/' end>Home</NavLink>
          <NavLink to='/user'>User</NavLink>
          <NavLink to='/repo'>Repository</NavLink>
        </nav>
        <SearchBar onSubmit={handleSubmitForm} />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/user' element={<UserInfo />} />
        <Route path='/repo' element={<RepoInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
