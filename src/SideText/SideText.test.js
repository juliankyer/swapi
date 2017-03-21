import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import SideText from './SideText';

describe('SideText', () => {
  const mockFilm = {
    opening_crawl: '',
    title: '',
    release_date: ''
  }

  it('has a div with a className .side-text', () => {

    const wrapper = shallow(<SideText film={mockFilm}/>);

    expect(wrapper.find('.side-text').length).toBe(1);
  });

  it('has three p tags with the class of .film', () => {
    const wrapper = shallow(<SideText film={mockFilm}/>);

    expect(wrapper.find('.film').length).toBe(3);
  });

});
