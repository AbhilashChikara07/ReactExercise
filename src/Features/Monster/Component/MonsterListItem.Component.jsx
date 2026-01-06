import React from "react";
import "./StyleCss/MonsterListStyle.css";
import AppNetworkImage from "./AppNetworkImage.jsx";


/*{ Class Base Component }*/

// class MonsterListItemComponent extends React.Component {
//     render() {
//         const { usersAray } = this.props; // Use props here
//         return (
//             <div className="monsterListConatainerStyle">
//                 {usersAray.map((user) => (
//                     <div key={user.id} className="monsterCard">
//                         <h1 className="monsterCardText">{user.username}</h1>
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }

// export default MonsterListItemComponent;

/*{ Function Base Component }*/
function MonsterListItemComponent(props) {
    const { usersAray } = props;

    return (
        <div className="monsterListConatainerStyle">
            {usersAray.map((user) => (
                <div key={user.id} className="monsterCard">
                    <div className="monsterImageWrapper">
                        <AppNetworkImage
                            imageUrl={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                            fit="cover"
                        />
                        <h1 className="monsterCardText">
                            {user.username}
                        </h1>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MonsterListItemComponent;