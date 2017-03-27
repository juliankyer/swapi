import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
  });

  it('renders one Controls component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Controls').length).toBe(1);
  });

  it('renders one SideText component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('SideText').length).toBe(1);
  });

  it('renders one Board component', () => {
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

  it('should only change one state to true when component button is clicked', () => {
    const wrapper = mount(<App />);

    const planetButton = wrapper.find('.planets-button');
    planetButton.simulate('click')

    expect(wrapper.state().planetsClicked).toBe(true);
    expect(wrapper.state().vehiclesClicked).toBe(false);
    expect(wrapper.state().peopleClicked).toBe(false);

    const vehicleButton = wrapper.find('.vehicles-button');
    vehicleButton.simulate('click')

    expect(wrapper.state().vehiclesClicked).toBe(true);
    expect(wrapper.state().planetsClicked).toBe(false);
    expect(wrapper.state().peopleClicked).toBe(false);
  });


  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);

    expect(App.prototype.componentDidMount).toHaveProperty('callCount', 1);
    App.prototype.componentDidMount.restore();
  });
});
