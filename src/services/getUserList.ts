import { galapagosApi } from 'api/galapagosApi';
import { User, UserList as UserListInterface } from 'interfaces/list.interface';

export const getUserList = async () => {
  const { data } = await galapagosApi.get<UserListInterface>('/lista');

  const userKeys = Object.keys(data);

  const formattedUsers: User[] = [];

  for (const userKey of userKeys) {
    const user = data[userKey];
    formattedUsers.push(user);
  }

  return formattedUsers;
};
