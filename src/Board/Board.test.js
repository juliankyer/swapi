import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Board from './Board';

describe('Board', () => {
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

  const mockData2 =
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
       peopleClicked: false,
       vehiclesClicked: true,
       planetsClicked: false
     }

  const mockData3 =
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
       peopleClicked: false,
       vehiclesClicked: false,
       planetsClicked: true
     }


   it('should have a div with a class of .board', () => {
     const wrapper = mount(<Board data={ mockData }/>);

     expect(wrapper.find('.board').length).toBe(1);
   })

  it('should only render whichever component is marked as clicked', () => {
    const wrapper = mount(<Board data={ mockData }/>);

    expect(wrapper.find('PersonCard').length).toBe(1);
    expect(wrapper.find('VehicleCard').length).toBe(0);
    expect(wrapper.find('PlanetCard').length).toBe(0);
  })

  it('should render PersonCard component when peopleClicked is true', () => {
    const wrapper = mount(<Board data={ mockData }/>);

    expect(wrapper.find('PersonCard').length).toBe(1);
  })

  it('should 2 VehicleCard components when vehiclesClicked is true', () => {
    const wrapper = mount(<Board data={ mockData2 }/>);

    expect(wrapper.find('VehicleCard').length).toBe(2);
  })

  xit('should render a PlanetCard component when planetsClicked is true', () => {
    const wrapper = mount(<Board data={ mockData3 }/>);

    expect(wrapper.find('PlanetCard').length).toBe(1);
  })
});
