import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlbumCard from '../components/Album-Card';
import { getAlbums } from '../services/artist-api';
import styles from './Album-Deck.css';

export default class AlbumDeck extends Component {
  state = {
    albums: [],
    name: '',
    page: 1
  }

  componentDidMount() {
    this.getReleases(this.state.page);
  }

  handleBack = () => {
    const newPage = Math.max(1, this.state.page - 1);
    this.getReleases(newPage);
    this.setState({ page: newPage });
  }

  handleNext = () => {
    this.getReleases(this.state.page + 1);
    this.setState({ page: this.state.page + 1 });
  }

  getReleases = page => {
    getAlbums(this.props.match.params.id, page)
      .then(({ releases }) => {
        this.setState({ albums: releases });
      });
  }

  render() {

    const albumCards = this.state.albums.map(album => {
      return (
        <li key={album.id}>
          <AlbumCard 
            artist={this.props.match.params.artist} 
            album={album.title} 
            album_id={album.id} 
          />
        </li>
      );
    });

    return (
      <section className={styles.AlbumDeck}>
        <button onClick={this.handleBack}>Back</button>
        <h2>{this.state.name}</h2>
        <ul>
          {albumCards}
        </ul>
        <button onClick={this.handleNext}>Next</button>
      </section>
    );
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

}
