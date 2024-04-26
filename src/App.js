import { Routes, Route } from 'react-router-dom'
import AuthRootComponent from './components/auth/AuthRootComponent';
import PrivateRoute from './utils/router/PrivateRoute';
import MainPage from './components/mainPage/MainPage';
import Pipa from './Pipa'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<MainPage />} />
        </Route>
        <Route path='/pipa' element={<Pipa />} />
        <Route path='login' element={<AuthRootComponent />} />
        <Route path='register' element={<AuthRootComponent />} />
      </Routes>
    </div>
  );
}

export default App;
