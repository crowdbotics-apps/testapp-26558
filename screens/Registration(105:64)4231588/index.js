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
      <View style={styles.View_105_75}>
        <View style={styles.View_105_76}>
          <View style={styles.View_105_77}>
            <Text style={styles.Text_105_77}>665 9480498</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_105_79}>
        <Text style={styles.Text_105_79}>Vollständiger Name</Text>
      </View>
      <View style={styles.View_105_81}>
        <Text style={styles.Text_105_81}>Email</Text>
      </View>
      <View style={styles.View_105_82}>
        <View style={styles.View_105_83}>
          <Text style={styles.Text_105_83}>
            Stimmen Sie den Allgemeinen Geschäftsbedingungen zu
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7e3/3156/cccdf9cd06b4b85451f444a1c4127e54"
          }}
          style={styles.ImageBackground_105_84}
        />
      </View>
      <View style={styles.View_201_0}>
        <View style={styles.View_201_1}>
          <Text style={styles.Text_201_1}>Ich bin über 12 Jahre alt</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7e3/3156/cccdf9cd06b4b85451f444a1c4127e54"
          }}
          style={styles.ImageBackground_201_2}
        />
      </View>
      <View style={styles.View_105_86}>
        <View style={styles.View_105_87} />
        <View style={styles.View_105_88}>
          <Text style={styles.Text_105_88}>Weiter</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f79b/dcd2/ecd8c5185de5f0ce4db8b53f16ce452e"
        }}
        style={styles.ImageBackground_111_599}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0a5/8938/07ff50368060dd97e21207a0a72ccc1a"
        }}
        style={styles.ImageBackground_111_601}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0a5/8938/07ff50368060dd97e21207a0a72ccc1a"
        }}
        style={styles.ImageBackground_111_602}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0a5/8938/07ff50368060dd97e21207a0a72ccc1a"
        }}
        style={styles.ImageBackground_112_25}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c22/0a70/ab40cef3ca88279a392f93e64ce92e72"
        }}
        style={styles.ImageBackground_112_22}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc4f/7eb0/821cebd5a8d539b550601761318d520a"
        }}
        style={styles.ImageBackground_112_30}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_105_75: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666666%"),
    top: hp("50.54644808743169%")
  },
  View_105_76: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_105_77: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_105_77: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_105_79: {
    width: wp("36.266666666666666%"),
    minWidth: wp("36.266666666666666%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666666%"),
    top: hp("42.759562841530055%")
  },
  Text_105_79: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_105_81: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666666%"),
    top: hp("58.606557377049185%")
  },
  Text_105_81: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_105_82: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("89.20765027322405%")
  },
  View_105_83: {
    width: wp("50.93333333333333%"),
    minWidth: wp("50.93333333333333%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.800000000000004%"),
    top: hp("0%")
  },
  Text_105_83: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0.39,
    textTransform: "none"
  },
  ImageBackground_105_84: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_201_0: {
    width: wp("49.86666666666667%"),
    minWidth: wp("49.86666666666667%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("84.42622950819673%")
  },
  View_201_1: {
    width: wp("41.06666666666667%"),
    minWidth: wp("41.06666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.800000000000004%"),
    top: hp("0%")
  },
  Text_201_1: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0.39,
    textTransform: "none"
  },
  ImageBackground_201_2: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_105_86: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("96.99453551912568%")
  },
  View_105_87: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_105_88: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333333%"),
    top: hp("1.9125683060109395%")
  },
  Text_105_88: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_111_599: {
    width: wp("3.733333333333334%"),
    height: hp("2.103825475348801%"),
    top: hp("42.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%")
  },
  ImageBackground_111_601: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("46.44808743169399%")
  },
  ImageBackground_111_602: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("54.37158469945356%")
  },
  ImageBackground_112_25: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("62.295081967213115%")
  },
  ImageBackground_112_22: {
    width: wp("3.2%"),
    height: hp("2.9834809850473873%"),
    top: hp("50.13661202185792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%")
  },
  ImageBackground_112_30: {
    width: wp("4.533333333333333%"),
    height: hp("1.6998100801895226%"),
    top: hp("58.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%")
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
