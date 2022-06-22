import React from 'react';
import "./Left_sidebar.css";
import Button from '../../UI/Button/Button';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import ProfileLink from '../Profile-link/ProfileLink';

const LeftSidebar = () => {
  return (
    <>
      <section className="left-sidebar position-sticky vh-100 col-2 gx-0">
        <Logo/>
        <Navbar/>
        <Button/>
        <ProfileLink/>
      </section>
    </>
  );
};

export default LeftSidebar;