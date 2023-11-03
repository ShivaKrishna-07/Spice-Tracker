import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recipes from "./components/Recipes";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <>
      <Router >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
