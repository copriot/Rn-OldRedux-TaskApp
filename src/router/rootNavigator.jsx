import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tasks from '../screens/tasks';
import Dashboard from '../screens/dashboard';
import {screenNames} from '../utils/routes';
import {Pressable} from 'react-native';
import {Notification} from 'iconsax-react-native';
import {ThemeColors} from '../theme/colors';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        headerTitleStyle: {
          fontSize: 22,
        },
        headerShadowVisible: false,
        headerRight: () => (
          <Pressable>
            <Notification size={'32'} color={ThemeColors.black} />
          </Pressable>
        ),
      })}>
      <Stack.Screen name={screenNames.DASHBOARD} component={Dashboard} />
      <Stack.Screen name={screenNames.TASKS} component={Tasks} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
