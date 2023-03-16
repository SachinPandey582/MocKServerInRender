const url = 'https://themockserverpractiseforrevision.onrender.com/users';

// CREATE
const createUser = async (data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log('Created user:', result);
};

// READ
const getUsers = async () => {
  const response = await fetch(url);
  const result = await response.json();
  console.log('Users:', result);
};

// UPDATE
const updateUser = async (id, data) => {
  const response = await fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log('Updated user:', result);
};

// DELETE
const deleteUser = async (id) => {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
  });
  const result = await response.json();
  console.log('Deleted user:', result);
};

Usage
const data = { name: 'Pandeyji', email: 'johndoe@example.com' ,age:23,id:12};

CREATE
createUser(data);

READ
getUsers();

UPDATE
updateUser(5, { name: 'panndeyjisachin', email: 'janedoe@example.com',age:23 });

DELETE
deleteUser(8);
