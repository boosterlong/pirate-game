import React, { Component, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Button } from 'react-native';

class GameView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* This will render the background image  */}
        <Image source={require('../components/images/island_backdrop.png')} style={styles.backgroundImage} />
        {/* The image container. */}
        <View style={styles.imageContainer}>
          <Image source={require('../components/images/pirate_king.png')} style={styles.image} />
        </View>
        {/* The prompt container. */}
          <View style={styles.promptContainer}>
            <Text style={styles.promptCopy}>{this.props.route.params.prompt}</Text>
          </View>
        {/* Button container */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text>Accept Quest</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Decline Quest</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.secondScreen}
          onPress={() => 
            this.props.navigation.navigate('Menu')
          }
        >
          <Text>Second Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    padding: 20,
    margin: 10,
    backgroundColor: 'rgb(252, 245, 229)',
    borderRadius: '20px'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promptContainer: {
    backgroundColor: 'rgba(252, 245, 229, 0.9)',
    padding: 10,
    margin: 10,
  },
  promptCopy: {
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  secondScreen: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    margin: 10,
    backgroundColor: 'rgb(252, 245, 229)',
    borderRadius: '100%'
  }
});

export default GameView;