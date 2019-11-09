import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics';

import reactRouterMock from 'react-router-dom';
jest.mock('react-router-dom', () => ({}));

import useLyricsMock from '../containers/use-lyrics.js';
jest.mock('../containers/use-lyrics.js', () => ({}));

reactRouterMock.useParams = () => ({ artist: 'Tribe Called Qwest', track: 'phony rappers' });

describe('Lyrics component', () => {
  
  it('renders Loading', () => {
    useLyricsMock.useLyrics = () => ({ 
      loading: true 
    });
    const wrapper = shallow(<Lyrics />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('renders Lyrics', () => {
    useLyricsMock.useLyrics = () => ({ 
      loading: false, 
      lyrics: 'Phony rappers. Who do not write. Phony rappers. Who do not excite. Phony rappers. Check it out, aight' 
    });
    const wrapper = shallow(<Lyrics />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Lyrics not found', () => {
    useLyricsMock.useLyrics = () => ({ 
      loading: false,
      lyrics: ''
    });
    const wrapper = shallow(<Lyrics />);
    expect(wrapper).toMatchSnapshot();
  });


});
