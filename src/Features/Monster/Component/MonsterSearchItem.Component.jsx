import React from "react";
import "./StyleCss/MonsterListStyle.css";


/*{ Class Base Component }*/
// class MosterSearchItemComponent extends React.Component {
//     render() {
//         const { onSearchChange, searchText } = this.props; // destructure from props

//         return (
//             <div className="searchWrapper">
//                 <div className="searchBoxContainer">
//                     <input
//                         type="text"
//                         placeholder="Search monsters..."
//                         className="searchBoxInput"
//                         value={searchText}
//                         onChange={onSearchChange}
//                     />
//                     <span className="searchIcon">🔍</span>
//                 </div>
//             </div>
//         );
//     }
// }

// export default MosterSearchItemComponent;

/*{ Functional Component }*/
function MosterSearchItemComponent(props) {
    const { onSearchChange } = props;

    return (
        <div className="searchWrapper">
            <div className="searchBoxContainer">
                <input
                    type="text"
                    placeholder="Search monsters..."
                    className="searchBoxInput"
                    onChange={onSearchChange}
                />
                <span className="searchIcon">🔍</span>
            </div>
        </div>
    );
}

export default MosterSearchItemComponent;