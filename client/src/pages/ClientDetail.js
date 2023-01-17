import React from 'react';
import { useState, useEffect } from 'react';
import { returnOneClient, updateClientToDatabase,  } from '../API';
import { useParams, useNavigate} from 'react-router-dom';
import { 
  TextField, 
  Button, 
  FormControl, 
  FormControlLabel,
  FormGroup,
  FormLabel,
  Checkbox } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function ClientDetail() {
  //const [updatedClient, setUpdatedClient] = useState([]);
  //const [oneClient, setOneClient] = useState([]);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [tradeName, setTradeName] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [contact1, setContact1] = useState("");
  const [position1, setPosition1] = useState("");
  const [email1, setEmail1] = useState("");
  const [phone1, setPhone1] = useState("");
  const [contact2, setContact2] = useState("");
  const [position2, setPosition2] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone2, setPhone2] = useState("");
  const [notes, setNotes] = useState("");
  const [checkGas, setCheckGas] = useState(false);
  const [checkEle, setCheckEle] = useState(false);
  const [checkWat, setCheckWat] = useState(false);
  const [checkDbcomm, setCheckDbComm] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const [editButVis, setEditButVis] = useState("visible");
  const [saveButVis, setSaveButVis] = useState("hidden");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const updatedClient = {
    name: name,
    tradeName: tradeName,
    address: address,
    website: website,
    contact1: contact1,
    position1: position1,
    email1: email1,
    phone1: phone1,
    contact2: contact2,
    position2: position2,
    email2: email2,
    phone2: phone2,
    notes: notes,
    gas: checkGas,
    electric: checkEle,
    water: checkWat,
    dbcomm: checkDbcomm,
    contracts: [checkGas, checkEle, checkWat]
  };

  const submitChange = async () => {
    //console.log(updatedClient);
    await updateClientToDatabase(id, updatedClient); 
    setReadOnly(true);
    setEditButVis("visble");
    setSaveButVis("hidden");
    setOpen(true);
    returnOneClient(id);
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

  const handleChangeDbcomm = () => {
    setCheckDbComm(!checkDbcomm);
  };

  const editClient = () => {
    setReadOnly(false);
    setEditButVis("hidden");
    setSaveButVis("visible");
  }

  const cancelChange = () => {
    setReadOnly(true);
    setEditButVis("visble");
    setSaveButVis("hidden");
  }

  const handleClose = () => {
    setOpen(false);
  }

  const closeClient = () => {
    navigate('/clients');
  }

  const params = useParams();

  useEffect(() => {
    (async () => {
      const result = await returnOneClient(params.id);
      //setOneClient(result);
      setId(result._id);
      setName(result.name);
      setTradeName(result.tradeName);
      setAddress(result.address);
      setWebsite(result.website);
      setContact1(result.contact1);
      setPosition1(result.position1);
      setEmail1(result.email1);
      setPhone1(result.phone1);
      setContact2(result.contact2);
      setPosition2(result.position2);
      setPhone2(result.phone2);
      setEmail2(result.email2);
      setNotes(result.notes);
      setCheckGas(result.gas);
      setCheckEle(result.electric);
      setCheckWat(result.water);
      setCheckDbComm(result.dbcomm);
    })();
  }, []);

  return (
    <div className="ClientDetail">
    <h1>{name}</h1>
    <Grid container spacing={2}>
      <Grid xs={3}>
      <TextField 
      id = "outlined-name"
      label = "Name"
      inputProps={
        { readOnly: Boolean(readOnly)}
      }
      InputLabelProps={{shrink: true}}
      value= {name}
      onChange={(event) => {
        setName(event.target.value)
      }}
      />
    </Grid>
    <Grid xs={3}>
      <TextField
      id = "outlined-tradeName"
      label = "Trading as"
      inputProps={
        { readOnly: Boolean(readOnly)}
      }
      InputLabelProps={{shrink: true}}
      value = {tradeName}
      onChange={(event) => {
        setTradeName(event.target.value)
      }}
      />
    </Grid>
    <Grid xs={3}>
      <TextField
      id = "outlined-address"
      label = "Address"
      inputProps={
        { readOnly: Boolean(readOnly)}
      }
      InputLabelProps={{shrink: true}}
      value = {address}
      multiline = {true}
      rows = "4"
      onChange={(event) => {
        setAddress(event.target.value)
      }}
      />
    </Grid>
    <Grid xs={3}>
      <TextField
      id = "outlined-website"
      label = "Website"
      inputProps={
        { readOnly: Boolean(readOnly)}
      }
      InputLabelProps={{shrink: true}}
      value = {website}
      onChange={(event) => {
        setWebsite(event.target.value)
      }}
      />
    </Grid>
    <Grid xs={3}>
      <TextField
      id = "outlined-contact1"
      label ="Contact 1"
      inputProps={
        { readOnly: Boolean(readOnly)}
      }
      InputLabelProps={{shrink: true}}
      value = {contact1}
      onChange={(event) => {
        setContact1(event.target.value)
      }}
      />
    </Grid>
    <Grid xs={3}>
      <TextField
      id = "outlined-position1"
      label ="Position"
      inputProps={
        { readOnly: Boolean(readOnly)}
      }
      InputLabelProps={{shrink: true}}
      value = {position1}
      onChange={(event) => {
        setPosition1(event.target.value)
      }}
      />
    </Grid>
    <Grid xs={3}>
      <TextField
      id = "outlined-phone1"
      label = "Contact 1 phone"
      inputProps={
        { readOnly: Boolean(readOnly)}
      }
      InputLabelProps={{shrink: true}}
      value = {phone1}
      onChange={(event) => {
        setPhone1(event.target.value)
      }}
      />
    </Grid>
    <Grid xs = {3}>
      <TextField
      id = "outlined-email1"
      label = "Contact 1 email"
      inputProps={
        { readOnly: Boolean(readOnly)}
      }
      InputLabelProps={{shrink: true}}
      value = {email1}
      type = "email"
      onChange={(event) => {
        setEmail1(event.target.value)
      }} 
      />
    </Grid>
    <Grid xs={3}>
      <TextField
      id = "outlined-contact2"
      label = "Contact 2"
      inputProps={
        { readOnly: Boolean(readOnly)}
      }
      InputLabelProps={{shrink: true}}
      value = {contact2}
      onChange={(event) => {
        setContact2(event.target.value)
      }}
      />
    </Grid>
    <Grid xs={3}>
      <TextField
      id = "outlined-position2"
      label = "Position"
      inputProps={
        { readOnly: Boolean(readOnly)}
      }
      InputLabelProps={{shrink: true}}
      value = {position2}
      onChange={(event) => {
        setPosition2(event.target.value)
      }}
      />
    </Grid>
    <Grid xs={4}>
      <TextField
      id = "outlined-phone2"
      label = "Contact 2 phone"
      inputProps={
        { readOnly: Boolean(readOnly)}
      }
      InputLabelProps={{shrink: true}}
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
      inputProps={
        { readOnly: Boolean(readOnly)}
      }
      InputLabelProps={{shrink: true}}
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
      inputProps={
        { readOnly: Boolean(readOnly)}
      }
      InputLabelProps={{shrink: true}}
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
            disabled= {readOnly}
          />
          <FormControlLabel
            control={
              <Checkbox checked={checkEle} onChange={handleChangeEle} name="electricity" />
            }
            label="Electricity"
            disabled= {readOnly}
          />
          <FormControlLabel
            control={
              <Checkbox checked={checkWat} onChange={handleChangeWat} name="water" />
            }
            label="Water"
            disabled={readOnly}
          />
          <FormControlLabel
            control={
              <Checkbox checked={checkDbcomm} onChange={handleChangeDbcomm} name="dbcomm" />
            }
            label="DB Comms"
            disabled={readOnly}
          />
        </FormGroup>
      </FormControl>
    </Grid>
  </Grid>
  <Button 
  variant = "contained"
  sx = {{visibility: `${editButVis}`}}
  onClick={() => editClient() }>
    Edit</Button>
  <Button 
  variant = "contained"
  sx = {{visibility:` ${saveButVis}`}}
  onClick={() => submitChange() }>
    Save Changes</Button>
  <Button 
  variant = "contained"
  color = "error"
  sx = {{visibility: `${saveButVis}`}}
  onClick={() => cancelChange() }>
    Cancel</Button>
  <Button 
  variant = "contained"
  sx = {{visibility: `${editButVis}`}}
  onClick={() => closeClient() }>
    Close</Button>
  <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
    <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    Client updated successfully
    </MuiAlert>
  </Snackbar>
    </div>
  )
}

