import React from 'react';
import {
  Create,
  TabbedForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  AutocompleteArrayInput
  } from 'react-admin';

const createClient = (props) => {
  return (
    <Create title='Add a new Client' {...props}>
      <TabbedForm>
        <TabbedForm.Tab label="Contact">
          <TextInput label = 'Name' source = 'name' />
          <TextInput label = 'Primary Contact' source = 'contact1' />
          <TextInput label = 'Phone' source = 'phone1' />
          <TextInput label = 'Email' source = 'email1' />
          <TextInput label = 'Position' source = 'position' />
        </TabbedForm.Tab>
        <TabbedForm.Tab label="Directors/Other contacts">
          <ArrayInput source="directors">
            <SimpleFormIterator inline>
              <TextInput label = 'Name' source="name" helperText={false} />
              <TextInput label = 'Phone' source="phone" helperText={false} />
              <TextInput label = 'Email' source="email" helperText={false} />
              <TextInput label = 'Position' source="position" helperText={false} />
            </SimpleFormIterator>
          </ArrayInput>
        </TabbedForm.Tab>
        <TabbedForm.Tab label="Premises">
          <ArrayInput source="premises">
            <SimpleFormIterator inline>
              <TextInput label = 'Trading Name' source = 'tradeName' />
              <TextInput label = 'Address' multiline source = 'address'/>
              <AutocompleteArrayInput source = 'contractTypes' choices={[
                {id: 'gas', name: 'Gas'},
                {id: 'elec', name : 'Electricity'},
                {id: 'water', name : 'Water'},
                {id: 'dbcom', name: 'DB Comms'}
              ]}/>
            </SimpleFormIterator>
          </ArrayInput>
        </TabbedForm.Tab>
      </TabbedForm>
    </Create>
  )
};

export default createClient;