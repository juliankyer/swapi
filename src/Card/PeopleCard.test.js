import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import PeopleCard from './PeopleCard';

describe('PeopleCard', () => {

  it('should className of .people-card', () => {
    const wrapper = shallow(<PeopleCard/>);

    expect(wrapper.find('.people-card').length).toBe(1)
  })

});
