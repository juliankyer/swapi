import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import PersonCard from './PersonCard';

describe('PersonCard', () => {

  it.skip('should className of .people-card', () => {
    const wrapper = shallow(<PersonCard/>);

    expect(wrapper.find('.people-card').length).toBe(1);
  })
});
