import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('App component', () => {
  const clickFunc = jest.fn();
  const typingFunc = jest.fn();

  it('renders App', () => {
    const wrapper = shallow(<Search 
      handleSubmit={clickFunc}
      handleChange={typingFunc}
    />);
    expect(wrapper).toMatchSnapshot();

    wrapper.find('input').simulate('change');
    expect(typingFunc).toHaveBeenCalledTimes(1);
    wrapper.find('input').simulate('change');
    expect(typingFunc).toHaveBeenCalledTimes(2);

    wrapper.find('form').simulate('submit');
    expect(clickFunc).toHaveBeenCalledTimes(1);
  });
});
