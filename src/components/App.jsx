import { Home } from 'pages/Home/Home';
import { UserInfo } from 'pages/UserInfo/UserInfo';
import { useEffect, useState } from 'react';
import { Routes,Route } from 'react-router-dom';
// import { userFetch } from 'servises/Fetch';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './Header/Header';
import { SearchBar } from './SearchBar/SearchBar';
import { useDispatch } from 'react-redux'
import { fetchUsers } from 'redux/operations';

export const App = () => {
  const [userName, setUserName] = useState(null);
  // const [data, setData] = useState(null);
  // const [, setiIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(userName));
  }, [dispatch,userName]);

  // useEffect(() => {
  //   if (userName === null) {
  //     return;
  //   } else {
  //     setiIsLoading(true)
  //     userFetch(userName).then(res => {
  //     setData(res.data.items)
  //   }).catch(error => console.error(error.message))
  //     .finally(setiIsLoading(false));
  //   }
    
  // },[userName])


  const handleSubmitForm = userName => {
    setUserName(userName)
  }


  return (
    <>
      <Header />
      <SearchBar onSubmit={handleSubmitForm}/>
      <Routes>
                {/* // users={data} */}
          <Route index path='/' element={<Home  />} />
          <Route path='/user' element={<UserInfo /> } />
      </Routes>
      <GlobalStyle />
    </>
  );
};
