import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const PickerComponent = props => {
  const [country, setCountry] = useState('korea');
  const [slideValue, setSlideValue] = useState(0);

  const onSlideValueChange = v => {
    setSlideValue(v);
  };

  return (
    <View style={styles.container}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={slideValue}
        minimumTrackTintColor="red"
        maximumTrackTintColor="blue"
        style={{height: 40, width: 300}}
        step={1}
        onValueChange={onSlideValueChange}
      />
      <Text style={styles.input}>{slideValue}</Text>
      <Picker
        style={{height: 50, width: 250}}
        selectedValue={country}
        onValueChange={(val, idx) => {
          setCountry(val);
        }}>
        <Picker.Item label="Korea" value="korea" />
        <Picker.Item label="Canada" value="canada" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
  },
});

export default PickerComponent;
