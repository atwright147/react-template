import React from 'react';
import { Control, actions } from 'react-redux-form';

const generateClassName = (value, comparitor) => {
    return (`${value}` === `${comparitor}`) ? 'active': '';
};

const onKeyUpHandler = (e) => {
    console.info(e);
}

const YesNoButtonsComponent = ({ model, dispatch, isHappy }) => (
    <div className="yes-no-buttons" onKeyUp={(e) => onKeyUpHandler(e)}>
        <pre>{ model }</pre>
        <button onClick={() => dispatch(actions.change(model, true))}  className={ generateClassName(isHappy, true) }>Yes</button>
        <button onClick={() => dispatch(actions.change(model, false))} className={ generateClassName(isHappy, false) }>No</button>
    </div>
);
  
const YesNoButtons = (props) => (
    <Control
        component={YesNoButtonsComponent}
        // mapProps={{
        //     value: (props) => props.viewValue,
        // }}
        // {...props}
    />
);

export default YesNoButtons;
