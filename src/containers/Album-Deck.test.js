import React from 'react';
import { shallow } from 'enzyme';
import { MemoAlbumDeck } from './Album-Deck';

import reactRouterMock from 'react-router-dom';
jest.mock('react-router-dom', () => ({}));
reactRouterMock.useParams = () => ({ artist: 'Radiohead', id: '1234' });

import useAlbumsMock from './use-albums';
jest.mock('./use-albums', () => ({}));

describe('AlbumDeck component', () => {

  it('renders the loading state', () => {
    useAlbumsMock.useAlbums = () => ({ 
      loading: true, 
      albums: []
    });
    const wrapper = shallow(<MemoAlbumDeck />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a list of albums', () => {
    useAlbumsMock.useAlbums = () => ({ 
      loading: false, 
      albums: [
        { id: '1', title: 'The Bends', imgUrl: 'www.randomimage.com' },
        { id: '2', title: 'Amnesiac', imgUrl: 'www.randomimage.com' },
        { id: '3', title: 'Kid A', imgUrl: 'www.randomimage.com' },
      ]
    });
    const wrapper = shallow(<MemoAlbumDeck />);
    expect(wrapper).toMatchSnapshot();
  });
});
