import React from 'react';
import { shallow } from 'enzyme';
import TrackDeck from './Track-Deck';

import reactRouterMock from 'react-router-dom';
jest.mock('react-router-dom', () => ({}));
reactRouterMock.useParams = () => ({ id: '1234', artist: 'Grateful Dead', album: 'American Beauty' });

import useTracksMock from './use-tracks';
jest.mock('./use-tracks', () => ({}));

describe('Track Deck component', () => {

  it('renders the loading state', () => {
    useTracksMock.useTracks = () => ({ 
      loading: true,
      tracks: []
    });
    const wrapper = shallow(<TrackDeck />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a list of tracks', () => {
    useTracksMock.useTracks = () => ({ 
      loading: false, 
      tracks: [
        { id: '1', title: 'Box of Rain' },
        { id: '2', title: 'Friend of the Devil' },
        { id: '3', title: 'Attics of My Life' },
      ]
    });
    const wrapper = shallow(<TrackDeck />);
    expect(wrapper).toMatchSnapshot();
  });
});
