import { connect } from 'react-redux';

import List from './List.js';

const mapStateToProps = (state) => {
    return { items: state.listItems.items }
}

export default connect(mapStateToProps)(List);
