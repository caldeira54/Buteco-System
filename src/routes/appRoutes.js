import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import Provider from '../screens/Provider';

const {Navigator, Screen} = createNativeStackNavigator();

export default function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen name='provider' component={Provider} />
            <Screen name='signIn' component={SignIn} />
            <Screen name='home' component={Home} />
        </Navigator>
    )
}