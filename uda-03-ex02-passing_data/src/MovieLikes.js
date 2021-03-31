import React, { Component } from 'react';

export class MovieLikes extends Component {
  render() {
    const movie = this.props.movie;
    const users = this.props.users;
    return (
      <div>
        <h2>{movie.name}</h2>
        <p>Liked By:</p>
        { (users.length)
          ? <ul>{ users.map(o => <li key={o.id}>{o.name}</li>) }</ul> 
          : <p>None of the current users liked this movie</p> }
      </div>
    );
  }
}
