import React from "react";
import { StyleSheet, View, Text, Button} from 'react-native'

const SecondScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
              <Text style={{color: 'white'}}>This is a second screen.</Text>
              <Button
                  title="Go back!"
                  onPress={() => 
                  navigation.navigate('Game')}
              />
              <Button
                  title="Reset Adventure"
                  onPress={() => 
                    this.resetAdventure({
                      content: {}
                    })}
              />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      flex: 3,
    }
  });

export default SecondScreen