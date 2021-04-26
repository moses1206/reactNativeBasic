import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';

const Input = props => {
  const [myTextInput, setMyTextInput] = useState('');

  const onInputChange = e => {
    setMyTextInput(e);
  };

  return (
    <View style={styles.mainView}>
      <TextInput
        onChangeText={onInputChange}
        style={styles.input}
        value={myTextInput}
        multiline={true}
        maxLength={10}
        autoCapitalize={'none'}
        editable={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
  mainView: {
    width: '100%',
  },
});

export default Input;
