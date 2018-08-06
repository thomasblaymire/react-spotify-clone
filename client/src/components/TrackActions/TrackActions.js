import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ToolTip = styled.div`
  padding: 1rem;
  outline: none;
`;

const ActionItemsList = styled.ul`
  list-style-type: none;
`;

const AcionItemsListItem = styled.li`
  text-decoration: none;
  font-size: 1.4rem;
  padding-bottom: 2rem;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const trackActions = props => {
  return (
    <ToolTip>
      <ActionItemsList>
        <AcionItemsListItem>
          <Link
            to={'artist/'}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Add to Queue
          </Link>
        </AcionItemsListItem>
        <AcionItemsListItem>Go To Artist</AcionItemsListItem>
        <AcionItemsListItem>Go To Album</AcionItemsListItem>
        <AcionItemsListItem>Save to Your Library</AcionItemsListItem>
        <AcionItemsListItem>Add to Playlist</AcionItemsListItem>
        <AcionItemsListItem>Suggest an Edit</AcionItemsListItem>
        <AcionItemsListItem>Share</AcionItemsListItem>
      </ActionItemsList>
    </ToolTip>
  );
};

export default trackActions;
