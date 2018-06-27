import { connect } from 'react-redux';

import YesNoButtons from './YesNoButtons';

const mapStateToProps = (state) => {
    return { isHappy: state.dynamic.isHappy }
}

export default connect(mapStateToProps)(YesNoButtons);
