import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Dimensions, Image, TouchableOpacity,BackHandler , AsyncStorage} from 'react-native';
 import Wheelspiner from '../Progress Wheel/Progress';
import styles from '../Styling/HomeStyle';
import HttpUtils from '../Services/HttpUtils';
// import AsyncStorage from '@react-native-community/async-storage';
// import firebase from 'react-native-firebase';

const { height } = Dimensions.get('window');

class Homescreen extends React.Component {
  // static navigationOptions = ({ navigation }) => {
  //   console.log(navigation)
  // };
  constructor(props) {
    super(props);
    this.state = {
      todayData: '',
      yestertdayData: ''
    }

  }



  async componentWillMount() {
    //getting user id from local storage
    let userId;
    AsyncStorage.getItem("currentUser").then(value => {
      if (value) {
        let dataFromLocalStorage = JSON.parse(value);
        userId = dataFromLocalStorage._id;
      }
    });
    //get all excersice log data
    let dataUser = await HttpUtils.get('getallexerciselog');
    let data = dataUser.content;
    //get current date 
    const currentDate = new Date().getDate();
    let currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    if (currentMonth == 1 || currentMonth == 2 || currentMonth == 3 || currentMonth == 4 || currentMonth == 5 || currentMonth == 6 || currentMonth == 7 || currentMonth == 8 || currentMonth == 9) {
      currentMonth = `0${currentMonth}`
    }
    //looping with data
    for (var i in data) {
      let dataApi = data[i];
      //check user id with api data and get current user data
      if (dataApi.userId == userId) {
        //get today & yesterday of excersice from database 
        let currMonth = Number(currentMonth)
        let checkDate = Number(dataApi.dayOfMonth) - currentDate;
        let checkMonth = Number(dataApi.month) - currMonth;
        let checkYear = Number(dataApi.year) - currentYear;
        if (checkDate == 0 && checkMonth == 0 && checkYear == 0) {
          this.setState({
            todayData: dataApi
          })
        }
        else if (checkDate == -1 && checkMonth == 0 && checkYear == 0) {
          this.setState({
            yestertdayData: dataApi
          })
        }
      }
    }
  }
  changeRout(e) {
    const { navigate } = this.props.navigation;
    if (e == 'logexercise') {
      navigate('Exerciselog')
    }
    else if (e == 'stepcount') {
      navigate('StepCountScreen')
    }
  }


//   async componentDidMount() {
//     await this.checkPermission();
//     await this.createNotificationListeners();
//    }
   
//      //1
//     checkPermission= async ()=>{
//      const enabled = await firebase.messaging().hasPermission();
//      if (enabled) {
//          this.getToken();
//      } else {
//          this.requestPermission();
//      }
//    }
   
//      //3
//     getToken =async ()=> {
//      let fcmToken = await AsyncStorage.getItem('fcmToken');
//      if (!fcmToken) {
//          fcmToken = await firebase.messaging().getToken();

//          if (fcmToken) {
//              // user has a device token
//              await AsyncStorage.setItem('fcmToken', fcmToken);
//              console.log('user device token >>>',fcmToken)
//          }
//      }
//    }
   
//      //2
//     requestPermission=async ()=>{
//      try {
//          await firebase.messaging().requestPermission();
//          // User has authorised
//          this.getToken();
//      } catch (error) {
//          // User has rejected permissions
//          console.log('permission rejected');
//      }
   


//  }

//  //Remove listeners allocated in createNotificationListeners()
// componentWillUnmount() {
//   this.notificationListener();
//   this.notificationOpenedListener();
// }

//  createNotificationListeners= async ()=> {
//   /*
//   * Triggered when a particular notification has been received in foreground
//   * */
//   this.notificationListener = firebase.notifications().onNotification((notification) => {
//       const { title, body } = notification;
//       this.showAlert(title, body);
//   });

//   /*
//   * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
//   * */
//   this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
//       const { title, body } = notificationOpen.notification;
//       this.showAlert(title, body);
//   });

//   /*
//   * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
//   * */
//   const notificationOpen = await firebase.notifications().getInitialNotification();
//   if (notificationOpen) {
//       const { title, body } = notificationOpen.notification;
//       this.showAlert(title, body);
//   }
//   /*
//   * Triggered for data only payload in foreground
//   * */
//   this.messageListener = firebase.messaging().onMessage((message) => {
//     //process data message
//     console.log(JSON.stringify(message));
//   });
// }

// showAlert=(title, body)=>{
//   Alert.alert(
//     title, body,
//     [
//         { text: 'OK', onPress: () => console.log('OK Pressed') },
//     ],
//     { cancelable: false },
//   );
// }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

handleBackButton= async ()=>{
    console.log('pressed back button')
    const { navigate } = this.props.navigation;
    const getData = await AsyncStorage.getItem("currentUser");
          // const parsForm = JSON.parse(getData)
          // console.log('current user data >>>',parsForm)
          if(getData){
           navigate('Home')
          }
          else {
            navigate('Login')
          }

}

// componentDidMount() {
//   const { navigation } = this.props;
//   this.focusListener = navigation.addListener('didFocus', () => {
//     // The screen is focused
//     // Call any action
//   });
// }

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress');
}



  render() {
    const { todayData, yestertdayData } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.textStyleOne}>GetFit</Text>
          <Text style={styles.textStyleTwo}>Athletic</Text>
        </View>
        {/* <View style={styles.arrowContainer}>
          <TouchableOpacity style={{ marginRight: 20 }}><Image source={require('../icons/left.png')} style={styles.forImgs} /></TouchableOpacity>
          <Text>Today</Text>
          <TouchableOpacity style={{ marginLeft: 20 }}><Image source={require('../icons/right.png')} style={styles.forImgs} /></TouchableOpacity>
        </View> */}
        <ScrollView style={{ flex: 1, backgroundColor: 'white', height: height }} contentContainerStyle={{ flexGrow: 1 }}  >
          <View style={styles.cardsContainer}>
            <View style={styles.childContainerOne}>
              <TouchableOpacity style={styles.cardOne} onPress={() => { navigate('AddExercise') }}>
                <Image source={require('../icons/log-exer.png')} style={styles.imgsStyle} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardThree} onPress={() => navigate('LogMeasurementsScreen')}>
                <Image source={require('../icons/log-weight.png')} style={styles.imgsStyle} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardFive} onPress={() => navigate('Macrocalculator')}>
                <Image source={require('../icons/calc-macros.png')} style={styles.imgsStyle} />
              </TouchableOpacity>
            </View>
            <View style={styles.childContainerTwo}>
              <TouchableOpacity style={styles.cardTwo} activeOpacity={0.7}
                onPress={this.changeRout.bind(this, 'stepcount')}
              >
                <Text style={styles.cardTwoTextStyle}>Today's {'\n'}step count</Text>
                <View style={styles.whelSpinerContainer}>
                  <Wheelspiner
                    size={65}
                    width={10}
                    color={'#FF6200'}
                    progress={60}
                    backgroundColor={'gray'}
                    animateFromValue={0}
                    fullColor={'#FF6200'}
                  />
                </View>
                <View style={styles.resultContainer}>
                  <Text style={{ 
                    color: '#FF6200', 
                    //fontFamily: 'MontserratLight' 
                    }}>6842</Text>
                  <Text style={{ color: '#a6a6a6', 
                  //fontFamily: 'MontserratLight' 
                  }}>/10,000</Text>
                </View>
                <Text style={{ 
                  color: '#a6a6a6', 
                  marginLeft: 14, 
                  //fontFamily: 'MontserratLight' 
                  }}>steps</Text>
                <View style={styles.detailReport}>
                  <Text style={{ color: '#FFFFFF',
                   //fontFamily: 'MontserratLight', 
                   fontSize: 12, marginTop: 33 }}>View detailed report</Text>
                  <Image source={require('../icons/forward-arrow.png')} style={styles.arrowIcon} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardFour} activeOpacity={0.7}
                onPress={this.changeRout.bind(this, 'logexercise')}
              >
                <Text style={styles.cardFourTextStyle}>{todayData != '' ? `Today's ${'\n'} exercise` : yestertdayData != '' ? `Yesterday's${'\n'} exercise` : `No ${'\n'}exercise`}</Text>
                <Text style={{ color: '#a6a6a6', 
                //fontFamily: 'MontserratLight',
                 marginTop: 20, marginLeft: 14 }}>
                  {todayData != '' ? `${todayData.exerciseName} ${'\n'}exercise` : yestertdayData != '' ? `${yestertdayData.exerciseName} ${'\n'}exercise` : 'No Record Found'}
                </Text>
                <View style={{ borderBottomColor: '#a6a6a6', borderBottomWidth: 1, marginHorizontal: 14, marginTop: 20 }}></View>
                <Text style={{ color: '#FF6200', 
                //fontFamily: 'MontserratLight', 
                marginLeft: 14, marginTop: 10 }}>
                  {todayData != '' ? todayData.exerciseAmount : yestertdayData != '' ? yestertdayData.exerciseAmount : 'No Record Found'}
                </Text>
                <Text style={{ color: '#a6a6a6', marginLeft: 14,
                 //fontFamily: 'MontserratLight' 
                 }}>
                  {todayData != '' ? todayData.exerciseUnit : yestertdayData != '' ? yestertdayData.exerciseUnit : 'No Record Found'}
                </Text>
                <Text style={{ color: '#FFFFFF', 
                //fontFamily: 'MontserratLight', 
                fontSize: 12, marginTop: 20, marginLeft: 14 }}>View detailed report</Text>
                <Image source={require('../icons/forward-arrow.png')} style={styles.lastArrow} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Homescreen;

