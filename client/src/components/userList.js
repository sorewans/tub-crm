import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
} from 'react-admin';

const UserList = (props) => {
  return <List {...props}>
    <Datagrid>
      <TextField source='name' label= "Name" />
      <TextField source='email' label = "E-mail" />
      <TextField source='password' label = "Password" />
      <EditButton basepath = '/users' />
    </Datagrid>


  </List>
}

export default UserList;