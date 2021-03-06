// Login.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';

export class Login extends Component {

  render() {
    return (

      <View style={styles.container}>


        {/* Dock */}
        <Dock navigation={this.props.navigation}/>
       
      </View>

      
    )
  }
}

export default Login;