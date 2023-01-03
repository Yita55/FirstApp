/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StackViewStyleInterpolator} from 'react-navigation-stack';
import {
  Scene,
  Router,
  Actions,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ErrorModal from './components/modal/ErrorModal';
import Login from './components/Login';
import Login2 from './components/Login2';
import Login3 from './components/Login3';
import EchoView from './components/EchoView';
import Launch from './components/Launch';

const stateHandler = (prevState, newState, action) => {
  console.log('onStateChange: ACTION:', action);
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Router onStateChange={stateHandler}>
      <Scene key="root">
        <Scene key="Login" initial={true} component={Login} />
        <Scene key="Login2" component={Login2} />
        <Scene key="Login3" component={Login3} />
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
