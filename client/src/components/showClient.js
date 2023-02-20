import { Typography, Box, Divider } from '@mui/material';
import React from 'react';
import {
  Show,
  TabbedShowLayout,
  TextField,
  ArrayField,
  ChipField,
  Datagrid,
  ReferenceArrayField,
  } from 'react-admin';

const showClient = (props) => {
  return (
    <Show title='Add a new Client' {...props}>
      <TabbedShowLayout>
        <TabbedShowLayout.Tab label="Client">
          <Typography variant = "h6" gutterBottom>Client</Typography>
          <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextField label= "Name" source="name" isRequired fullWidth />
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <TextField label= "Website" source="website" fullWidth />
                </Box>
            </Box>
          <Divider />
          <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>  
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>  
              <TextField label = 'Primary Contact' isRequired source = 'contact1' fullWidth />
            </Box>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
              <TextField label = 'Phone' isRequired source = 'phone1' fullWidth />
              </Box>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
              <TextField label = 'Email' isRequired source = 'email1' fullWidth />
              </Box>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
              <TextField label = 'Position' isRequired source = 'position1' fullWidth />
              </Box>
          </Box>
          <ArrayField source="otherContacts">
            <Datagrid>
              <TextField label = 'Name' source="name" />
              <TextField label = 'Phone' source="phone" />
              <TextField label = 'Email' source="email" />
              <TextField label = 'Position' source="position" />
            </Datagrid>
          </ArrayField>
        </TabbedShowLayout.Tab>
        <TabbedShowLayout.Tab label="Premises">
          <TextField label = 'Trading Name' source = 'tradeName' />
          <TextField label = 'Address' source = 'address1'/>
          <ReferenceArrayField label= 'Contract types' source = 'contractTypes' reference = 'tags' />

          <ArrayField label = "Additional Premises" source="additionalPremises">
            <Datagrid>
              <TextField label = 'Trading Name' source = 'tradeName' />
              <TextField label = 'Address' multiline source = 'address'/>
              <ReferenceArrayField label= 'Contract types' source = 'contractTypes' reference = 'tags' />
            </Datagrid>
          </ArrayField>
        </TabbedShowLayout.Tab>
        <TabbedShowLayout.Tab label="Notes">
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
          <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
             <TextInput label= "Notes" source="notes" multiline fullWidth />
          </Box>
        </Box>
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  )
};

export default showClient;