import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';

export default function MainNav() {
  return (
    <nav className='MainNav'>
      <img
        className='logo'
        src='https://icon-library.com/images/chatroom-icon/chatroom-icon-24.jpg'
        height='100px'
        width='100px'
        alt='chatroom-logo'
      />
      <ul>
        {MenuItems.map((item, idx) => {
          return (
            <li className='MainNav-item' key={`menuitem ${idx}`}>
              <Link to={item.link} style={{ textDecoration: 'none' }}>
                {item.itemName}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
