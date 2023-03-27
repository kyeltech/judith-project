import React from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router/index';
import {QueryClientProvider, QueryClient} from 'react-query';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // TODO: wip
        // refetchOnWindowFocus: false,
        // refetchOnMount: false,
        // cacheTime: 1 * 60 * 60 * 1000,
        // staleTime: 1 * 60 * 60 * 1000,
        // retry: 1,
      },
    },
  });

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </PaperProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
