import * as React from 'react';
import { connect } from 'react-redux';

export interface Props {
    bodyContent: string;
    dispatch: any;
}

export const DataLoader = (Component, loadingAction: (dispatch: any) => void, errorAction: () => () => void, hasChildren = false) => {
    class DataLoadWrapper extends React.Component {
        props: Props;

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
