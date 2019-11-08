import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics';

jest.mock('react-router-dom', () => {
  return {
    useParams: () => ({
      artist: 'Tribe Called Qwest',
      track: 'phony rappers'
    }),
  };
});

describe('Lyrics component', () => {
  it('renders Lyrics not found', () => {
    const wrapper = shallow(<Lyrics />);
    expect(wrapper).toMatchSnapshot();
  });

  jest.mock('../containers/use-lyrics', () => {
    return {
      useLyrics: () => ({ loading: true })
    };
  });  
  
  it('renders Loading', () => {
    const wrapper = shallow(<Lyrics />);
    expect(wrapper).toMatchSnapshot();
  });

  jest.mock('../services/lyrics-api', () => {
    return () => 'phony rappers, who do not write, phony rappers, who do not excite';
  });  

  it('renders Lyrics', () => {
    const wrapper = shallow(<Lyrics />);
    expect(wrapper).toMatchSnapshot();
  });

});
