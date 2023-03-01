import { Home } from 'pages/Home/Home';
import { UserInfo } from 'pages/UserInfo/UserInfo';
import { useEffect, useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import { userFetch } from 'servises/Fetch';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './Header/Header';
import { SearchBar } from './SearchBar/SearchBar';

export const App = () => {
  const [userName, setUserName] = useState(null);
  const [data, setData] = useState(null);
  const [, setiIsLoading] = useState(false);



  useEffect(() => {
    if (userName === null) {
      return;
    } else {
      setiIsLoading(true)
      userFetch(userName).then(res => {
      setData(res.data.items)
    }).catch(error => console.error(error.message))
      .finally(setiIsLoading(false));
    }
    
  },[userName])


  const handleSubmitForm = userName => {
    setUserName(userName)
  }


  return (
    <>
      <Header />
      <SearchBar onSubmit={handleSubmitForm}/>
      <Routes>
          <Route index path='/' element={<Home users={data} />} />
          <Route path='/user' element={<UserInfo /> } />
      </Routes>
      <GlobalStyle />
    </>
  );
};
