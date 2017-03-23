import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import PlanetCard from './PlanetCard';

describe('PlanetCard', () => {
  const mockData =
    { film: {},
       people: { results: [
         { name: "Luke Skywalker" }
       ] },
       vehicles: { results: [
         { name: "Sand Crawler" },
         { name: "Sand Crawler" }
       ] },
       planets: { results:
         [ { name: 'Yavin IV' } ]
       },
       peopleClicked: true,
       vehiclesClicked: false,
       planetsClicked: false
     }

  xit('should className of .planet-card', () => {
    const wrapper = shallow(<PlanetCard planetsInfo={ mockData }/>);

    expect(wrapper.find('.planet-card').length).toBe(1);
  })

  it('should render five p tags and one button', () => {
    const wrapper = shallow(<PlanetCard planetsInfo={ mockData }/>);

    expect(wrapper.find('p').length).toBe(5);
    expect(wrapper.find('button').length).toBe(1);
  })

  xit('toggleFavorite is called on click of fav button', () => {
    const wrapper = shallow(<PlanetCard planetInfo={ mockData }/>);

    const favButton = wrapper.find('.fav');
    favButton.simulate('click');

    expect(wrapper.find('.fav-flag').length).toBe(1);
  });
});
