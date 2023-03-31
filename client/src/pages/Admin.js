import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_USERS, QUERY_CATEGORIES, QUERY_ALL_PRODUCTS, QUERY_USER, QUERY_CHECKOUT } from '../utils/queries';

import { ADD_USER } from '../utils/mutations';

function Admin(props) {
  //const firstName = 'pamela';

  const { employees } = useQuery(QUERY_USER);

  const worker = employees?.employee;
  console.log(worker);

  const { loading, data } = useQuery(QUERY_ALL_USERS);

  const profiles = data?.users || [];

  //console.log(data);
  console.log(profiles);

  /*
  
    let user;
  console.log(JSON.stringify(data));

  if (data) {
    user = data.user;
  }
  console.log(user);
*/
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);
  /*
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const mutationResponse = await updateUser({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          employee: formState.employee,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    };
  */
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: { firstName: formState.firstName, lastName: formState.lastName, employee: formState.employee },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  //
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };




  return (
    <div className="container my-1">
      <Link to="/">← Go Home</Link>

      <h2>Admin</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        
        <div className="">

          <div className="">
            {profiles.map((profile) =>
              <div key={profile.lastName} className="">
                <div className="">
                  <h4 className="">{profile.firstName} {profile.lastName} {profile.employee}</h4>

                </div>

              </div>
            )}
            </div>
        </div>


        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Employee</label>
          <input
            placeholder="employee?"
            name="employee"
            type="employee"
            id="employee"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Admin;