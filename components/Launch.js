import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {MessageBarManager} from 'react-native-message-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

class Launch extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
        <Button
          title="Go to Login"
          onPress={() =>
            Actions.Login({data: 'Custom data', title: 'Custom title'})
          }
        />
        <Button title="Go to Register page" onPress={Actions.register} />
        <Button title="Display Error Modal" onPress={Actions.error} />
        
        <Button
          title="Go to CustomNavBar page"
          onPress={() => Actions.customNavBar()}
        />
        
        <Button title="Go to TabBar page" onPress={Actions.drawer} />
      </View>
    );
  }
}

export default Launch;
