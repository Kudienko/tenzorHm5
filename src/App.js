import { Routes, Route } from "react-router-dom";
import AuthRootComponent from "./components/auth/AuthRootComponent";
import PrivateRoute from "./utils/router/PrivateRoute";
import MainPage from "./components/mainPage/MainPage";
import Pipa from "./Pipa";
import ListItem from './components/mainPage/listItem/ListItem'
import SearchItem from "./components/mainPage/searchItem/SearchItem";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<MainPage />} />
        </Route>
        <Route exact path='/kik' element={<SearchItem />} />
        <Route exact path='/list' element={<ListItem />} />
        <Route exact path="/pipa" element={<Pipa />} />
        <Route exact path="login" element={<AuthRootComponent />} />
        <Route exact path="register" element={<AuthRootComponent />} />
      </Routes>
    </div>
  );
}

export default App;
