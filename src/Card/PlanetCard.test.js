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

  it('should className of .planet-card', () => {
    const wrapper = shallow(<PlanetCard planetsInfo={ mockData }/>);

    expect(wrapper.find('.planet-card').length).toBe(1);
  })

  it('should render five p tags and one button', () => {
    const wrapper = shallow(<PlanetCard planetsInfo={ mockData }/>);

    expect(wrapper.find('p').length).toBe(5);
    expect(wrapper.find('button').length).toBe(1);
  })

  xit('toggleFavorite is called on click of fav button', () => {
    const mockClick = jest.fn()
    const wrapper = shallow(<PlanetCard planetInfo={ mockData }
                                        toggleFavorite={ mockClick }
                                        />);

    const favButton = wrapper.find('.fav');
    favButton.simulate('click');

    expect(mockClick).toHaveBeenCalled();
  });
});
