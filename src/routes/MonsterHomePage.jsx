import React from "react";

import {MonsterRepository} from "../data/repository/MonsterRepository.js";
import MonsterList from "../Features/MonsterHome/Component/MonsterList.Component.jsx";


class MonsterPageClass extends React.Component {
    state = {
        usersAray: [],
        searchText: "",
    };

    componentDidMount() {
        this.loadMonsters();
    }

    loadMonsters = async () => {
        try {
            const data = await MonsterRepository.getMonsters();
            this.setState({ usersAray: data });
        } catch (error) {
            console.error("Failed to load monsters", error);
        }
    };

    onSearchChange = (event) => {
        this.setState({ searchText: event.target.value.toLowerCase() });
    };

    render() {
        const { usersAray, searchText } = this.state;

        return (
            <MonsterList
                usersAray={usersAray}
                searchText={searchText}
                onSearchChange={this.onSearchChange}
            />
        );
    }
}

export default MonsterPageClass;