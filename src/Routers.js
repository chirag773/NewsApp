import React, { Component } from 'react';
import { View, Text, AsyncStorage , BackHandler} from 'react-native';
import { Scene, Router, Actions, Stack, Tabs,ActionConst} from "react-native-router-flux";
import favScreen from './component/FavScreen';
import Icon from "react-native-vector-icons/FontAwesome"
import News from './component/news/News';



const TabIcon = ({ focused, iconName}) => {

  var color = focused ? "blue" : "grey"
  return (
    <Icon name={iconName} size={24} color={color}/>
  )
}

class RouterComponent extends Component {
  

componentWillMount = () => {
  BackHandler.addEventListener('hardwareBackPress', function() {
    
      return true;
  });

};


componentDidMount = () => {
  BackHandler.addEventListener('hardwareBackPress', function() {
    
      return true;
  });

};

  render() {
    return (
      <Router>
          <Stack key="root" >

            <Tabs 
              hideNavBar={true} 
              showLabel={false}
              
            >
                <Scene key="Home" component={News} icon={TabIcon} title="Home" initial iconName="home" /> 
                <Scene key="favourite" component={favScreen} icon={TabIcon}  title="Favourite" iconName="heart" />
             
            </Tabs>
            
          </Stack>
          
      </Router>
    );
  }
}

export default RouterComponent;
