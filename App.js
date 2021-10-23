import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, Image, Button, ScrollView, TextInput, StyleSheet, ViewPagerAndroidBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

function HomeScreen () {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40}}>Bem-vinda</Text>
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

function Cards() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40}}>Fórum</Text>
      <StatusBar style="auto" />
        <Image
            source={require('./assets/logo.png')}
            style={{ width: 200, height: 200, borderRadius: 20, marginBottom: 30, marginTop: 20}}
      />
      <Card>
      <Card.Title title="Fóruns" subtitle="Acesse e faça a sua denúncia" left={LeftContent} />
      <Card.Content>
        <Title>Assédio</Title>
      </Card.Content>
      <Card.Cover source={require('./assets/ASSEDIO.png')} />
      <Card.Actions>
        <Button>Acessar</Button>
      </Card.Actions>
      <Card.Content>
        <Title>Liderança Feminina</Title>
      </Card.Content>
      <Card.Cover source={require('./assets/LIDFEM.png')} />
      <Card.Actions>
        <Button>Acessar</Button>
      </Card.Actions>
  
      <Card.Content>
        <Title> Direitos trabalhistas</Title>
      </Card.Content>
      <Card.Cover source={require('./assets/DIREITOS.png')} />
      <Card.Actions>
        <Button>Acessar</Button>
      </Card.Actions>
    </Card>
    
    </View>
    
  );

}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cards" component={Cards} />
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
