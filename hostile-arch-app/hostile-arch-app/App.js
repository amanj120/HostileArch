import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import Picture from "./components/Picture";
import Email from "./components/Email";
import Location from "./components/Location";
import Camera from "./components/Camera";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      camera: false,
      imgBase64: null,
      location: false,
      lat: null,
      long: null
    };
  }

  changeBase64 = newBase64 => {
    this.setState({
      imgBase64: newBase64
    });
  };

  changeLat = newLat => {
    this.setState({
      lat: newLat
    });
  };

  changeLong = newLong => {
    this.setState({
      long: newLong
    });
  };

  handleClick = event => {
    this.setState({
      location: true
    });
  };

  onChangeText = (text) => {
    this.setState({
      description: text
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.location === true && (
          <Location
            changeLat={this.changeLat.bind(this)}
            changeLong={this.changeLong.bind(this)}
          />
        )}
        <Camera changeBase64={this.changeBase64.bind(this)} />
        <Button
          title="Get Location"
          onPress={e => this.handleClick(e)}
        ></Button>
        <TextInput placeholder="Enter image description here!"
          style={styles.description}
          onChangeText={text => this.onChangeText(text)}
        />
        <TextInput placeholder="Enter email address! (Optional)"
          style={styles.email}
          onChangeText={text => this.onChangeText(text)}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    marginBottom: 5
  },
  description: {
    height: 40, 
    width: 480,
    borderColor: 'gray', 
    borderWidth: 1,
    borderBottomWidth: 0.45,
    textAlign: "center",
    marginLeft: 10

  },
  email: {
    height: 40, 
    width: 480,
    borderColor: 'gray', 
    borderWidth: 1,
    borderTopWidth: 0.45,
    textAlign: "center",
    marginLeft: 10,
  }
});
