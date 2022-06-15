import Wall from './Wall';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    // console.log(state)
    return {
        postsData: state.profilePage.postsData
    }
}

const WallContainer = connect(mapStateToProps)(Wall)

export default WallContainer;