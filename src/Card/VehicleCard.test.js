import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import VehicleCard from './VehicleCard';

describe('VehicleCard', () => {
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

  it('should className of .vehicle-card', () => {
    const wrapper = shallow(<VehicleCard vehiclesInfo={ mockData }/>);

    expect(wrapper.find('.vehicle-card').length).toBe(1);
  })

  it('should render four p tags and one button', () => {
    const wrapper = shallow(<VehicleCard vehiclesInfo={ mockData }/>);

    expect(wrapper.find('p').length).toBe(4);
    expect(wrapper.find('button').length).toBe(1);
  });

  xit('toggleFavorite is called on click of fav button', () => {
    const mockClick = jest.fn()
    const wrapper = mount(<VehicleCard vehiclesInfo={ mockData }
                                         toggleFavorite={ mockClick }
                                         />);

    const favButton = wrapper.find('.fav');
    favButton.simulate('click');

    expect(mockClick).toHaveBeenCalled();
  });
});
