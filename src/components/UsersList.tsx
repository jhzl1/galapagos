import {
  Badge,
  Box,
  ChevronRightIcon,
  FlatList,
  Text,
  View,
} from 'native-base';
import { User } from '../interfaces/list.interface';
import { Link } from '@react-navigation/native';
import { styleShadow } from 'utils/shadow';

interface Props {
  users: User[];
}

export const UsersList = ({ users }: Props) => {
  return (
    <Box mb={20}>
      <FlatList
        data={users}
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
                <Text color="#5E5E5E" bold mb={1}>
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
    </Box>
  );
};
