import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/colors';
import {Calendar1, Edit, More, Trash} from 'iconsax-react-native';
import {setColor} from '../../utils/helperFunctions';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../../store/actions/taskActions';
import {screenNames} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';

const TaskItem = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const deleteItem = () => {
    Alert.alert('Attention!', 'Are you sure you want to delete ?', [
      {text: 'Delete', onPress: () => dispatch(deleteTask(item.id))},
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'space-around'}}>
        <Text style={styles.title}>{item.title}</Text>

        <View style={{minHeight: 40}}>
          <View
            style={{
              marginVertical: 8,
              backgroundColor: setColor(item.status),
              padding: 5,
              borderRadius: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: ThemeColors.black, fontWeight: '500'}}>
              {item.status}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignContent: 'center', gap: 5}}>
          <Calendar1 size={20} />
          <Text style={styles.title}>{item.date}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: 10}}>
        <TouchableOpacity onPress={() => deleteItem()}>
          <Trash size={25} color={ThemeColors.black} variant="Outline" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(screenNames.UPDATETASK, {task: item})
          }>
          <Edit size={25} color={ThemeColors.black} variant="Outline" />
        </TouchableOpacity>
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
