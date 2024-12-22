import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../ui/button';
import Input from '../ui/input';
import {addNewTask, updateTask} from '../../store/actions/taskActions';
import {useDispatch} from 'react-redux';

const UpdateTask = ({route}) => {
  const task = route.params.task;
  const [title, setTitle] = useState(task.title);
  const [date, setDate] = useState(task.date);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();
  const saveTask = () => {
    const form = {
      id: task.id,
      title: title,
      date: date,
      status: status,
    };
    dispatch(updateTask(form));
  };

  return (
    <View style={defaultScreenStyle.container}>
      <Text>UpdateTask</Text>
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
      <Button title={'Güncelle'} status="warning" onPress={() => saveTask()} />
    </View>
  );
};

export default UpdateTask;

const styles = StyleSheet.create({});
