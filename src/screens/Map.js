import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, Image, ImageBackground, PermissionsAndroid, StyleSheet, TouchableOpacity, View } from 'react-native';
import { CheckBox, Body, Form, Icon, ListItem, Input, Button, Text, Textarea } from 'native-base';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import moment from 'moment/min/moment-with-locales';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import { WebView } from 'react-native-webview';
import OpenStreetMap from '../external/OpenStreetMap';
import Api from '../api/Api';

class Map extends Component {
  constructor(props) {
    super(props);
    this.webView = React.createRef();
    this.refs;
    Geocoder.init("AIzaSyD1fwMREAgYJeff4k5Hj57c3iwOXDxOex4");
  }

  state = {
    isModalVisible: false,
    date: moment(new Date()).format('YYYY-MM-DD HH:mm'),
    latitude: null,
    longitude: null,
    newLocation: false,
    loading: false,
    address: ''
  }

  async componentDidMount() {
    const {lat, lng} = this.props.route.params;

    if( PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Permission to access location",
        message: "We need your permission to access your location",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    ) == 'granted' ) {
      this.getPosition();
    }

    if ( PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION) ) {
      this.getPosition();
    }

    this.getAddress(lat, lng);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('hi there', this.state.latitude, this.state.longitude)
    if(prevState.latitude != this.state.latitude && prevState.longitude != this.state.longitude) {
      console.log('update', this.state.latitude, this.state.longitude)
      Geocoder.from(this.state.latitude, this.state.longitude)
        .then(json => {
                var addressComponent = json.results[0].address_components[0];
          console.log('address :', addressComponent);
        })
        .catch(error => console.log('error address', error));
    }

    if(prevState.loading != this.state.loading) {
      this.getAddress(this.state.latitude, this.state.longitude);
      console.log('address called :');
    }

    // if(prevState.newLocation != this.state.newLocation) {
    //   this.getLocation(this.state.latitude, this.state.longitude);
    //   this.getAddress(this.state.latitude, this.state.longitude);
    //   console.log('location & address called :');
    // }
  }

  getPosition = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log('position', position);
        this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude});
        console.log('latlong', this.state.latitude, this.state.longitude);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  getLocation = (lat, lng) => {
    this.refs['Map_Ref'].injectJavaScript(`
      mymap.setView([${lat}, ${lng}], 10)
      L.marker([${lat}, ${lng}]).addTo(mymap)
    `)
  }

  getAddress = async (lat, lng) => {
    let api = new Api();
    const response = await api.getAddress(lat, lng)
    console.log('response is', response);
    this.setState({ address: response.data.display_name, loading: false })
  }

  onNewLocationPressed = () => {
    this.getLocation(this.state.latitude, this.state.longitude);
    this.getAddress(this.state.latitude, this.state.longitude);
    this.setState({newLocation: !this.state.newLocation})
  }

  render() {
    console.log('render')
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        {/* <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            // style={styles.map}
            style={{height: 300, width: Dimensions.get('window').width}}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
          </MapView>
        </View> */}
        <View style={{flex: 1, paddingRight: 7}}>
          <WebView ref={'Map_Ref'}  source={{html: OpenStreetMap }} />
          {/* <WebView ref={'Map_Ref'} source={{uri: 'https://leafletjs.com/examples/quick-start/example.html'}} /> */}
        </View>
        <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
          {this.state.address == '' && <Text style={{fontWeight: 'bold', paddingBottom: 5}}>Searching for location...</Text>}
          {this.state.address != '' && <Text style={{fontSize: 16, fontWeight: 'bold', paddingBottom: 5}}>{this.state.address}</Text>}
          <Text style={{color: '#5cb8b2', fontWeight: 'bold'}}>{moment(this.state.date).format('LTS')}</Text>
          <Button style={{backgroundColor: '#5cb8b2', borderRadius: 5, margin: 10, alignSelf: 'center'}} onPress={() => this.setState({isModalVisible: !this.state.isModalVisible})}>
            {!this.props.loading && <Text uppercase={false} style={{color: '#fff', fontWeight: 'bold'}}>Confirm Time In</Text>}
            {this.props.loading && <ActivityIndicator size="large" color="#fff" />}
          </Button>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#969696'}}>Not Correct? </Text>
            <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => this.onNewLocationPressed()}>
              <Text style={{color: '#969696', textDecorationLine: 'underline', alignSelf: 'center'}}>Recapture Location</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 0}}>
          <Modal isVisible={this.state.isModalVisible} onBackdropPress={() => this.setState({isModalVisible: !this.state.isModalVisible})}>
            <View style={{justifyContent: 'center', borderRadius: 5, backgroundColor: '#fff'}}>
              <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 10}}>
                <Icon type='AntDesign' name='checkcircleo' style={{color: '#5cb8b2', marginBottom: 5}} />
                <Text style={{fontWeight: 'bold'}}>Time In Success</Text>
                <Text style={{paddingLeft: 10}}>{moment(this.state.date).format('llll')}</Text>
              </View>
              <View style={{margin: 10}}>
                <Text style={{fontWeight: 'bold'}}>Enter remarks below, if any</Text>
                <Form>
                  <Textarea rowSpan={5} bordered placeholder="Type Remarks" />
                </Form>
              </View>
              <ListItem noBorder style={{paddingTop: 0, paddingBottom: 0}}>
                <CheckBox checked={true} color="red" />
                <Body>
                  <Text style={{color: 'red'}}>Please tick this box if you have an approved extension from your manager or it will not be paid out</Text>
                </Body>
              </ListItem>
              <View style={{marginTop: 10, marginBottom: 15, borderBottomColor: '#ddd', borderBottomWidth: 1}} />
              <Button transparent style={{alignSelf: 'center'}} onPress={() => this.props.navigation.navigate('Profile')}>
                <Text style={{color: '#5cb8b2', fontWeight: 'bold'}}>Go Back To Home Page</Text>
              </Button>
            </View>
          </Modal>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    // height: 300,
    // width: Dimensions.get('window').width,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const mapStateToProps = (state) => {
  return {
    loading: state.login.loading,
    error: state.login.error,
    email: state.login.email,
    password: state.login.password
  };
};

Map = connect(mapStateToProps, {})(Map);

export {Map};