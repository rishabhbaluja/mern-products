import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import GetProducts from "./components/getProducts";
import AddProduct from "./components/addProduct";
import Home from "./components/home";
import UpdateProduct from "./components/updateProduct";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Link className="navbar-brand" to="/">
                            Home
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/get">
                                        List all Products
                                    </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/add">
                                        Add new Product
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Switch>
                        <Route exact path="/get" component={GetProducts} />
                        <Route exact path="/add" component={AddProduct} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/update" component={UpdateProduct} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
