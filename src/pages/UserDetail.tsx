import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Badge } from 'native-base';

import { CardUserDetail, DescriptionItem } from 'components';
import { formatDate } from 'utils/formatDate';
import { PageLayout } from 'layouts/PageLayout';
import { Pages } from 'interfaces/pages.interface';

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
      <CardUserDetail userFullName={fullName} userCreationDate={creationDate}>
        <DescriptionItem title="Celular" description={celular} />
        <DescriptionItem title="Documento" description={documento} />
        <DescriptionItem
          title="Última modificación"
          description={modificationDate}
        />
        <DescriptionItem
          title="Modificado por"
          description={emailModificacion}
        />
        <DescriptionItem title="Estado">
          <Badge
            colorScheme={estado === 'Activo' ? 'green' : 'red'}
            p={0}
            w="1/2">
            {estado}
          </Badge>
        </DescriptionItem>
      </CardUserDetail>
    </PageLayout>
  );
};
