import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import ClientList from './components/clientList';
import createClient from './components/createClient';

const apiURL = "http://localhost:3003";
const dataProvider = jsonServerProvider(apiURL);
function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="clients" list={ClientList} create={createClient} />

    </Admin>
  );
}

export default App;
