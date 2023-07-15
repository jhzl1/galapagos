import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Router } from './src/router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};
