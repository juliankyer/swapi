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

  it('renders one Controls component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Board').length).toBe(1);
  });

  it('should store films, vehicles, planets, people and clicked in state', () => {
    const wrapper = shallow(<App />);
    let mockState = {
      film: {},
      people: {"results": []},
      vehicles: {"results": []},
      planets: {"results": []},
      peopleClicked: true,
      vehiclesClicked: false,
      planetsClicked: false
    };

    expect(wrapper.state()).toMatchObject(mockState);
  });

  it('should change state when component button is clicked', () => {
    const wrapper = mount(<App />);

    const button = wrapper.find('.planets-button');
    button.simulate('click')

    expect(wrapper.state().planetsClicked).toBe(true);
  });
});
