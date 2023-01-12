import React from 'react';
import { useState, useEffect } from 'react';
import { returnOneClient } from '../API';
import { useParams } from 'react-router-dom';

export default function ClientDetail() {
  const [oneClient, setOneClient] = useState([]);

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

  const params = useParams();

  useEffect(() => {
    (async () => {
      const result = await returnOneClient(params.id);
      setOneClient(result);
    })();
  }, []);

  return (
    <div className="ClientDetail">
    <label for="name">Name:</label>
    <input
     type="text"
     id="name"
     readOnly
     onChange={(event) => {
      setName(event.target.value)
     }}
     value = {oneClient.name} />
    <label>Trading Name:</label>
    <input
     type="text"
     readOnly
     onChange={(event) => {
      setTradeName(event.target.value)
     }}
     value = {oneClient.tradeName} />
    <label>Address:</label>
    <textarea
     rows="4"
     readOnly
     onChange={(event) => {
      setAddress(event.target.value)
     }}
     value = {oneClient.address} />
    <label>Contact 1:</label>
    <input
     type="text"
     readOnly
     onChange={(event) => {
      setContact1(event.target.value)
     }}
     value = {oneClient.contact1} />
    <label>Contact 1 phone:</label>
    <input
     type="text"
     readOnly
     onChange={(event) => {
      setPhone1(event.target.value)
     }}
     value = {oneClient.phone1} />
    <label>Contact 1 email</label>
    <input
     type="email"
     readOnly
     onChange={(event) => {
      setEmail1(event.target.value)
     }} 
     value = {oneClient.email1} />
    <label>Contact 2:</label>
    <input
     type="text"
     readOnly
     onChange={(event) => {
      setContact2(event.target.value)
     }}
     value = {oneClient.contact2} />
    <label>Contact 2 phone:</label>
    <input
     type="text"
     readOnly
     onChange={(event) => {
      setPhone2(event.target.value)
     }}
     value = {oneClient.phone2} />
    <label>Contact 2 email</label>
    <input
     type="email"
     readOnly
     onChange={(event) => {
      setEmail2(event.target.value)
     }}
     value = {oneClient.email2} />
    <label>Notes:</label>
    <input
     type="textarea"
     readOnly
     onChange={(event) => {
      setNotes(event.target.value)
     }}
     value = {oneClient.notes} />
    </div>
  );  
}

