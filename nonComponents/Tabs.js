import * as React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Button } from 'react-native-material-ui';


const FirstRoute = () => (
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
      placeholderTextColor="#9E9E9E"
      // onChangeText={(text) => this.setState({text})}
      // value={this.state.text}
    />
    <Button 
      style = {
        {
          container: {
            backgroundColor: "#FFC107",
            width: 'auto',
            maxWidth: 150,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 20,
            height: 50,
          },
          text: {
            color: "black",
            width: '100%',
            textAlign: 'center'
          }
        }
      }
      text="Submit" 
    />
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

export default class DynamicWidthTabBarExample extends React.Component {
  static title = 'Scrollable tab bar (auto width)';
  static backgroundColor = '#4CAF50';

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Bus Routes' },
      { key: 'second', title: 'Bus Numbers' },
    ],
  };

  renderTabBar = (
    props
  ) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      labelStyle={styles.label}
      tabStyle={styles.tabStyle}
    />
  );

  

  render() {
    return (
      <TabView
        indicatorStyle={{backgroundColor: '#4CAF50'}}
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={this.renderTabBar}
        appbarElevation={50}
        style={{flex: 1}}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#4CAF50',
    width: '100%',
    display: 'flex',
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    fontWeight: '400',
    width: '100%',
  },
  tabStyle: {
    width: 'auto',
  },
});