import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton, 
  SearchInput
} from 'react-admin';

const postFilters = [
  <SearchInput source="q" alwaysOn />
];

const ClientList = (props) => {
  return <List {...props} filters = {postFilters}>
    <Datagrid rowClick = 'show'>
      <TextField source='name' label= "Name" />
      <TextField source='address' />
      <TextField source='contact1' label = "Primary Contact" />
      <TextField source='phone1' />
      <TextField source='email1' />
      <EditButton basepath = '/clients' />
    </Datagrid>


  </List>
}

export default ClientList;