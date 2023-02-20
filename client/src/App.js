import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import ClientList from './components/clientList';
import UserList from './components/userList';
import createClient from './components/createClient';
import Dashboard from './components/dashboard'
import editClient from './components/editClient';
import showClient from './components/showClient';
import TagList from './components/tagList';
import createTag from './components/createTag';
import tubLayout from './components/tubLayout';

const apiURL = "http://localhost:5005";
const dataProvider = jsonServerProvider(apiURL);
function App() {
  return (
    <Admin dataProvider={dataProvider} dashboard={Dashboard} title='The Utility Broker' layout={tubLayout}>
      <Resource name="clients" list={ClientList} create={createClient} edit={editClient} show={showClient} />
      <Resource name="users" list={UserList} />
      <Resource name="tags" list={TagList} create={createTag} recordRepresentation="name" />
    </Admin>
  );
}

export default App;
