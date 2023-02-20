import { Typography, Box, Divider } from '@mui/material';
import React from 'react';
import {
  Edit,
  TabbedForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  AutocompleteArrayInput,
  ReferenceArrayInput
  } from 'react-admin';

const editClient = (props) => {
  return (
    <Edit title='Add a new Client' {...props}>
      <TabbedForm>
        <TabbedForm.Tab label="Client">
          <Typography variant = "h6" gutterBottom>Client</Typography>
          <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput label= "Name" source="name" isRequired fullWidth />
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <TextInput label= "Website" source="website" fullWidth />
                </Box>
            </Box>
          <Divider />
          <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>  
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>  
              <TextInput label = 'Primary Contact' isRequired source = 'contact1' fullWidth />
            </Box>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
              <TextInput label = 'Phone' isRequired source = 'phone1' fullWidth />
              </Box>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
              <TextInput label = 'Email' isRequired source = 'email1' fullWidth />
              </Box>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
              <TextInput label = 'Position' isRequired source = 'position1' fullWidth />
              </Box>
          </Box>
          <ArrayInput source="otherContacts">
            <SimpleFormIterator inline>
              <TextInput label = 'Name' source="name" helperText={false} />
              <TextInput label = 'Phone' source="phone" helperText={false} />
              <TextInput label = 'Email' source="email" helperText={false} />
              <TextInput label = 'Position' source="position" helperText={false} />
            </SimpleFormIterator>
          </ArrayInput>
        </TabbedForm.Tab>
        <TabbedForm.Tab label="Premises">
          <TextInput label = 'Trading Name' source = 'tradeName' />
          <TextInput label = 'Address' multiline source = 'address1'/>
          <ReferenceArrayInput source="contractTypes" reference="tags">
            <AutocompleteArrayInput />
          </ReferenceArrayInput>
          <ArrayInput label = "Add more premises" source="additionalPremises">
            <SimpleFormIterator inline>
              <TextInput label = 'Trading Name' source = 'tradeName' />
              <TextInput label = 'Address' multiline source = 'address'/>
              <ReferenceArrayInput source="contractTypes" reference="tags">
              <AutocompleteArrayInput />
              </ReferenceArrayInput>
            </SimpleFormIterator>
          </ArrayInput>
        </TabbedForm.Tab>
        <TabbedForm.Tab label="Notes">
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
          <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
             <TextInput label= "Notes" source="notes" multiline fullWidth />
          </Box>
        </Box>
        </TabbedForm.Tab>
      </TabbedForm>
    </Edit>
  )
};

export default editClient;