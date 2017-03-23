import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import VehicleCard from './VehicleCard';

describe('VehicleCard', () => {

  it.skip('should className of .vehicle-card', () => {
    const wrapper = shallow(<VehicleCard/>);

    expect(wrapper.find('.vehicle-card').length).toBe(1);
  })
});
