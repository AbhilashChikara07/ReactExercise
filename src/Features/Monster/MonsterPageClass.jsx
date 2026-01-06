import React from "react";
import MonsterListComponent from "./Component/MonsterList.jsx";

class MonsterPageClass extends React.Component {

    state = {
        usersAray: [],
        searchText: "",
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => this.setState({ usersAray: data }));
    }

    onSearchChange = (event) => {
        const searchText = event.target.value.toLowerCase();
        this.setState({ searchText });
    };

    render() {
        return (
            <div>
                <MonsterListComponent usersAray={this.state.usersAray} searchText={this.state.searchText} onSearchChange={this.onSearchChange} />
            </div>
        );
    }
}

export default MonsterPageClass;