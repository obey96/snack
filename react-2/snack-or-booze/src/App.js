import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem"; // You can rename this to a more generic name, e.g. ItemDetails
import Drink from "./FoodItem"; // Reuse Snack component for drinks, or create a separate one for Drinks

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getData() {
      // Fetch snacks and drinks
      const snacksData = await SnackOrBoozeApi.getSnacks();
      const drinksData = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacksData);
      setDrinks(drinksData);
      setIsLoading(false);
    }
    getData();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            {/* Home page shows number of snacks and drinks */}
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>

            {/* Snacks page */}
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" type="snacks" />
            </Route>

            {/* Drink page */}
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" type="drinks" />
            </Route>

            {/* Snack details page */}
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>

            {/* Drink details page */}
            <Route path="/drinks/:id">
              <Drink items={drinks} cantFind="/drinks" />
            </Route>

            {/* 404 page for unknown routes */}
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
