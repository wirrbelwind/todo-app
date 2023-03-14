import React from 'react';
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';

type User = {
  id: number;
  username: string;
};

type LoginResult = {
  user: User;
};

type LoginArgs = {
  username: string;
  password: string;
};

const getUsers = async (): Promise<User[]> => {
  const { data } = await axios.get('/api/users');
  return data;
};

const login = async (args: LoginArgs): Promise<LoginResult> => {
  const { data } = await axios.post('/api/login', args);
  return data;
};

const App: React.FC = () => {
  const { isLoading: isLoadingUsers, data: users } = useQuery<User[]>(
    'users',
    getUsers
  );

  const [mutateLogin, { isLoading: isLoadingLogin }] = useMutation<LoginResult, LoginArgs>(
    login
  );

  const handleLogin = async () => {
    const result = await mutateLogin({
      username: 'john',
      password: 'password',
    });
    console.log(result);
  };

  return (
    <div>
      <h1>Users</h1>
      {isLoadingUsers ? (
        <div>Loading users...</div>
      ) : (
        <ul>
          {users?.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      )}
      <h1>Login</h1>
      {isLoadingLogin ? (
        <div>Loading login...</div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default App;
