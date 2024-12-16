import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TaskStatusCard = ({item}) => {
  return (
    <View style={[styles.container, {backgroundColor: item.color}]}>
      <Text>{item.status}</Text>
    </View>
  );
};

export default TaskStatusCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
  },
});
