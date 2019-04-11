import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1 className="text-center text-success">Home Page</h1>
                <img
                    className="mx-auto d-block"
                    src={require("./download.jfif")}
                    alt="Not found!"
                />
            </div>
        );
    }
}

export default Home;
