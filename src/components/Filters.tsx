import React from 'react';
import { Button, ChevronDownIcon, Menu, Text, View } from 'native-base';

import { styleShadow } from 'utils/shadow';

interface Props {
  filters: string[];
  onSelectFilter: (newFilter: string) => void;
  filter: string;
  onDeleteFilter: () => void;
}

export const Filters = ({
  filters,
  onSelectFilter,
  onDeleteFilter,
  filter,
}: Props) => {
  return (
    <View
      mb={2}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mx={1}>
      <Text bold color="gray.500">
        Filtrar por: {filter || `(${filters.length})`}
      </Text>

      {!!filter ? (
        <Button
          size="xs"
          px={3}
          py={1}
          bg="white"
          variant="unstyled"
          onPress={onDeleteFilter}
          style={styleShadow}>
          Borrar filtro
        </Button>
      ) : (
        <Menu
          w="190"
          trigger={triggerProps => {
            return (
              <Button
                w={10}
                size="xs"
                p={1}
                bg="white"
                variant="unstyled"
                style={styleShadow}
                {...triggerProps}>
                <ChevronDownIcon />
              </Button>
            );
          }}>
          {filters.map(filter => (
            <Menu.Item key={filter} onPress={() => onSelectFilter(filter)}>
              {filter}
            </Menu.Item>
          ))}
        </Menu>
      )}
    </View>
  );
};
