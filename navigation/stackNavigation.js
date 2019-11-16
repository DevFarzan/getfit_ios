import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../Components/screens/Login';
import Signup from '../Components/screens/SignUp';
import ResetpasswordScreen from '../Components/screens/ResetPasswrd';
import BottomTabe from './tabNav';


const MainNavigator = createStackNavigator({
    Login: {screen: Login},
    Signup: {screen: Signup},
    ResetpasswordScreen: {screen: ResetpasswordScreen},
    BottomTabe: {
        screen: BottomTabe,
        navigationOptions: {
          header: null,
        }
      },

});

const App = createAppContainer(MainNavigator);

export default App;