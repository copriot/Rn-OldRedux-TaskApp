import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {More, MoreCircle} from 'iconsax-react-native';
import {ThemeColors} from '../../theme/colors';

const TaskStatusCard = ({item}) => {
  return (
    <View style={[styles.container, {backgroundColor: item.color}]}>
      <View style={{}}>
        <Text style={styles.value}>{item.value}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
      <View>
        <Pressable>
          <MoreCircle size={32} color={ThemeColors.black} />
        </Pressable>
      </View>
    </View>
  );
};

export default TaskStatusCard;

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 130,
    padding: 10,
    margin: 5,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
  },
  value: {fontSize: 30},
  status: {
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 10,
  },
});
