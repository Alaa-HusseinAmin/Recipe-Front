import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import { Navbar } from "./components/Navbar.js";
import { Auth } from "./pages/Auth.js";
import { CreateRecipe } from "./pages/CreateRecipe.js";
import { Home } from "./pages/Home.js";
import { SavedRecipes } from './pages/SavedRecipes.js';
function App() {
  return (
    <div className="App">
     <Router>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/CreateRecipe' element={<CreateRecipe/>}/>
        <Route path='/SavedRecipes' element={<SavedRecipes/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
