import React from "react";
import axios from "axios";
//import { Redirect } from "react-router-dom";

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: ""
        };
    }
    baseURL = "http://localhost:4000/api/products/add";

    handleSubmit = event => {
        event.preventDefault();
        const newProduct = {
            name: this.state.name,
            price: this.state.price
        };
        axios
            .post(this.baseURL, newProduct)
            .then(response => alert("Product successfully added" ));

        this.setState({
            name: "",
            price: ""
        });
        return this.props.history.push("/get");
    };

    handleChangeName = event => {
        this.setState({
            name: event.target.value
        });
    };

    handleChangePrice = event => {
        this.setState({
            price: event.target.value
        });
    };

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Add New Product</h1>
                <form
                    onSubmit={this.handleSubmit}
                    className="form-group offset-lg-4 col-lg-4"
                >
                    <label for="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.handleChangeName}
                    />
                    <label for="price">Price</label>
                    <input
                        type="text"
                        id="price"
                        className="form-control"
                        value={this.state.price}
                        onChange={this.handleChangePrice}
                    />
                    <br />
                    <input
                        type="submit"
                        className="form-control btn btn-info"
                        value="Submit"
                    />
                </form>
            </div>
        );
    }
}

export default AddProduct;
