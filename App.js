import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameView from './views/gameView';
import initialImage from './components/images/pirate_king.png';
import SecondScreen from './views/secondScreen';
import { sharkStory } from './components/encounters/sharkEncounter';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {

  let prompt = "Welcome to Pirate Game 2023. Would you like to play?"

  const [content, setContent] = useState({
    content: {
      prompt: prompt,
      image: initialImage,
      adventure: sharkStory,
    }
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Game"
            options={{title: 'Pirate Quest 2023'}}
            component={GameView}
            initialParams={content}
          />
        <Stack.Screen
            name="Menu"
            options={{title: 'Menu'}}
            component={SecondScreen}
            initialParams={
              resetAdventure=setContent
            }
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
