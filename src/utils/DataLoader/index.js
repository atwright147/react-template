import React from 'react';
import { connect } from 'react-redux';

export const DataLoader = (Component, loadingAction = false, errorAction = false, hasChildren = false) => {
    class DataLoadWrapper extends React.Component {
        componentDidMount() {
            if (!(hasChildren && this.props.bodyContent) && loadingAction && typeof loadingAction === 'function') {
                this.props.dispatch(loadingAction(this.props));
            }
        }

        componentDidUpdate() {
            this.componentDidMount();
        }

        componentDidCatch() {
            if (errorAction && typeof errorAction === 'function') {
                this.props.dispatch(errorAction);
            }
        }

        render() {
            const { bodyContent } = this.props;
            if (hasChildren && bodyContent) {
                return bodyContent;
            }
            return Component && <Component {...this.props} />;
        }
    }

    return connect()(DataLoadWrapper);
};
