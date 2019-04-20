import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

// Make useful functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.expect = expect;
global.sinon = sinon;
global.React = React;

// Fail tests on any warning
// console.error = message => {
//     throw new Error(message);
// };

global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};
