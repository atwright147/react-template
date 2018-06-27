import { connect } from 'react-redux';

import FilteredSelect from './FilteredSelect';

const mapStateToProps = (state) => {
    return { filter: state.dynamic.filter }
}

export default connect(mapStateToProps)(FilteredSelect);
