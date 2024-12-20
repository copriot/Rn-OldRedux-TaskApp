import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../ui/button';
import Input from '../ui/input';
import {addNewTask} from '../../store/actions/taskActions';
import {useDispatch} from 'react-redux';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const saveTask = () => {
    const task = {
      id: Date.now(),
      title: title,
      date: date,
      status: status,
    };
    dispatch(addNewTask(task));
  };

  return (
    <View style={defaultScreenStyle.container}>
      <Text>AddTask</Text>
      <Input
        value={title}
        placeholder="Please set title"
        title={'TaskTitle'}
        onChangeText={value => setTitle(value)}
      />
      <Input
        onChangeText={value => setDate(value)}
        value={date}
        placeholder="Please set date"
        title={'Task Date'}
      />
      <Input
        onChangeText={value => setStatus(value)}
        value={status}
        placeholder="Please set status"
        title={'Task Status'}
      />
      <Button title={'Kaydet'} status="success" onPress={() => saveTask()} />
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({});
