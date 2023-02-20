import React from 'react';
import { Menu } from 'react-admin';

const tubMenu = () => {
 return (<Menu>
          <Menu.DashboardItem />
          <Menu.ResourceItem name="clients" />
        </Menu>)
};

export default tubMenu;