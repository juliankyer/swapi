import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import PlanetCard from './PlanetCard';

describe('PlanetCard', () => {

  it.skip('should className of .planet-card', () => {
    const wrapper = shallow(<PlanetCard/>);

    expect(wrapper.find('.planet-card').length).toBe(1);
  })
});
