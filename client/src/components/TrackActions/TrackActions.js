import React from 'react';
import styled from 'styled-components';
import icons from '../../assets/icons/sprite.svg';

const ToolTip = styled.div`
  padding: 1rem;
  background: #363636;
  width: 350px;
  display: none;
`;

const ActionItemsList = styled.ul`
  list-style-type: none;
`;

const AcionItemsListItem = styled.li`
  text-decoration: none;
  font-size: 1.4rem;
  padding-bottom: 1rem;
  margin-left: 1rem;
  color: #ffffff;

  &:hover {
    text-decoration: underline;
  }
`;

const trackActions = () => {
  return (
    <ToolTip>
      <ActionItemsList>
        <AcionItemsListItem>Add to Queue</AcionItemsListItem>
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
