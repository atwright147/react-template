import { connect } from 'react-redux';

import { List } from './List';

const mapStateToProps = (state) => {
    return { items: state.listItems }
}

export default connect(mapStateToProps)(List);
