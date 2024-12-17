import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FloatActionButton from '../../components/ui/floatActionButton';
import {ThemeColors} from '../../theme/colors';
import {useSelector} from 'react-redux';
import TaskItem from '../../components/tasks/taskItem';

const Tasks = () => {
  const {tasks} = useSelector(state => state?.tasks);
  return (
    <>
      <View>
        <FlatList
          ListEmptyComponent={
            <Text style={{textAlign: 'center', fontSize: 18, color: '#f45'}}>
              You have not added any task yet.
            </Text>
          }
          data={tasks}
          renderItem={({item}) => <TaskItem item={item} />}
        />
      </View>

      <View style={styles.container}>
        <FloatActionButton />
      </View>
    </>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: ThemeColors.blue,
    borderRadius: 100,
    position: 'absolute',
    bottom: 25,
    right: 30,
  },
});
