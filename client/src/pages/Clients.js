import React from 'react';
import Table from "../components/clientTable";
import { useMemo, useState, useEffect } from 'react';
import { listAllClients } from '../API';



export default function Clients() {
  const [allClients, setAllClients] = useState([]);

  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "Clients",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Trading as",
            accessor: "tradeName",
          },
          {
            Header: "Primary Contact",
            accessor: "contact1"
          },
          {
            Header: "Primary Phone",
            accessor: "phone1"
          },
          {
            Header: "Primary Email",
            accessor: "email1"
          },
          {
            Header: "Gas contract",
            accessor: g => g.gas.toString(),
          },
          {
            Header: "Electricity contract",
            accessor: g => g.electric.toString(),
          },
          {
            Header: "Water contract",
            accessor: g => g.water.toString(),
          },
          {
            Header: "Notes",
            accessor: "notes"
          },
          {
            Header: "id",
            accessor: "_id",
          }
        ],
      },
    ],
    []
  );

  useEffect(() => {
    (async () => {
      const result = await listAllClients();
      setAllClients(result);
    })();
  }, []);

  console.log(allClients);
  return (
    <div className="Clients">
      <Table columns={columns} data={allClients} />
    </div>
  );

}