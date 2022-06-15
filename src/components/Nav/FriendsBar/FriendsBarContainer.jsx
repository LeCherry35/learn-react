import FriendsBar from "./FriendsBar";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        friends: state.navData.friends,
    }
}

const FriendsBarContainer = connect(mapStateToProps)(FriendsBar)

export default FriendsBarContainer;