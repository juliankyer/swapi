import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import PersonCard from './PersonCard';

describe('PersonCard', () => {
  const mockData = {
    people: { results: [
      { name: "Luke Skywalker" }
    ] }
  }

  it('should className of .people-card', () => {
    const wrapper = shallow(<PersonCard key={ Date.now() }
                                        peopleInfo={ mockData }
                                        />);

    expect(wrapper.find('.people-card').length).toBe(1);
  });

  it('should render four p tags and one button', () => {
    const wrapper = shallow(<PersonCard key={ Date.now() }
                                        peopleInfo={ mockData }
                                        />);

    expect(wrapper.find('p').length).toBe(4);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('Adds a class of .fav-flag on click of the .fav button', () => {
    const wrapper = mount(<PersonCard peopleInfo={ mockData }/>);

    const favButton = wrapper.find('.fav');
    favButton.simulate('click');

    expect(wrapper.find('.fav-flag').length).toBe(1);
  });
});
