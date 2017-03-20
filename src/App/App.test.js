import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
  });

  it('renders one Controls component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Controls').length).toBe(1);
  });

  it('renders one Controls component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('SideText').length).toBe(1);
  });

});
