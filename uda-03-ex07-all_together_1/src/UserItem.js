import React from 'react';
import PropTypes from 'prop-types'

export function UserItem(props) {
  return <li>{
    (props.isShowNumGames)
    ? `${props.userName} played ${props.numGames} games`
    : `${props.userName}`}
  </li>
}

UserItem.propTypes = {
  isShowNumGames: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  numGames: PropTypes.number.isRequired
}
