import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

import List from './List.js';

class ListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { list: {} };
    }

    // componentDidMount() {
    //     axios
    //         .get('http://localhost:8882/api/lists/1')
    //         .then((res) => {
    //             this.setState({
    //                 'list': res.data
    //             });
    //         })
    //         .catch((err) => {
    //             console.error(err);  // eslint-disable-line no-console
    //         })
    // }

    render() {
        return <List items={this.props.list} />
    }
}

const mapStateToProps = (state) => {
    return { list: state.listItems.items }
}
export default connect(mapStateToProps)(ListContainer);

// export default ListContainer;
