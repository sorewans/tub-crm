import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
} from 'react-admin';

const TagList = (props) => {
  return <List {...props}>
    <Datagrid>
      <TextField source='name' label = "Name" />
      <EditButton basepath = '/tags' />
    </Datagrid>


  </List>
}

export default TagList;