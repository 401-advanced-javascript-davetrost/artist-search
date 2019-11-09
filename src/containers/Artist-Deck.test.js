import React from 'react';
import { shallow } from 'enzyme';
import { MemoArtistDeck } from './Artist-Deck';

describe('Artist Deck component', () => {

  it('renders a list of artists', () => {
    const backFunc = jest.fn();
    const nextFunc = jest.fn();  
    const wrapper = shallow(<MemoArtistDeck 
      artists={[
        { id: '1', name: 'Hanky' },
        { id: '2', name: 'Panky' },
      ]}
      handleBack={backFunc}
      handleNext={nextFunc}
    />);
    expect(wrapper).toMatchSnapshot();

    wrapper.find('button[name="back"]').simulate('click');
    expect(backFunc).toHaveBeenCalledTimes(1);
    wrapper.find('button[name="next"]').simulate('click');
    expect(nextFunc).toHaveBeenCalledTimes(1);
  });
});
