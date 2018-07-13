import React from 'react';
import styled from 'styled-components';
import media from '../../helpers/media';
import appHeader from '../../assets/spotify.png';

import musicIcon from '../../assets/music.svg';
import radioIcon from '../../assets/radio.svg';
import micoIcon from '../../assets/casette.svg';
import headphonesIcon from '../../assets/headphones.svg';
import speakerIcon from '../../assets/volume.svg';

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
  height: 6rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: #acacac;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SidebarLogo = styled.img`
  width: 150px;
  display: flex;
  margin: 0 auto;
`;

const SidebarTitle = styled.h3``;

const SidebarMenuItemIcon = styled.img`
  width: 28px;
  margin-right: 2rem;
`;

const sidebar = props => {
  return (
    <Sidebar>
      <SidebarLogo src={appHeader} />
      {props.children}
      <SidebarSection>
        <SidebarTitle>Browse Music</SidebarTitle>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuItemIcon src={musicIcon} />
            Profile
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuItemIcon src={radioIcon} />Discover
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuItemIcon src={micoIcon} />Turn The Tables
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuItemIcon src={headphonesIcon} />CO Play
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuItemIcon src={speakerIcon} />Daily Digest
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarSection>
    </Sidebar>
  );
};

export default sidebar;
