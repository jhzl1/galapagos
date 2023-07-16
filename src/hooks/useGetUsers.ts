import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getUserList } from 'services';

export const useGetUsers = () => {
  const [filterName, setFilterName] = useState('');
  const [activeFilter, setActiveFilter] = useState('');
  const filters = ['Activo', 'Inactivo'];

  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getUserList,
    select: users =>
      users.filter(user => {
        const isNameMatch =
          user.nombre.toLowerCase().includes(filterName.toLowerCase()) ||
          user.apellido.toLowerCase().includes(filterName.toLowerCase());

        const isStateMatch = !activeFilter || user.estado === activeFilter;

        return isNameMatch && isStateMatch;
      }),
  });

  const handleFilterNameChange = (text: string) => setFilterName(text);
  const setSelectedFilter = (newFilter: string) => setActiveFilter(newFilter);
  const resetActiveFilter = () => setActiveFilter('');

  const userCounter = users.length;

  return {
    activeFilter,
    filterName,
    filters,
    handleFilterNameChange,
    isLoading,
    resetActiveFilter,
    setSelectedFilter,
    userCounter,
    users,
  };
};
