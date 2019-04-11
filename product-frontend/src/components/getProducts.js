import React from "react";
import axios from "axios";

class GetProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    baseURL = "http://localhost:4000/api/products";

    getProducts = () => {
        axios.get(this.baseURL).then(response => {
            this.setState({ products: response.data });
        });
    };

    componentDidMount() {
        this.getProducts();
    }

    handleDelete = id => {
        axios
            .delete(this.baseURL + "/" + id)
            .then(response => {
                this.getProducts();
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Products</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Product ID</td>
                            <td>Product Name</td>
                            <td>Product Price</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((product, i) => {
                            return (
                                <tr key={product._id}>
                                    <td>{i + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button
                                            onClick={() => this.handleDelete(product._id)}
                                            className="btn btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default GetProducts;
