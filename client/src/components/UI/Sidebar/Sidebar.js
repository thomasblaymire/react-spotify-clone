import React from 'react';
import styled from 'styled-components';
import appHeader from '../../../assets/spotify.png';
import { Link } from 'react-router-dom';

import musicIcon from '../../../assets/music.svg';
import radioIcon from '../../../assets/radio.svg';
import micoIcon from '../../../assets/casette.svg';
import headphonesIcon from '../../../assets/headphones.svg';
import speakerIcon from '../../../assets/volume.svg';

const Sidebar = styled.div`
  height: 100%;
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: -30rem;
  overflow-x: hidden;
  padding-top: 3rem;
  background: #fff;
  padding: 3rem 3rem 0 3rem;

  @media (min-width: 480px) {
    left: 0;
  }
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
  color: #2c3049;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 1rem;
  border-radius: 5px;

  &:hover {
    background: #363636;
    color: #ffffff;
  }
`;

const SidebarLogo = styled.img`
  width: 150px;
  display: flex;
  margin: 0 auto;
`;

const SidebarTitle = styled.h3`
  font-size: 1.6rem;
  color: #2c3049;
`;

const SidebarMenuItemIcon = styled.img`
  width: 28px;
  margin-right: 2rem;
`;

const SidebarMenuLink = styled(Link)`
  text-decoration: none;

  &.active {
    color: black;
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const sidebar = props => {
  return (
    <Sidebar>
      <LogoLink to="/">
        <SidebarLogo src={appHeader} />
      </LogoLink>

      {props.children}
      <SidebarSection>
        <SidebarTitle>Browse Music</SidebarTitle>
        <SidebarMenu>
          <SidebarMenuLink to="/profile">
            <SidebarMenuItem>
              <SidebarMenuItemIcon src={musicIcon} />
              Profile
            </SidebarMenuItem>
          </SidebarMenuLink>
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
