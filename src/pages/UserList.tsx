import React from 'react';
import { Input, Spinner, Text, View } from 'native-base';
import { SearchIcon } from '../assets/icons';
import { useGetUsers } from '../hooks/useGetUsers';
import { UsersList } from '../components';
import { PageLayout } from '../layouts/PageLayout';

export const UserList = () => {
  const { filter, handleFilterChange, isLoading, users, userCounter } =
    useGetUsers();

  if (isLoading) return <Spinner size={50} my={5} />;

  return (
    <PageLayout titlePage="Lista de usuarios">
      <View>
        <Text>Total de usuarios: {userCounter}</Text>

        <Input
          my={4}
          placeholder="Buscar"
          size="sm"
          value={filter}
          onChangeText={handleFilterChange}
          InputLeftElement={
            <View ml={2}>
              <SearchIcon />
            </View>
          }
        />

        <UsersList users={users} />
      </View>
    </PageLayout>
  );
};
