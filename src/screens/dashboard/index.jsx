import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import SectionTitle from '../../components/ui/sectionTitle';
import TaskStatusCard from '../../components/dashboard/taskStatusCard';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {VictoryPie, VictoryTheme} from 'victory-native';
import {ThemeColors} from '../../theme/colors';
import {statusTypes} from '../../utils/constant';

const Dashboard = () => {
  const {taskStatus, tasks} = useSelector(state => state?.tasks);
  const countTaskStatus = status => {
    return tasks.filter(item => item?.status === status).length;
  };

  const calculatedTaskStatus = status => {
    const totalTask = tasks.length;
    const taskCount = tasks.filter(item => item?.status === status).length;
    const percentage = ((taskCount / totalTask) * 100).toFixed(2);
    console.log(status, percentage);
    return percentage;
  };
  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView style={{flex: 1}}>
        <SectionTitle title="Project Summary" />
        <View style={styles.dashboardContainer}>
          {taskStatus.map((item, index) => (
            <TaskStatusCard
              item={item}
              key={index}
              value={countTaskStatus(item.status)}
            />
          ))}
        </View>
        <SectionTitle title="Project Statistic" />

        <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
          <VictoryPie
            width={320}
            height={320}
            labelRadius={111}
            innerRadius={50}
            padAngle={2}
            data={[
              {
                x: 'In Progress',
                y: calculatedTaskStatus(statusTypes.INPROGRESS),
              },
              {x: 'In Review', y: calculatedTaskStatus(statusTypes.INREVIEW)},
              {x: 'On Hold', y: calculatedTaskStatus(statusTypes.ONHOLD)},
              {x: 'Complated', y: calculatedTaskStatus(statusTypes.COMPLATED)},
            ]}
            theme={VictoryTheme.clean}
            style={{
              data: {
                fillOpacity: 0.99,
                stroke: ThemeColors.black,
                strokeWidth: 3,
              },
              labels: {
                fontSize: 12,
                fill: '#c43a31',
                fontWeight: '700',
                translate: 5,
              },
            }}
          />
        </View>
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
