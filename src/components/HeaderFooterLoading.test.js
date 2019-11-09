import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';

describe('Header component', () => {
  it('renders Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Footer component', () => {
  it('renders Footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Loading component', () => {
  it('renders Loading', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
