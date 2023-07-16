import React from 'react';
import { Input, Spinner, Text, View } from 'native-base';

import { Filters, UsersList } from 'components';
import { PageLayout } from 'layouts/PageLayout';
import { SearchIcon } from 'assets/icons';
import { useGetUsers } from 'hooks';

export const UserList = () => {
  const {
    activeFilter,
    filterName,
    filters,
    handleFilterNameChange,
    isLoading,
    resetActiveFilter,
    setSelectedFilter,
    userCounter,
    users,
  } = useGetUsers();

  if (isLoading) return <Spinner size={50} my={5} />;

  return (
    <PageLayout titlePage="Lista de usuarios">
      <View>
        <Text>Total de usuarios: {userCounter}</Text>

        <Input
          my={4}
          placeholder="Buscar"
          size="sm"
          value={filterName}
          onChangeText={handleFilterNameChange}
          InputLeftElement={
            <View ml={2}>
              <SearchIcon />
            </View>
          }
        />

        <Filters
          filters={filters}
          onSelectFilter={setSelectedFilter}
          filter={activeFilter}
          onDeleteFilter={resetActiveFilter}
        />

        <UsersList users={users} />
      </View>
    </PageLayout>
  );
};
