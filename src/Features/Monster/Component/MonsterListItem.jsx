class MonsterListItemComponent extends React.Component {
    render() {
        const { usersAray } = this.props;
        return (
            <div className="monsterListConatainerStyle">
                {this.state.usersAray.map((user) => (
                    <div key={user.id} className="monsterCard">
                        <h1 className="monsterCardText">{user.username}</h1>
                    </div>
                ))}
            </div>
        );
    }
}

export default MonsterListItemComponent;