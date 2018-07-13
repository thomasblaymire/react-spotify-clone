import React from 'react';
import styled from 'styled-components';
import media from '../../helpers/media';
import appHeader from '../../assets/spotify.png';

const Sidebar = styled.div`
  height: 100%;
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 3rem;
  background: #fff;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const SidebarSection = styled.div`
  margin-top: 5rem;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding-top: 3rem;
`;

const SidebarMenuItem = styled.li`
  margin-bottom: 3rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: #acacac;
`;

const SidebarLogo = styled.img`
  width: 150px;
  display: flex;
  margin: 0 auto;
`;

const SidebarTitle = styled.h3``;

const sidebar = props => {
  return (
    <Sidebar>
      <SidebarLogo src={appHeader} />
      {props.children}
      <SidebarSection>
        <SidebarTitle>Browse Music</SidebarTitle>
        <SidebarMenu>
          <SidebarMenuItem>Discover</SidebarMenuItem>
          <SidebarMenuItem>Around Me</SidebarMenuItem>
          <SidebarMenuItem>Turn The Tables</SidebarMenuItem>
          <SidebarMenuItem>CO Play</SidebarMenuItem>
          <SidebarMenuItem>Daily Digest</SidebarMenuItem>
        </SidebarMenu>
      </SidebarSection>
    </Sidebar>
  );
};

export default sidebar;
