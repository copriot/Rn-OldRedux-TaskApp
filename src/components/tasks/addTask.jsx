import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../ui/button';
import Input from '../ui/input';

const AddTask = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Text>AddTask</Text>
      <Input placeholder="TİTLE" title={'TaskTitle'} />
      <Button title={'Kaydet'} status="success" />
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({});
