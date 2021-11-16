import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

import MovieDetail from "./components/MovieDetail";

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/:id" children={ <MovieDetail/> } />
                <Route exact path="/" component={ Home } />
            </Switch>
        </BrowserRouter>
    );
}

export default App;