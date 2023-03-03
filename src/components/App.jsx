import { Home } from 'pages/Home/Home';
import { UserInfo } from 'pages/UserInfo/UserInfo';
import { useEffect, useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './Header/Header';
import { SearchBar } from './SearchBar/SearchBar';
import { useDispatch } from 'react-redux'
import { fetchUsers } from 'redux/operations';

export const App = () => {
  const [userName, setUserName] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(userName));
  }, [dispatch,userName]);



  const handleSubmitForm = userName => {
    setUserName(userName)
  }


  return (
    <>
      <Header />
      <SearchBar onSubmit={handleSubmitForm}/>
      <Routes>
          <Route index path='*' element={<Home  />} />
          <Route path='/user' element={<UserInfo /> } />
      </Routes>
      <GlobalStyle />
    </>
  );
};
