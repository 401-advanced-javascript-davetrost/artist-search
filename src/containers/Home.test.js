import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

import useArtistSearchMock from './use-artist-search';
jest.mock('./use-artist-search', () => ({}));

describe('Home component', () => {

  it('renders the initial state', () => {
    useArtistSearchMock.useArtistSearch = () => ({ 
      data: false, 
      handleSubmit: () => true,
      handleChange: () => true,
    });
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a list of artists', () => {
    useArtistSearchMock.useArtistSearch = () => ({ 
      data: true, 
      artists: ['ABBA', 'Beatles', 'Led Zep', 'MIA'],
      handleSubmit: () => true,
      handleChange: () => true,
    });
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
