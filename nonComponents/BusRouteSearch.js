import { View, TextInput } from 'react-native';
import React from 'react';

export default () => (
  <View style={[styles.scene, { backgroundColor: 'white', width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 50 }]} >
    <TextInput
      style={{ fontSize: 18, height: 60, padding: 10, borderColor: '#4CAF50', borderWidth: 1, borderBottomWidth: 0}}
      placeholder="Source"
      autoFocus
      placeholderTextColor="#9E9E9E"
      // onChangeText={(text) => this.setState({text})}
      // value={this.state.text}
    />
    <TextInput
      style={{ fontSize: 18, height: 60, padding: 10, borderColor: '#4CAF50', borderWidth: 1}}
      placeholder="Destination"
      // onChangeText={(text) => this.setState({text})}
      // value={this.state.text}
    />
  </View>
);