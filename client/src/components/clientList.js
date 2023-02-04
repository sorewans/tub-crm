import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const ClientList = (props) => {
  return <List {...props}>
    <Datagrid>
      <TextField source='name' />
      <TextField source='address' />
      <TextField source='contact1' />
      <TextField source='phone1' />
      <TextField source='email1' />
      <EditButton basepath = '/clients' />
    </Datagrid>


  </List>
}

export default ClientList;