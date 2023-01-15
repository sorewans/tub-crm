import React from 'react';
import { useState } from 'react';
import { addClientToDatabase } from '../API';
import { 
  TextField, 
  Button, 
  FormControl, 
  FormControlLabel,
  FormGroup,
  FormLabel,
  Checkbox,
  } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Grid from '@mui/material/Unstable_Grid2';

export default function AddClient() {
  const [name, setName] = useState("");
  const [tradeName, setTradeName] = useState("");
  const [address, setAddress] = useState("");
  const [contact1, setContact1] = useState("");
  const [email1, setEmail1] = useState("");
  const [phone1, setPhone1] = useState("");
  const [contact2, setContact2] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone2, setPhone2] = useState("");
  const [notes, setNotes] = useState("");
  const [checkGas, setCheckGas] = useState(false);
  const [checkEle, setCheckEle] = useState(false);
  const [checkWat, setCheckWat] = useState(false);
  const [open, setOpen] = useState(false);

  const client = {
    name: name,
    tradeName: tradeName,
    address: address,
    contact1: contact1,
    email1: email1,
    phone1: phone1,
    contact2: contact2,
    email2: email2,
    phone2: phone2,
    notes: notes,
    gas: checkGas,
    electric: checkEle,
    water: checkWat,
    contracts: [checkGas, checkEle, checkWat]
  }

  const handleClick = () => {
    addClientToDatabase(client); 
    setName("");
    setTradeName("");
    setAddress("");
    setContact1("");
    setEmail1("");
    setPhone1("");
    setContact2("");
    setPhone2("");
    setEmail2("");
    setNotes("");
    setCheckGas(false);
    setCheckEle(false);
    setCheckWat(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const handleChangeGas = () => {
    setCheckGas(!checkGas);
  };

  const handleChangeEle = () => {
    setCheckEle(!checkEle);
  };

  const handleChangeWat = () => {
    setCheckWat(!checkWat);
  };

  return (
    <div className="addClient"> 
    <h1>Add a new client</h1>
    <Grid container spacing={2}>
      <Grid xs={4}>
      <TextField 
      id = "outlined-name"
      label = "Name"
      value= {name}
      onChange={(event) => {
        setName(event.target.value)
      }}
      />
    </Grid>
    <Grid xs={4}>
      <TextField
      id = "outlined-tradeName"
      label = "Trading as"
      value = {tradeName}
      onChange={(event) => {
        setTradeName(event.target.value)
      }}
      />
    </Grid>
    <Grid xs={4}>
      <TextField
      id = "outlined-address"
      label = "Address"
      value = {address}
      multiline = {true}
      rows = "4"
      onChange={(event) => {
        setAddress(event.target.value)
      }}
      />
    </Grid>
    <Grid xs={4}>
      <TextField
      id = "outlined-contact1"
      label ="Contact 1"
      value = {contact1}
      onChange={(event) => {
        setContact1(event.target.value)
      }}
      />
    </Grid>
    <Grid xs={4}>
      <TextField
      id = "outlined-phone1"
      label = "Contact 1 phone"
      value = {phone1}
      onChange={(event) => {
        setPhone1(event.target.value)
      }}
      />
    </Grid>
    <Grid xs = {4}>
      <TextField
      id = "outlined-email1"
      label = "Contact 1 email"
      value = {email1}
      type = "email"
      onChange={(event) => {
        setEmail1(event.target.value)
      }} 
      />
    </Grid>
    <Grid xs={4}>
      <TextField
      id = "outlined-contact2"
      label = "Contact 2"
      value = {contact2}
      onChange={(event) => {
        setContact2(event.target.value)
      }}
      />
    </Grid>
    <Grid xs={4}>
      <TextField
      id = "outlined-phone2"
      label = "Contact 2 phone"
      value = {phone2}
      onChange={(event) => {
        setPhone2(event.target.value)
      }}
      />
    </Grid>
    <Grid xs={4}>
      <TextField
      id = "outlined-email2"
      label = "Contact 2 email"
      value = {email2}
      type = "email"
      onChange={(event) => {
        setEmail2(event.target.value)
      }}
      />
    </Grid>
    <Grid xs = {8}>
      <TextField
      sx = {{width:600}}
      id = "outlined-notes"
      label = "Notes"
      multiline = {true}
      rows = {4}
      value = {notes}
      onChange={(event) => {
        setNotes(event.target.value)
      }}
      />
    </Grid>
    <Grid xs={4}>
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Current Contracts</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={checkGas} onChange={handleChangeGas} name="gas" />
            }
            label="Gas"
          />
          <FormControlLabel
            control={
              <Checkbox checked={checkEle} onChange={handleChangeEle} name="electricity" />
            }
            label="Electricity"
          />
          <FormControlLabel
            control={
              <Checkbox checked={checkWat} onChange={handleChangeWat} name="water" />
            }
            label="Water"
          />
        </FormGroup>
      </FormControl>
    </Grid>
    </Grid>
    <Button 
     variant = "contained"
     onClick={() => handleClick() }>
     Add Client</Button>
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
    <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    Client added successfully
  </MuiAlert>
    </Snackbar>
  </div>
  )
}


