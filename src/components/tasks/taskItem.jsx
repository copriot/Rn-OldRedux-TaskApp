import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/colors';
import {Calendar1, More} from 'iconsax-react-native';

const TaskItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'space-around'}}>
        <Text style={styles.title}>{item.title}</Text>

        <View style={{minHeight: 40}}>
          <View
            style={{
              marginVertical: 8,
              backgroundColor: 'red',
              padding: 5,
              borderRadius: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: ThemeColors.white, fontWeight: '500'}}>
              {item.status}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignContent: 'center', gap: 5}}>
          <Calendar1 size={20} />
          <Text style={styles.title}>{item.date}</Text>
        </View>
      </View>
      <View>
        <More size={25} color={ThemeColors.black} variant="Outline" />
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.6,
    borderRadius: 8,
    borderColor: ThemeColors.black,
    margin: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
});
