import React, { PropsWithChildren } from 'react';
import { Text, View } from 'native-base';

import { UserIcon } from 'assets/icons';
import { styleShadow } from 'utils/shadow';

interface Props extends PropsWithChildren {
  userFullName: string;
  userCreationDate: string;
}

export const CardUserDetail = ({
  userCreationDate,
  userFullName,
  children,
}: Props) => {
  return (
    <View position="absolute" width="full">
      <View justifyContent="center" alignItems="center" zIndex={2} width="full">
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
          {userFullName}
        </Text>
        <Text textAlign="center">Usuario desde: {userCreationDate}</Text>

        <View mt={3}>{children}</View>
      </View>
    </View>
  );
};
