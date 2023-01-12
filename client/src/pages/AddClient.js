import React from 'react';
import { useState } from 'react';
import { addClientToDatabase } from '../API';
import { TextField } from '@mui/material';

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

  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };

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
    <TextField 
    id = "outlined-name"
    label = "Name"
    value= {name}
    onChange={(event) => {
      setName(event.target.value)
     }}
    />
    <TextField
    id = "outlined-tradeName"
    label = "Trading as"
    value = {tradeName}
    onChange={(event) => {
      setTradeName(event.target.value)
     }}
    />
    <TextField
    id = "outlined-address"
    label = "Address"
    value = {address}
    multiline = "true"
    maxRows = "4"
    rows = "4"
    onChange={(event) => {
      setAddress(event.target.value)
     }}
    />
    <TextField
    id = "outlined-contact1"
    label ="Contact 1"
    value = {contact1}
    onChange={(event) => {
      setContact1(event.target.value)
     }}
    />
    <TextField
    id = "outlined-phone1"
    label = "Contact 1 phone"
    value = {phone1}
    onChange={(event) => {
      setPhone1(event.target.value)
     }}
    />
    <TextField
    id = "outlined-email1"
    label = "Contact 1 email"
    value = {email1}
    type = "email"
    onChange={(event) => {
      setEmail1(event.target.value)
     }} 
    />
    <TextField
    id = "outlined-contact2"
    label = "Contact 2"
    value = {contact2}
    onChange={(event) => {
      setContact2(event.target.value)
     }}
    />
    <TextField
    id = "outlined-phone2"
    label = "Contact 2 phone"
    value = {phone2}
    onChange={(event) => {
      setPhone2(event.target.value)
     }}
    />
    <TextField
    id = "outlined-email2"
    label = "Contact 2 email"
    value = {email2}
    type = "email"
    onChange={(event) => {
      setEmail2(event.target.value)
     }}
    />
    <TextField
    id = "outlined-notes"
    label = "Notes"
    value = {notes}
    onChange={(event) => {
      setNotes(event.target.value)
     }}
    />
    <Checkbox
        label="Gas"
        value={checkGas}
        onChange={handleChangeGas}
      />
    <Checkbox
        label="Electricity"
        value={checkEle}
        onChange={handleChangeEle}
      />
    <Checkbox
        label="Water"
        value={checkWat}
        onChange={handleChangeWat}
      />
  <button onClick={() => handleClick() }>Add Client</button>
    </div>
  )
}

