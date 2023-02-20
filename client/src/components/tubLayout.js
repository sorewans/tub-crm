import React from 'react';

import { Layout } from 'react-admin';

import tubMenu  from './tubMenu.js';

const tubLayout = props => <Layout {...props} menu={tubMenu} />;

export default tubLayout;