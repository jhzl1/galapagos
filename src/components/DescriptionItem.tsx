import React, { PropsWithChildren } from 'react';
import { Text, View } from 'native-base';

interface Props extends PropsWithChildren {
  title: string;
  description?: string;
}

export const DescriptionItem = ({ description, title, children }: Props) => {
  return (
    <View flexDirection="row" justifyContent="space-between" my={1}>
      <Text bold>{title}</Text>
      {children || <Text>{description}</Text>}
    </View>
  );
};
