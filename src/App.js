import   { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom' ;
import Index from "./comp/main";
import User from "./comp/infoUser";

const App = () => {
  return (
        <Router>
          <Routes>
                <Route element={<Index/>} path="/"/>
                <Route element={<User/>} path="/users/:username"/>
          </Routes>
        </Router>
  );
}

export default App;
