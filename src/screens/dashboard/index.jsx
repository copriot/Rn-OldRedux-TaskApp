import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import SectionTitle from '../../components/ui/sectionTitle';
import TaskStatusCard from '../../components/dashboard/taskStatusCard';

const Dashboard = () => {
  const {taskStatus} = useSelector(state => state?.tasks);

  return (
    <ScrollView style={{flex: 1}}>
      <SectionTitle title="Project Summary" />
      <View>
        {taskStatus.map((item, index) => (
          <TaskStatusCard item={item} key={index} />
        ))}
      </View>
      <SectionTitle title="Project Statistic" />
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
