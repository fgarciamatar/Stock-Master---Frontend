import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

/*import {useColorScheme, View} from 'react-native';*/
import Tabs from './src/Tabs.tsx';

/*type SectionProps = PropsWithChildren<{
  title: string;
}>;*/

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tabs />

    </NavigationContainer>
  );
}

export default App;

/*function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return <View></View>;
}*/
