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
      <View style={styles.View_105_5}>
        <Text style={styles.Text_105_5}>PRISDAL</Text>
      </View>
      <View style={styles.View_250_3}>
        <Text style={styles.Text_250_3}>Golasso</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_105_5: {
    width: wp("56.53333333333334%"),
    minWidth: wp("56.53333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.666666666666664%"),
    top: hp("15.573770491803279%")
  },
  Text_105_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_250_3: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("23.36065573770492%")
  },
  Text_250_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.42,
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
