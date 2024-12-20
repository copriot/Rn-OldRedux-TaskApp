import {Alert} from 'react-native';
import {ADDTASK} from '../types/tasksTypes';

export const addNewTask = task => {
  console.log(task);
  return async dispatch => {
    dispatch({
      type: ADDTASK,
      payload: task,
    });
    Alert.alert(
      'Save was succesful',
      'The save operation was succesfully complated',
    );
  };
};
