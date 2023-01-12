import './App.css';
import { useState } from 'react';
import { addClientToDatabase } from './API';
//import Axios from 'axios';

function App() {

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
    notes: notes
  }

  const printOutput = () => {
    console.log(client);
  }
  // const addClientToDatabase = () => {
  //   Axios.post("http://localhost:3003/addClient", {
  //     name: name,
  //     tradeName: tradeName,
  //     address: address,
  //     contact1: contact1,
  //     email1: email1,
  //     phone1: phone1,
  //     contact2: contact2,
  //     email2: email2,
  //     phone2: phone2,
  //     notes: notes
  //   })
  // }
  // ;


  return <div className="App">
  <div className="addClient">  
    <label>Name:</label>
    <input
     type="text"
     onChange={(event) => {
      setName(event.target.value)
     }} />
    <label>Trading Name:</label>
    <input
     type="text"
     onChange={(event) => {
      setTradeName(event.target.value)
     }} />
    <label>Address:</label>
    <input
     type="text"
     onChange={(event) => {
      setAddress(event.target.value)
     }} />
    <label>Contact 1:</label>
    <input
     type="text"
     onChange={(event) => {
      setContact1(event.target.value)
     }} />
    <label>Contact 1 phone:</label>
    <input
     type="text"
     onChange={(event) => {
      setPhone1(event.target.value)
     }} />
    <label>Contact 1 email</label>
    <input
     type="email"
     onChange={(event) => {
      setEmail1(event.target.value)
     }} />
    <label>Contact 2:</label>
    <input
     type="text"
     onChange={(event) => {
      setContact2(event.target.value)
     }} />
    <label>Contact 2 phone:</label>
    <input
     type="text"
     onChange={(event) => {
      setPhone2(event.target.value)
     }} />
    <label>Contact 2 email</label>
    <input
     type="email"
     onChange={(event) => {
      setEmail2(event.target.value)
     }} />
    <label>Notes:</label>
    <input
     type="text"
     onChange={(event) => {
      setNotes(event.target.value)
     }} />
  <button onClick={() => addClientToDatabase(client)}>Add Client</button>
    </div>
  </div>;
    }


export default App;
