import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UserList from '../components/UserList';
import Filters from '../components/Filters';
import AddToTeam from '../components/AddToTeam';
import TeamDetails from '../components/TeamDetails';

const AppNavigator = createStackNavigator(
  {
    UserList: { screen: UserList },
    Filters: { screen: Filters },
    AddToTeam: { screen: AddToTeam },
    TeamDetails: { screen: TeamDetails },
  },
  {
    initialRouteName: 'UserList',
  }
);

export default createAppContainer(AppNavigator);
