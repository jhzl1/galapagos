import { Link } from '@react-navigation/native';
import { Badge, ChevronRightIcon, FlatList, Text, View } from 'native-base';

import { User } from '../interfaces/list.interface';
import { styleShadow } from 'utils/shadow';

interface Props {
  users: User[];
}

export const UsersList = ({ users }: Props) => {
  return (
    <View height="95%">
      {users.length === 0 ? (
        <Text textAlign="center" mt={5}>
          No se han encontrado resultados
        </Text>
      ) : (
        <FlatList
          data={users}
          contentContainerStyle={{ paddingBottom: 450 }}
          renderItem={({ item }) => {
            return (
              <View
                bgColor="white"
                p={3}
                rounded="md"
                mx={1}
                my={2}
                style={styleShadow}
                flexDirection="row"
                justifyContent="center"
                alignItems="center">
                <View flex={1}>
                  <Text color="gray.500" bold mb={1}>
                    {item.nombre} {item.apellido}
                  </Text>
                  <Badge
                    colorScheme={item.estado === 'Activo' ? 'green' : 'red'}
                    p={0}
                    w="1/2">
                    {item.estado}
                  </Badge>
                </View>
                <View flex={1} alignItems="flex-end">
                  <View bg="gray.100" p={2} rounded="md">
                    <Link to={{ screen: 'UserDetail', params: { ...item } }}>
                      <ChevronRightIcon />
                    </Link>
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.nombre}
        />
      )}
    </View>
  );
};
