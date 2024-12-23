import {Alert} from 'react-native';
import {ADDTASK, DELETETASK} from '../types/tasksTypes';

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
export const deleteTask = taskId => {
  return async dispatch => {
    dispatch({
      type: DELETETASK,
      payload: taskId,
    });
    Alert.alert(
      'Delete was succesful',
      'The delete operation was succesfully complated',
    );
  };
};
export const updateTask = task => {
  return async dispatch => {
    dispatch({
      type: UPDATETASK,
      payload: task,
    });
    Alert.alert(
      'Update was succesful',
      'The update operation was succesfully complated',
    );
  };
};
