import React from "react";

class Demo extends React.Component {
    state = {
        usersAray: [],
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => this.setState({ usersAray: data }));
    }

    render() {
        return (
            <div>
                <br />
                {this.state.usersAray.map((user) => (
                    <div key={user.id} className="p-3">
                        <h1 className="mb-4 p-4 border rounded shadow text-black">
                            {user.username}
                        </h1>
                    </div>
                ))}
                <br />
            </div>
        );
    }
}

export default Demo;
