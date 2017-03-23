import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Controls from './Controls';

describe('Controls', () => {

  it('has a div with a className .controls', () => {
    const wrapper = shallow(<Controls />);

    expect(wrapper.find('.controls').length).toBe(1);
  });

  it('has four buttons', () => {
    const wrapper = shallow(<Controls />);

    expect(wrapper.find('button').length).toBe(4);
  });

  it('handleClick is called on click of button', () => {
    const mockClick = jest.fn()
    const wrapper = shallow(<Controls handleClick={ mockClick }/>);

    const planetButton = wrapper.find('.planets-button');
    planetButton.simulate('click');

    expect(mockClick).toHaveBeenCalled();
  });

  
});
