import React from 'react';
import {Text, View} from 'react-native';
import RegisterPage from './Components/pages/RegisterPage';
import UserList from './Components/pages/UserListPage';

const App = () => {
  return (
    <View>
      {/* <RegisterPage /> */}
      <UserList />
    </View>
  );
};

export default App;
