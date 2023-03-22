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

const items = [
  {
    id: 'c68ccae6-c168-11ed-98e6-bb09c0346e5c',
    user_name: 'Elvis LeRoux',
    dob: '2000-07-01',
    email: 'elvis.leroux@gmail.com',
    photo_id: false,
    attendance: null,
    training_id: 'fe0cbc7a-c167-11ed-98e6-bb09c0346e5c',
  },
  {
    id: '0ce4705c-c169-11ed-98e6-bb09c0346e5c',
    user_name: 'Michelle Gellis',
    dob: '2001-08-11',
    email: 'michalle.gellis@gmail.com',
    photo_id: false,
    attendance: null,
    training_id: 'fe0cbc7a-c167-11ed-98e6-bb09c0346e5c',
  },
  {
    id: 'f45826f0-c168-11ed-98e6-bb09c0346e5c',
    user_name: 'Jeremone Basilo',
    dob: '1997-08-11',
    email: 'jeremone.basilo@gmail.com',
    photo_id: true,
    attendance: 43,
    training_id: 'fe0cbc7a-c167-11ed-98e6-bb09c0346e5c',
  },
  {
    id: '965e35b0-c165-11ed-98e6-bb09c0346e5c',
    user_name: 'Eddie Trainee',
    dob: '1985-04-01',
    email: 'eddie_trainee@gmail.com',
    photo_id: true,
    attendance: 22,
    training_id: 'fe0cbc7a-c167-11ed-98e6-bb09c0346e5c',
  },
  {
    id: '88f389e0-c168-11ed-98e6-bb09c0346e5c',
    user_name: 'Brian',
    dob: '1995-01-01',
    email: 'brian@gmail.com',
    photo_id: true,
    attendance: 22,
    training_id: 'fe0cbc7a-c167-11ed-98e6-bb09c0346e5c',
  },
  {
    id: 'ab9815c4-c168-11ed-98e6-bb09c0346e5c',
    user_name: 'Thomas',
    dob: '2000-05-05',
    email: 'thomas@gmail.com',
    photo_id: true,
    attendance: 1222,
    training_id: 'fe0cbc7a-c167-11ed-98e6-bb09c0346e5c',
  },
  {
    id: '29330912-c169-11ed-98e6-bb09c0346e5c',
    user_name: 'Mo Ghatta',
    dob: '2001-08-11',
    email: 'chatta.mo@gmail.com',
    photo_id: true,
    attendance: 76,
    training_id: 'fe0cbc7a-c167-11ed-98e6-bb09c0346e5c',
  },
  {
    id: '9d06c064-c168-11ed-98e6-bb09c0346e5c',
    user_name: 'Jennifer',
    dob: '1998-02-04',
    email: 'jennifer@gmail.com',
    photo_id: true,
    attendance: 972,
    training_id: 'fe0cbc7a-c167-11ed-98e6-bb09c0346e5c',
  },
  {
    id: 'df44ba58-c168-11ed-98e6-bb09c0346e5c',
    user_name: 'Faryl Robin Gilston',
    dob: '1999-07-01',
    email: 'Faryl.gil@gmail.com',
    photo_id: false,
    attendance: 2,
    training_id: 'fe0cbc7a-c167-11ed-98e6-bb09c0346e5c',
  },
];

// console.log(userItems);
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
