/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PickerComponent from './source/picker';

const App = () => {
  const [myTextInput, setMyTextInput] = useState('');
  const [alphabet, setAlphabet] = useState(['a', 'b', 'c', 'd']);

  const onAddTextInput = () => {
    setAlphabet([...alphabet, myTextInput]);
    setMyTextInput('');
  };

  const onInputChange = e => {
    setMyTextInput(e);
  };

  return (
    <View style={styles.mainView}>
      <PickerComponent />
      {/* <TextInput
        onChangeText={onInputChange}
        style={styles.input}
        value={myTextInput}
        multiline={true}
        maxLength={10}
        autoCapitalize={'none'}
        editable={true}
      />
      <Button title="Add Text Input" onPress={onAddTextInput} />
      <ScrollView style={styles.sclv}>
        {alphabet.map((item, index) => {
          return (
            <Text style={styles.txt} key={index}>
              {item}
            </Text>
          );
        })}
      </ScrollView> */}
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
  sclv: {
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
  txt: {
    fontSize: 20,
    padding: 10,
    backgroundColor: 'pink',
    marginTop: 20,
    color: 'red',
    justifyContent: 'center',
  },
});

export default App;
