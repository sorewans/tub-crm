const API_URL = 'http://localhost:3003';

export async function listAllClients() {
  const response = await fetch(`${API_URL}/clients`);
  return response.json();
}

export async function returnOneClient(id) {
  const response = await fetch(`${API_URL}/clients/${id}`);
  console.log(response);
  return response.json();
}

export async function addClientToDatabase(entry) {
  const response = await fetch(`${API_URL}/clients`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(entry),
  });
  return response.json();
}