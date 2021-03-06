import React from 'react';
import { Alert, StyleSheet, Dimensions, Platform } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        width: screenWidth,
        height: screenHight
    },
    childMainContainer: {
        flex: 1,
        marginHorizontal: 15
    },
    scrollContainer: {
        // flex: 1,
        backgroundColor: 'white',
        height: screenHight,

    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    textInputContainer: {
        flexDirection: 'row',

    },
    inputStyle: {
        flex: 1,
        height: 45,
        paddingLeft: 16,
        backgroundColor: '#e5e5e5',
        color: '#4f4f4f',
        borderBottomLeftRadius: 3,
        borderTopLeftRadius: 3
    },
    sentBtnContainer: {
        width: 45,
        height: 45,
        borderRadius: 45 / 2,
        backgroundColor: '#FF6200',
        justifyContent: 'center',
        alignItems: 'center'
    },
    micIconStyle: {
        flex: 1,
        width: 15,
        height: 15,
        resizeMode: 'contain'
    },
    sendIconStyle: {
        flex: 1,
        width: 27,
        height: 23,
        resizeMode: 'contain'
    },
    orangeMicContainer: {
        width: 45,
        height: 45,
        borderRadius: 45 / 2,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    recordingContainer: {
        height: 120,
        borderRadius: 5,
        backgroundColor: '#e5e5e5',
        marginBottom: 30
    },
    msgsTextStyle: {
        padding: 10,
        color: '#A6A6A6',
        fontFamily: 'MontserratLight',
        marginBottom: 10,
        marginLeft: '50%',
        backgroundColor: 'black',
        borderRadius: 10
    },
    replyMessagesStyle: {
        padding: 10,
        color: '#4f4f4f',
        fontFamily: 'MontserratLight',
        marginBottom: 10,
        marginRight: '45%',
        backgroundColor: '#e5e5e5',
        borderRadius: 10
    },
    mgsImges: {
        padding: 10,
        color: '#A6A6A6',
        marginBottom: 20,
        borderRadius: 5,
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    replymgsImges: {
        padding: 10,
        color: '#4f4f4f',
        marginBottom: 20,
        marginRight: '50%',
        borderRadius: 5,
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    expandImges: {
        padding: 60,
        margin: 10,
        borderRadius: 10,
        width: '80%',
        height: '80%',
        resizeMode: 'contain'
    },
    mgsTouctable: {
        marginBottom: 20,
        width: 200,
        marginLeft: '35%',
    },
    fileTagStyle: {
        padding: 10,
        backgroundColor: 'black',
        borderRadius: 10,
        marginVertical: 10,
        flexDirection: 'row',
    },
    extensionFile: {
        color: '#ffffff',
        backgroundColor: '#807c7c',
        width: 80,
        height: 90,
        borderRadius: 10,
        marginVertical: 10

    },
    thumbnailImageStyle: {
        padding: 10,
        margin: 13,
        justifyContent: 'center',
        // marginVertical: 10
    },
    thumbnailNameTextStyle: {
        padding: 10,
        fontSize: 14,
        color: '#ff6200',
        fontFamily: 'MontserratMedium',
        marginRight: '35%',
        marginVertical: 15,
        justifyContent: 'center',
    },
    backgroundVideo: {
        //position: 'absolute',
        top: 1,
        left: 1,
        bottom: 1,
        right: 1,
        // marginBottom:12,
        // marginLeft: '30%',
        resizeMode: "contain",
        
    },
    videoTagMgs: {
        // width: 150,
        height: 150,
        marginBottom: 12,
        marginLeft: '30%',
        // backgroundColor:"#e5e5e5"
    },
    largeVideoSize:{
        height: 150,
        marginBottom: 12,
       
    },
    //week excersice
    cardRight: {
        // flex: 1,
        //backgroundColor:'pink',
        marginLeft: '30%',
        marginVertical: 10
    },
    totalExerciseContainer: {
        //    borderWidth:2,
        //    borderColor:'black',
        borderRadius: 3,
        backgroundColor: 'black'
    },
    totalExercisHeading: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 20,
        color: 'white',
        fontFamily: "MontserratMedium",
    },
    exerciseResultCard: {
        borderBottomWidth: 1.5,
        borderColor: '#a6a6a6',
        height: 60,
        marginBottom: 12,
        marginLeft: 10,
        width: '90%',
        marginVertical: 10
    },
    resultHeading: {
        color: '#a6a6a6',
        fontFamily: 'MontserratLight',
        fontSize: 12
    },
    dataResultParent: {
        flexDirection: 'row'
    },
    timeShowContainer: {
        flexDirection: 'row',
        borderRightWidth: 0.5,
        borderColor: '#a6a6a6',
        width: 70,
        height: 25,
        //    marginTop:3
    },
    timeShow: {
        color: '#a6a6a6',
        fontFamily: 'MontserratLight',
        fontSize: 11,
        marginTop: 4
    },
    dateAndMonth: {
        flexDirection: 'row',
        borderLeftWidth: 0.5,
        borderColor: '#a6a6a6',
        width: 65,
        height: 25,
    },
    dateAndMonthShow: {
        color: '#a6a6a6',
        fontFamily: 'MontserratLight',
        fontSize: 11,
        marginTop: 4,
        marginLeft: 8
    },
    dateNumber: {
        fontSize: 11,
        lineHeight: 23,
        marginLeft: 4,
        color: '#a6a6a6',
        fontFamily: 'MontserratLight',
        marginVertical: 5
    },
    superScriptTextStyle: {
        fontSize: 9,
        lineHeight: 14,
        color: '#a6a6a6',
        fontFamily: 'MontserratLight',
    },
    weightStatus: {
        //borderWidth:2,
        //borderColor:'black',
        borderRadius: 3,
        marginTop: 15,
        height: 290,
        backgroundColor: 'black',
        marginBottom: 15

    },
    headingText: {
        marginLeft: 12,
        marginTop: 12,
        color: 'white',
        fontFamily: "MontserratMedium",
        fontSize: 20
    },
    statusGraphContainer: {
        marginTop: 8,
        // backgroundColor:'black'
    },
    midBox: {
        //   borderWidth:1,
        height: 110,
        marginHorizontal: 10,

    },
    borderLines1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 12,
        flexWrap: 'wrap',
        //    borderWidth:1,
        //    borderColor:'white',
        height: 22,
        width: '85%',
        //    marginLeft:14
    },
    kgTextOne: {
        color: '#FF6200',
        fontFamily: 'MontserratLight',

    },
    kgTextTwo: {
        color: '#a6a6a6',
        fontFamily: 'MontserratLight'
    },
    weeksTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //borderWidth:1,
        //    borderColor:'white',
        height: 30,
        width: '87%',
        marginLeft: 12,
    },
    thisWeek: {
        color: '#a6a6a6',
        fontFamily: 'MontserratLight',
        fontSize: 11

    },
    lastWeek: {
        color: '#a6a6a6',
        fontFamily: 'MontserratLight',
        fontSize: 11

    },
    lostKg: {
        color: '#FF6200',
        fontFamily: 'MontserratLight',
        marginLeft: 14,
    },
    lostText: {
        color: '#a6a6a6',
        fontFamily: 'MontserratLight',
        marginLeft: 14,
        fontSize: 11
    },
    replymgsTouctable: {
        marginBottom: 20,
        width: 200,
        marginRight: '35%',
    },
    replyfileTagStyle: {
        padding: 10,
        backgroundColor: '#e5e5e5',
        borderRadius: 10,
        flexDirection: 'row',
    },
    replyextensionFile: {
        color: '#4f4f4f',
        backgroundColor: '#000000',
        width: 80,
        height: 90,
        borderRadius: 10,
        marginVertical: 10
    },
    replythumbnailImageStyle: {
        padding: 10,
        margin: 13,
        justifyContent: 'center',
    },
    replythumbnailNameTextStyle: {
        padding: 10,
        fontSize: 14,
        color: '#4f4f4f',
        fontFamily: 'MontserratMedium',
        marginRight: '35%',
        marginVertical: 15,
        justifyContent: 'center',
    },
    replyvideoTagMgs: {
        // width: 150,
        // height: 150,
        marginBottom: 12,
        marginRight: '30%',
    },
    //week excersice
    //week excersice
    replycardRight: {
        // flex: 1,
        //backgroundColor:'pink',
        marginRight: '30%',
        marginVertical: 10
    },
    replytotalExerciseContainer: {
        //    borderWidth:2,
        //    borderColor:'black',
        borderRadius: 3,
        backgroundColor: '#e5e5e5'
    },
    replytotalExercisHeading: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 20,
        color: 'black',
        fontFamily: "MontserratMedium",
    },
    replyexerciseResultCard: {
        borderBottomWidth: 1.5,
        borderColor: '#a6a6a6',
        height: 60,
        marginBottom: 12,
        marginLeft: 10,
        width: '90%',
        marginVertical: 10
    },
    replyresultHeading: {
        color: '#000000',
        fontFamily: 'MontserratLight',
        fontSize: 12
    },
    replydataResultParent: {
        flexDirection: 'row'
    },
    replytimeShowContainer: {
        flexDirection: 'row',
        borderRightWidth: 0.5,
        borderColor: '#000000',
        width: 70,
        height: 25,
        //    marginTop:3
    },
    replytimeShow: {
        color: '#000000',
        fontFamily: 'MontserratLight',
        fontSize: 11,
        marginTop: 4
    },
    replydateAndMonth: {
        flexDirection: 'row',
        borderLeftWidth: 0.5,
        borderColor: '#000000',
        width: 65,
        height: 25,
    },
    replydateAndMonthShow: {
        color: '#000000',
        fontFamily: 'MontserratLight',
        fontSize: 11,
        marginTop: 4,
        marginLeft: 8
    },
    replydateNumber: {
        fontSize: 11,
        lineHeight: 23,
        marginLeft: 4,
        color: '#000000',
        fontFamily: 'MontserratLight',
        marginBottom: 5
    },
    replysuperScriptTextStyle: {
        fontSize: 9,
        lineHeight: 14,
        color: '#000000',
        fontFamily: 'MontserratLight',
    },
    replycardContainer: {
        width: 400,
        borderRadius: 5,
        padding: 15
    },
    replydateWithCancelIcon: {
        flexDirection: 'row',
    },

    replyweightStatus: {
        //borderWidth:2,
        //borderColor:'black',
        borderRadius: 3,
        marginTop: 15,
        height: 290,
        backgroundColor: '#e5e5e5',
        marginBottom: 15

    },
    replyheadingText: {
        marginLeft: 12,
        marginTop: 12,
        color: 'black',
        fontFamily: "MontserratMedium",
        fontSize: 20
    },
    replystatusGraphContainer: {
        marginTop: 8,
        // backgroundColor:'black'
    },
    replymidBox: {
        //   borderWidth:1,
        height: 110,
        marginHorizontal: 10,

    },
    replyborderLines1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 12,
        flexWrap: 'wrap',
        //    borderWidth:1,
        //    borderColor:'white',
        height: 22,
        width: '85%',
        //    marginLeft:14
    },
    replykgTextOne: {
        color: '#000000',
        fontFamily: 'MontserratLight',

    },
    replykgTextTwo: {
        color: '#000000',
        fontFamily: 'MontserratLight'
    },
    replyweeksTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //borderWidth:1,
        //    borderColor:'white',
        height: 30,
        width: '87%',
        marginLeft: 12,
    },
    replythisWeek: {
        color: '#000000',
        fontFamily: 'MontserratLight',
        fontSize: 11

    },
    replylastWeek: {
        color: '#000000',
        fontFamily: 'MontserratLight',
        fontSize: 11

    },
    replylostKg: {
        color: '#000000',
        fontFamily: 'MontserratLight',
        marginLeft: 14,
    },
    replylostText: {
        color: '#000000',
        fontFamily: 'MontserratLight',
        marginLeft: 14,
        fontSize: 11
    },

    fileAttachContainer: {
        height: 44,
        marginRight: 10,
        backgroundColor: '#e5e5e5',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 3,
        borderTopRightRadius: 3
    },
    attachFileIcon: {
        flex: 1,
        width: 23,
        height: 23,
        resizeMode: 'contain',
        paddingRight: 5

    },
    orangeAttachFiel: {
        width: 40,
        height: 40,
        //borderWidth:3,
        //borderColor:'#FF6200',
        borderRadius: 40 / 2,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sendFielsTypeContainer: {
        marginBottom: 15,
        height: 100,
        marginLeft: 100,
        marginRight: 55,
        borderRadius: 3,
        backgroundColor: 'black'
    },
    shareTextStyle: {
        color: '#A6A6A6',
        fontFamily: 'MontserratLight',
        marginTop: 10,
        marginLeft: 20
    },
    filesContainer: {
        //flex:1,
        marginTop: 15,
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between'
    },
    attachFilesStyle: {
        // flex: 1,
        width: 23,
        height: 30,
        resizeMode: 'contain',

    },
    chatProfileContainer: {
        height: 50,
        //backgroundColor:'red',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profileNameStyle: {
        marginVertical: 12,
        // fontSize: 20,
        fontFamily: "MontserratExtraBold",
        // fontSize: 23,
        color: '#000000'

    },
    profilPicStyle: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        marginVertical: 8

    },
    profilPicContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        marginTop: 10,
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },
    photoContainer: {
        height: 100,
        width: 230,
        resizeMode: 'contain',

    },

    showPhotoContainer: {
        marginLeft: '45%',
        marginBottom: 20
    },
    replyshowPhotoContainer: {
        marginRight: '45%',
        marginBottom: 20
    },
    canvas: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        marginVertical: 25,
        // color: '#A6A6A6',
        marginBottom: 20,
        marginLeft: '50%',
        borderRadius: 10,
        width: 250,
        height: 350
    },
    withOutTrainerModal: {
        width: 250,
        //justifyContent:'center',
        height: 120,
        borderRadius: 5,
        backgroundColor: '#000000',
        alignSelf: 'center',


    },
    textColor: {
        fontFamily: "MontserratMedium",
        fontSize: 14,
        color: 'white',

    },
    nameContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 20
    },
    name: {
        fontFamily: "MontserratExtraBold",
        fontSize: 14,
        color: 'black',
        marginLeft: 10,
        marginVertical: 10
    },
    activaterContainer: {
        flex: 1,
        justifyContent: 'center'
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
      },
      spinnerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
      },
      spinnerTextStyle:{
        color: '#FF6200',
      },
      overLayStyle:{
          color:'white',
          opacity:0.3
      }
});

export default styles;
