import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const IndexButton = ({label, onSbumit}) => {
  return (
    <TouchableOpacity onPress={onSbumit} style={styles.button}>
      <Text style={styles.labelButton}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IndexButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#355C7D',
    borderRadius: 10,
    paddingVertical: 10,
  },
  labelButton: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
    fontFamily: 'roboto',
  },
});
