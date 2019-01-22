import React, { Component } from 'react';
import { View,ListView} from 'react-native';
import * as firebase from "firebase";
import { Container, Content,ListItem} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Card, Button ,Text} from 'react-native-elements'


var data=[]
var currentUser

class favScreen extends Component {

  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !==r2})
    this.state = {
      listViewData: data
    };
  }

  componentDidMount = () => {
    this.getFav()
  };
  
  getFav = async() => {
    currentUser = await firebase.auth().currentUser

    var that = this

    firebase.database().ref(currentUser.uid).child("favourites").on 
    ("child_added", function(data){
      var newData = [...that.state.listViewData]
      newData.push(data)

      that.setState({listViewData: newData})
    })
  }

  render() {
    return (
      <Container>
        <Content style={{flex:1, backgroundColor:"white"}}>
          <ListView
            enableEmptySections
            dataSource={this.ds.cloneWithRows
            (this.state.listViewData)}
            renderRow={data => 
               
                <Card
                  title={data.val().name}
                  image={{ uri : data.val().image}} >
                  <Text style={{marginBottom: 10}} note>
                  {data.val().content}
                </Text>
              </Card>
            }
          />
        </Content>
      </Container>
    );
  }
}

export default favScreen;
