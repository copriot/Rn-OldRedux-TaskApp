import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import SectionTitle from '../../components/ui/sectionTitle';
import TaskStatusCard from '../../components/dashboard/taskStatusCard';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {
  VictoryBar,
  VictoryChart,
  VictoryPie,
  VictoryTheme,
} from 'victory-native';
import {ThemeColors} from '../../theme/colors';
import {RotateLeft} from 'iconsax-react-native';

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

        <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
          <VictoryPie
            width={320}
            height={320}
            labelRadius={111}
            innerRadius={50}
            padAngle={2}
            data={[
              {x: 'In Progress', y: 30},
              {x: 'In Review', y: 35},
              {x: 'On Hold', y: 25},
              {x: 'Complated', y: 10},
            ]}
            categories={{
              x: ['Cats', 'Birds', 'Dogs', 'Rabbits'],
            }}
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
