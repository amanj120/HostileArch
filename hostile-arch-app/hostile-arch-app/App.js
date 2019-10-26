import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import Picture from "./components/Picture";
import Email from "./components/Email";
import Location from "./components/Location";
import Camera from "./components/Camera";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      camera: false,
      location: false,
      lat: null,
      long: null
    };
  }

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

  openCamera = event => {
    this.setState({
      camera: true
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello</Text>
        <Button
          title="Get Location"
          onPress={e => this.handleClick(e)}
        ></Button>
        {this.state.location === true && (
          <Location
            lat={this.state.lat}
            long={this.state.long}
            changeLat={this.changeLat.bind(this)}
            changeLong={this.changeLong.bind(this)}
          />
        )}
        <Text style={styles.welcome}>
          Longitude: {this.state.long}, Latitude: {this.state.lat}
        </Text>
        <Button title="Take Picture" onPress={e => this.openCamera(e)} />
        {this.state.camera === true && <Camera />}
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
  }
});
