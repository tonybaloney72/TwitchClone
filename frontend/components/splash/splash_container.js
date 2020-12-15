import { connect } from 'react-redux';
import Splash from './splash'

const msp = state => ({
    currentUser: state.entities.users[state.session.currentUser]
})

// const mdp = dispatch => ({
//     logout: () => dispatch(logout())
// })

export default connect(msp, null)(Splash)
