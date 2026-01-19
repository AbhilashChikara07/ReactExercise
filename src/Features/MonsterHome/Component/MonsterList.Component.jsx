import React from "react";

import MonsterListItemComponent from "./MonsterListItem.Component.jsx";
import MosterSearchItemComponent from "./MonsterSearchItem.Component.jsx";
import { useSelector } from "react-redux";



/*{ClassBase Component}*/
// class MonsterListComponent extends React.Component {
//     state = {
//         usersAray: [],
//         searchText: "",
//     };

//     componentDidMount() {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((response) => response.json())
//             .then((data) => this.setState({ usersAray: data }));
//     }


//     onSearchChange = (event) => {
//         const searchText = event.target.value.toLowerCase();
//         this.setState({ searchText });
//     };

//     render() {
//         const { usersAray, searchText } = this.state;
//         const filteredUsers = usersAray.filter((user) =>
//             user.username.toLowerCase().includes(searchText)
//         );

//         this.state.usersAray = filteredUsers;
//         return (
//             <>
//                 {/* SearchBox */}
//                 <div className="searchWrapper">
//                     <div className="searchBoxContainer">
//                         <input
//                             type="text"
//                             placeholder="Search monsters..."
//                             className="searchBoxInput"
//                             onChange={this.onSearchChange}
//                         />
//                         <span className="searchIcon">🔍</span>
//                     </div>
//                 </div>

//                 {/* MonsterList */}
//                 <MonsterListItemComponent usersAray={this.state.usersAray} />
//             </>
//         );
//     }
// }

// export default MonsterListComponent;



const MonsterList = ({ usersAray, searchText, onSearchChange }) => {
    console.log({ usersAray, searchText, onSearchChange })
    const user = useSelector((state) => state.auth.user);
    const filteredUsers = usersAray.filter((user) =>
        user.username.toLowerCase().includes(searchText)
    );

    return (
        <>
            {/* SearchBox */}


            <h1>Welcome, {user ? user.email : "Guest"}!</h1>

            <MosterSearchItemComponent
                onSearchChange={onSearchChange}
                searchText={searchText}
            />

            {/* MonsterList */}
            <MonsterListItemComponent usersAray={filteredUsers} />
        </>
    );
};

export default MonsterList;