import React, { PropsWithChildren, useEffect } from 'react';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View } from 'native-base';

interface Props extends PropsWithChildren {
  titlePage: string;
}

export const PageLayout = ({ titlePage = 'Página', children }: Props) => {
  const { setOptions } = useNavigation();

  useEffect(() => {
    setOptions({
      title: titlePage,
    });
  }, [setOptions, titlePage]);

  return (
    <SafeAreaView>
      <View p={4}>
        <KeyboardAvoidingView>{children}</KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};
