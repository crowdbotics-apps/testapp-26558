import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_105_26}>
        <Text style={styles.Text_105_26}>Senden Sie OTP erneut</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e3/a3eb/d4c109107bb5b811278c5b5c124c657f"
        }}
        style={styles.ImageBackground_114_607}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e3/a3eb/d4c109107bb5b811278c5b5c124c657f"
        }}
        style={styles.ImageBackground_114_614}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e3/a3eb/d4c109107bb5b811278c5b5c124c657f"
        }}
        style={styles.ImageBackground_114_615}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e3/a3eb/d4c109107bb5b811278c5b5c124c657f"
        }}
        style={styles.ImageBackground_114_616}
      />
      <View style={styles.View_177_97}>
        <Text style={styles.Text_177_97}>PRISDAL</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce08/a419/e95422d816012a5c58914123a797d7cd"
        }}
        style={styles.ImageBackground_204_97}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c22/0a70/ab40cef3ca88279a392f93e64ce92e72"
        }}
        style={styles.ImageBackground_204_98}
      />
      <View style={styles.View_204_116}>
        <Text style={styles.Text_204_116}>665 9480498</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_105_26: {
    width: wp("41.06666666666667%"),
    minWidth: wp("41.06666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("61.74863387978142%")
  },
  Text_105_26: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_114_607: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("57.513661202185794%")
  },
  ImageBackground_114_614: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("57.513661202185794%")
  },
  ImageBackground_114_615: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.666666666666664%"),
    top: hp("57.513661202185794%")
  },
  ImageBackground_114_616: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.33333333333333%"),
    top: hp("57.513661202185794%")
  },
  View_177_97: {
    width: wp("47.199999999999996%"),
    minWidth: wp("47.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.400000000000002%"),
    top: hp("16.120218579234972%")
  },
  Text_177_97: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_204_97: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("44.53551912568306%")
  },
  ImageBackground_204_98: {
    width: wp("3.2%"),
    height: hp("2.9834809850473873%"),
    top: hp("40.16393442622951%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%")
  },
  View_204_116: {
    width: wp("33.6%"),
    minWidth: wp("33.6%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("40.30054644808743%")
  },
  Text_204_116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.54,
    textTransform: "none"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
