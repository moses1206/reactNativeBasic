/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

import Header from './source/Header';
import Generator from './source/generator';
import NumList from './source/numlist';

const App = () => {
  const [appName, setAppName] = useState('My First App');
  const [random, setRandom] = useState([36, 999]);

  const onAddRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100 + 1);
    setRandom([...random, randomNum]);
  };

  const onNumDelete = idx => {
    const newArray = random.filter((num, index) => {
      return idx != index;
    });
    setRandom(newArray);
  };

  return (
    <View style={styles.mainView}>
      <Header name={appName} />
      <View>
        <Text style={styles.mainText} onPress={() => alert('Text Touch Event')}>
          Hello World
        </Text>
      </View>
      <Generator add={onAddRandomNumber} />
      <NumList num={random} delete={onNumDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    // paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  subView2: {
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },
});

export default App;
