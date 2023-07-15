import { useState } from 'react';
import { galapagosApi } from '../api/galapagosApi';
import {
  User,
  UserList as UserListInterface,
} from '../interfaces/list.interface';
import { useQuery } from '@tanstack/react-query';

const getUserList = async () => {
  const { data } = await galapagosApi.get<UserListInterface>('/lista');

  const userKeys = Object.keys(data);

  const formattedUsers: User[] = [];

  for (const userKey of userKeys) {
    const user = data[userKey];
    formattedUsers.push(user);
  }

  return formattedUsers;
};
export const useGetUsers = () => {
  const [filter, setFilter] = useState('');

  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getUserList,
    select: users =>
      users.filter(user => {
        return (
          user.nombre.toLowerCase().includes(filter.toLowerCase()) ||
          user.apellido.toLowerCase().includes(filter.toLowerCase())
        );
      }),
  });

  const handleFilterChange = (text: string) => setFilter(text);
  const userCounter = users.length;

  return { users, isLoading, handleFilterChange, userCounter, filter };
};
