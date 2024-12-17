import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import SectionTitle from '../../components/ui/sectionTitle';
import TaskStatusCard from '../../components/dashboard/taskStatusCard';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {VictoryPie, VictoryTheme} from 'victory-native';

const Dashboard = () => {
  const {taskStatus} = useSelector(state => state?.tasks);

  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView style={{flex: 1}}>
        <SectionTitle title="Project Summary" />
        <View style={styles.dashboardContainer}>
          {taskStatus.map((item, index) => (
            <TaskStatusCard item={item} key={index} />
          ))}
        </View>
        <SectionTitle title="Project Statistic" />
        <VictoryPie
          innerRadius={50}
          data={[
            {label: 'Cats', x: 1, y: 30},
            {label: 'Dogs', x: 2, y: 35},
            {label: 'Birds', x: 3, y: 25},
            {label: 'Rabbits', x: 4, y: 10},
          ]}
          theme={VictoryTheme.clean}
        />
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
