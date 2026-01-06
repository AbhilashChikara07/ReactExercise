import React from "react";
import "../StyleCss/MonsterListStyle.css";

class MonsterListComponent extends React.Component {
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
            <>
                {/* SearchBox */}
                <div className="searchWrapper">
                    <div className="searchBoxContainer">
                        <input
                            type="text"
                            placeholder="Search monsters..."
                            className="searchBoxInput"
                        />
                        <span className="searchIcon">🔍</span>
                    </div>
                </div>

                {/* MonsterList */}
                <div className="monsterListConatainerStyle">
                    {this.state.usersAray.map((user) => (
                        <div key={user.id} className="monsterCard">
                            <h1 className="monsterCardText">{user.username}</h1>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default MonsterListComponent;