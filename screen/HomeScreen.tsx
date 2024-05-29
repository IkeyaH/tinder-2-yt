import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../root/roots';
  
  export default function HomeScreen() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  
    return (
      <View>
        <Text>I am the HomeScreen</Text>
        <Button title="Go to Chat Screen" onPress={() => navigation.navigate("Chat")} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({});
