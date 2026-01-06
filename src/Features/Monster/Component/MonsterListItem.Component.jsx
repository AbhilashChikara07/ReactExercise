import React from "react";
import "./StyleCss/MonsterListStyle.css";


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
    const { usersAray } = props; // Use props here
    return (
        <div className="monsterListConatainerStyle">
            {usersAray.map((user) => (
                <div key={user.id} className="monsterCard">
                    <h1 className="monsterCardText">{user.username}</h1>
                </div>
            ))}
        </div>
    );
}

export default MonsterListItemComponent;