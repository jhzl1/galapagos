import { Badge, Text, View } from 'native-base';
import { PageLayout } from 'layouts/PageLayout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pages } from 'interfaces/pages.interface';
import { UserIcon } from 'assets/icons';
import { styleShadow } from 'utils/shadow';
import { formatDate } from 'utils/formatDate';

export const UserDetail = ({
  route,
}: NativeStackScreenProps<Pages, 'UserDetail'>) => {
  const {
    nombre,
    apellido,
    fechaCreacion,
    celular,
    documento,
    fechaModificacion,
    emailModificacion,
    estado,
  } = route.params;

  const fullName = `${nombre} ${apellido}`;

  const creationDate = formatDate(fechaCreacion);
  const modificationDate = formatDate(fechaModificacion);

  return (
    <PageLayout titlePage="Detalles usuario">
      <View position="absolute" width="full">
        <View
          justifyContent="center"
          alignItems="center"
          zIndex={2}
          width="full">
          <View bg="gray.300" p={3} rounded="full">
            <UserIcon />
          </View>
        </View>

        <View
          backgroundColor="white"
          position="relative"
          top={-20}
          px={2}
          pt={6}
          pb={2}
          rounded="md"
          style={styleShadow}>
          <Text textAlign="center" fontSize="xl" bold>
            {fullName}
          </Text>
          <Text textAlign="center">Usuario desde: {creationDate}</Text>

          <View
            flexDirection="row"
            justifyContent="space-between"
            mt={3}
            mb={1}>
            <Text bold>Celular</Text>
            <Text>{celular}</Text>
          </View>
          <View flexDirection="row" justifyContent="space-between" my={1}>
            <Text bold>Documento</Text>
            <Text>{documento}</Text>
          </View>
          <View flexDirection="row" justifyContent="space-between" my={1}>
            <Text bold>Última modificación</Text>
            <Text>{modificationDate}</Text>
          </View>
          <View flexDirection="row" justifyContent="space-between" my={1}>
            <Text bold>Modificado por</Text>
            <Text>{emailModificacion}</Text>
          </View>
          <View flexDirection="row" justifyContent="space-between" my={1}>
            <Text bold>Estado</Text>
            <Badge
              colorScheme={estado === 'Activo' ? 'green' : 'red'}
              p={0}
              w="1/2">
              {estado}
            </Badge>
          </View>
        </View>
      </View>
    </PageLayout>
  );
};
