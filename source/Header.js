import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const Header = props => {
  return (
    <TouchableOpacity
      style={styles.header}
      /* onPress={() => alert('hello World')}*/
      // onLongPress={() => alert('hello World')}
      // onPressIn={() => alert('hello World')}
      onPressOut={() => alert('hello World')}>
      <View>
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Header;
