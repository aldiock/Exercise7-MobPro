import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Input from '../../atoms/Input';
import Gap from './../../atoms/Gap';
import Button from '../../atoms/Button';
import Axios from 'axios';

const App = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    const data = {
      email: email,
      first_name: first_name,
      last_name: last_name,
      avatar: `https://ui-avatars.com/api/?name=${first_name} ${last_name}`,
    };
    Axios.post('http://10.0.2.2:3005/users', data);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.Regis}>Registration</Text>
        <Gap height={40} />
        <Text style={styles.labelInput}>Email</Text>
        <Input
          value={email}
          placeholder="Masukkan alamat email anda"
          onChangeText={e => setEmail(e)}
        />
        <Text style={styles.labelInput}>First Name</Text>
        <Input
          value={first_name}
          placeholder="Masukkan first name anda"
          onChangeText={e => setFirstName(e)}
        />
        <Text style={styles.labelInput}>Last Name</Text>
        <Input
          value={last_name}
          placeholder="Masukkan last name anda"
          onChangeText={e => setLastName(e)}
        />
        <Gap height={20} />
        <Button label="Save" onSbumit={() => handleSubmit()} />
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
  Regis: {
    fontSize: 36,
    fontWeight: '700',
  },
  labelInput: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
