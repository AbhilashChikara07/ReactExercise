import React from "react";
import "../StyleCss/MonsterListStyle.css";
import MonsterListItemComponent from "./MonsterListItem.Component";
import MosterSearchItemComponent from "./MonsterSearchItem.Component";

class MonsterListComponent extends React.Component {
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
        const { usersAray, searchText } = this.state;
        const filteredUsers = usersAray.filter((user) =>
            user.username.toLowerCase().includes(searchText)
        );
        return (
            <>
                {/* SearchBox */}
                <MosterSearchItemComponent onSearchChange={this.onSearchChange} />

                {/* MonsterList */}
                <MonsterListItemComponent usersAray={filteredUsers} />
            </>
        );
    }
}

export default MonsterListComponent;