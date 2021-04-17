import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Axios from 'axios';
import UsersListAPI from '../../molecules/UserList';

const UserListPage = () => {
  const [users, setUsers] = useState([]);

  //USE EFFECT INI CMN MO RENDER 1X STLH RETURN JALAN.
  //BIASANYA FOR ASYNC API PE LOKASI DISINI
  useEffect(() => {
    //AXIOS
    Axios.get('http://10.0.2.2:3005/users').then(result => {
      setUsers(result.data);
    });
  }, [users]);

  console.log(users);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Users List</Text>
        {users.map(item => (
          <UsersListAPI
            key={item.id}
            fullName={`${item.first_name} ${item.last_name}`}
            email={item.email}
            avatar={item.avatar}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default UserListPage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
