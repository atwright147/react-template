import { connect } from 'react-redux';

import List from './List.js';

const mapStateToProps = (state) => {
    return { list: state.listItems.items }
}

export default connect(mapStateToProps)(List);
