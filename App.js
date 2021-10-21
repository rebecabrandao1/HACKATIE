import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, Image, Button, ScrollView, TextInput, StyleSheet, ViewPagerAndroidBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen () {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40}}>Bem vinda</Text>
      <StatusBar style="auto" />
        <Image
            source={require('./assets/logo.png')}
            style={{ width: 200, height: 200, borderRadius: 20, marginBottom: 30, marginTop: 20}}
        />
        <Text style={{fontSize:25, marginTop: 10, marginBottom: 10}}>Login:</Text>
        <TextInput style={{width: 260, height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 20}}
          defaultValue="Digite seu e-mail"
        />
        <TextInput style={{width: 260, height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, borderRadius: 20}}
          defaultValue="Digite sua senha"
        />
        <Text></Text>
        <Button
        title="Concluído"
        color="#D3544C"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
