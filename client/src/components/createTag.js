import React from 'react';
import {
  Create, SimpleForm, TextInput,

  } from 'react-admin';

const createTag = (props) => {
  return (
    <Create title='Add a new Tag' {...props}>
      <SimpleForm>
        <TextInput label = 'Name' source = 'name' />
      </SimpleForm>
    </Create>
  )
};

export default createTag;