import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { Router } from './src/router';

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
