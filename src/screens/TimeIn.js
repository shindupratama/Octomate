import React, { Component } from 'react';
import { ActivityIndicator, PermissionsAndroid, TouchableOpacity, View } from 'react-native';
import { Icon, Text } from 'native-base';
import { connect } from 'react-redux';
import { RNCamera } from 'react-native-camera';
import Geolocation from 'react-native-geolocation-service';

class TimeIn extends Component {
  state = {
    latitude: null,
    longitude: null
  }

  componentDidMount() {
    if ( PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION) ) {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log('position', position);
          this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude});
          console.log('lat & long', this.state.latitude, this.state.longitude);
        },
        (error) => {
          // See error code charts below.
          console.log('error geolocation', error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'black'}}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}
            type={RNCamera.Constants.Type.front}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log(barcodes);
            }}
          />
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={{flex: 0, backgroundColor: '#000', borderRadius: 5, padding: 0, paddingHorizontal: 20, alignSelf: 'center', margin: 10}}>
              <Icon type='MaterialIcons' name='camera' style={{color: '#fff', fontSize: 50}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Map', {lat: this.state.latitude, lng: this.state.longitude})} style={{flex: 0, backgroundColor: '#000', borderRadius: 5, padding: 15, paddingHorizontal: 20, alignSelf: 'center', margin: 10}}>
              <Text style={{ fontSize: 18, color: '#fff' }}> Next </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.login.loading,
    error: state.login.error,
    email: state.login.email,
    password: state.login.password
  };
};

TimeIn = connect(mapStateToProps, {})(TimeIn);

export {TimeIn};