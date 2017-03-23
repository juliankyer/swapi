import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Board from './Board';

describe('Board', () => {

  it.skip('should className of .board', () => {
    const wrapper = mount(<Board/>);

    expect(wrapper.find('PersonCard').length).toBe(10);
  })

  it.skip('should className of .board', () => {
    const wrapper = mount(<Board/>);

    expect(wrapper.find('VehicleCard').length).toBe(10);
  })

  it.skip('should className of .board', () => {
    const wrapper = mount(<Board/>);

    expect(wrapper.find('PlanetCard').length).toBe(10);
  })

  it.skip('should have 10 PersonCard components', () => {
    const wrapper = mount(<Board/>);

    expect(wrapper.find('.board').length).toBe(1);
  })
});
