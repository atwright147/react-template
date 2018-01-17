import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

import List from './List.js';

class ListContainer extends Component {
    render() {
        return <List items={this.props.list} />
    }
}

const mapStateToProps = (state) => {
    return { list: state.listItems.items }
}
export default connect(mapStateToProps)(ListContainer);

// export default ListContainer;
