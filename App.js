import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameView from './views/gameView';
import OpeningSplash from './views/secondScreen'
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {

  const [prompt, setPrompt] = useState("Avast ye! A legendary treasure guarded by a cursed island and sea monster awaits. Brave adventurers needed to claim riches and earn pirate respect. Will ye take the quest, or will ye walk the plank?")

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Game"
            options={{title: 'Pirate Quest 2023'}}
            component={GameView}
            initialParams={{
              prompt: prompt,
            }}
          />
        <Stack.Screen
            name="Menu"
            options={{title: 'Menu'}}
            component={OpeningSplash}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
