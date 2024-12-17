import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/colors';
import {Add} from 'iconsax-react-native';

const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size={40} color={ThemeColors.white} />
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
