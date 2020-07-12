import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { PostProvider } from './src/contexts/PostProvider';

import PostCreateScreen from './src/screens/PostCreateScreen';
import PostEditScreen from './src/screens/PostEditScreen';
import PostIndexScreen from './src/screens/PostIndexScreen';
import PostShowScreen from './src/screens/PostShowScreen';

const StackNavigator = createStackNavigator(
  {
    PostCreateScreen,
    PostEditScreen,
    PostIndexScreen,
    PostShowScreen
  },
  {
    defaultNavigationOptions: { title: 'Blog' },
    initialRouteName: 'PostIndexScreen'
  }
);

const AppContainer = createAppContainer(StackNavigator);

const App = () => (
  <PostProvider>
    <AppContainer />
  </PostProvider>
);

export default App;
