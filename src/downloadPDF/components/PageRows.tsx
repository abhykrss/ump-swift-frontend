import React, { Fragment, useEffect } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { useAppDispatch, useAppSelector } from '../../store/constants';
import { getUsersData } from '../../store/slices/usersDataSlice';
import { store } from '../../store';
import { Provider } from 'react-redux';

const borderColor = '#90e5fc';
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontStyle: 'bold',
  },
  name: {
    width: '20%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'left',
    paddingLeft: 5,
  },
  dob: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'left',
    paddingLeft: 5,
  },
  email: {
    width: '25%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'left',
    paddingLeft: 5,
  },
  signature: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'left',
    paddingLeft: 5,
  },
  photoId: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'left',
    paddingLeft: 5,
  },
  attendance: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'left',
    paddingLeft: 5,
  },
  expdt: {
    width: '20%',
    textAlign: 'left',
    paddingLeft: 5,
  },
});

const PageRows = ({ users }: { users: userType[] }) => {
  const rows = users.map((item: userType, index: number) => (
    <View style={styles.row} key={index} wrap={false}>
      <Text style={styles.name}>{item.user_name}</Text>
      <Text style={styles.dob}>{item.dob}</Text>
      <Text style={styles.email}>{item.email}</Text>
      <Text style={styles.signature}>NA</Text>
      <Text style={styles.photoId}>{item.photo_id ? 'Yes' : 'No'}</Text>
      <Text style={styles.attendance}>{item.attendance === null ? 'NA' : item.attendance}</Text>
      <Text style={styles.expdt}>NA</Text>
    </View>
  ));

  return <>{rows}</>;
};

export default PageRows;
