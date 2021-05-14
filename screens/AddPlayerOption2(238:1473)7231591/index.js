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
      <View style={styles.View_238_1590} />
      <View style={styles.View_238_1607}>
        <View style={styles.View_238_1608} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1d3/d7c2/dbef7654ea458cde2051bfdc62ea90f1"
          }}
          style={styles.ImageBackground_238_1609}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1d3/d7c2/dbef7654ea458cde2051bfdc62ea90f1"
          }}
          style={styles.ImageBackground_238_1610}
        />
      </View>
      <View style={styles.View_238_1516}>
        <Text style={styles.Text_238_1516}>:</Text>
      </View>
      <View style={styles.View_238_1591}>
        <Text style={styles.Text_238_1591}>Cancel</Text>
      </View>
      <View style={styles.View_238_1593}>
        <Text style={styles.Text_238_1593}>Done</Text>
      </View>
      <View style={styles.View_238_1592}>
        <Text style={styles.Text_238_1592}>Spieler</Text>
      </View>
      <View style={styles.View_238_1602}>
        <View style={styles.View_238_1483}>
          <Text style={styles.Text_238_1483}>Geburtsdatum</Text>
        </View>
        <View style={styles.View_238_1485}>
          <Text style={styles.Text_238_1485}>Team</Text>
        </View>
        <View style={styles.View_238_1486}>
          <View style={styles.View_238_1487}>
            <View style={styles.View_238_1488}>
              <Text style={styles.Text_238_1488}>11</Text>
            </View>
          </View>
          <View style={styles.View_238_1489}>
            <View style={styles.View_238_1490}>
              <Text style={styles.Text_238_1490}>10</Text>
            </View>
          </View>
          <View style={styles.View_238_1491}>
            <View style={styles.View_238_1492}>
              <Text style={styles.Text_238_1492}>09</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_238_1493}>
          <View style={styles.View_238_1494}>
            <View style={styles.View_238_1495}>
              <Text style={styles.Text_238_1495}>00</Text>
            </View>
          </View>
          <View style={styles.View_238_1496}>
            <View style={styles.View_238_1497}>
              <Text style={styles.Text_238_1497}>08</Text>
            </View>
          </View>
          <View style={styles.View_238_1498}>
            <View style={styles.View_238_1499}>
              <Text style={styles.Text_238_1499}>07</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_238_1500}>
          <View style={styles.View_238_1501}>
            <View style={styles.View_238_1502}>
              <Text style={styles.Text_238_1502}>2008</Text>
            </View>
          </View>
          <View style={styles.View_238_1503}>
            <View style={styles.View_238_1504}>
              <Text style={styles.Text_238_1504}>2006</Text>
            </View>
          </View>
          <View style={styles.View_238_1505}>
            <Text style={styles.Text_238_1505}>2007</Text>
          </View>
        </View>
        <View style={styles.View_238_1525}>
          <Text style={styles.Text_238_1525}>Spieler Name</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f79b/dcd2/ecd8c5185de5f0ce4db8b53f16ce452e"
          }}
          style={styles.ImageBackground_238_1526}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e14/45de/a28375f66dc4aee047271cd1ffd05904"
          }}
          style={styles.ImageBackground_238_1528}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e14/45de/a28375f66dc4aee047271cd1ffd05904"
          }}
          style={styles.ImageBackground_238_1529}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cd9/09f6/5ef43a46b7870a15ea9e8769d44ccc20"
          }}
          style={styles.ImageBackground_238_1530}
        />
      </View>
      <View style={styles.View_238_1603}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3130/3542/51d40e31da6f6c8ce3858d32b856c852"
          }}
          style={styles.ImageBackground_238_1604}
        />
        <View style={styles.View_238_1605}>
          <View style={styles.View_238_1606}>
            <Text style={styles.Text_238_1606}>Foto hier</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_238_1590: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("105.05464480874316%"),
    minHeight: hp("105.05464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.8743169398907105%"),
    backgroundColor: "rgba(247, 247, 247, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_238_1607: {
    width: wp("100.00035807291667%"),
    height: hp("30.601092896174865%"),
    top: hp("40.84699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%")
  },
  View_238_1608: {
    width: wp("100%"),
    height: hp("30.601092896174865%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0001953124999999889%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_238_1609: {
    width: wp("100.00035807291667%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_238_1610: {
    width: wp("100.00035807291667%"),
    height: hp("0%"),
    top: hp("30.601092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_238_1516: {
    width: wp("1.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100.26666666666667%"),
    top: hp("12.021857923497267%")
  },
  Text_238_1516: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_238_1591: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7.923497267759563%")
  },
  Text_238_1591: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_238_1593: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%"),
    top: hp("7.923497267759563%")
  },
  Text_238_1593: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_238_1592: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.6%"),
    top: hp("7.923497267759563%")
  },
  Text_238_1592: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_238_1602: {
    width: wp("89.60000000000001%"),
    minWidth: wp("89.60000000000001%"),
    height: hp("20.901639344262296%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("46.31147540983606%")
  },
  View_238_1483: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.34972677595629%")
  },
  Text_238_1483: {
    color: "rgba(142, 142, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_238_1485: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999997%"),
    top: hp("7.6502732240437155%")
  },
  Text_238_1485: {
    color: "rgba(142, 142, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_238_1486: {
    width: wp("12%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.666666666666664%"),
    top: hp("15.983606557377051%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  View_238_1487: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("3.2786885245901587%")
  },
  View_238_1488: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_238_1488: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_238_1489: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%"),
    top: hp("0.546448087431699%")
  },
  View_238_1490: {
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_238_1490: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_238_1491: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%"),
    top: hp("-2.0491803278688607%")
  },
  View_238_1492: {
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_238_1492: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_238_1493: {
    width: wp("12%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.6%"),
    top: hp("15.983606557377051%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  View_238_1494: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333323%"),
    top: hp("3.2786885245901587%")
  },
  View_238_1495: {
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_238_1495: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_238_1496: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333323%"),
    top: hp("0.546448087431699%")
  },
  View_238_1497: {
    width: wp("6.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_238_1497: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_238_1498: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("-2.0491803278688607%")
  },
  View_238_1499: {
    width: wp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_238_1499: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_238_1500: {
    width: wp("17.333333333333336%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%"),
    top: hp("15.983606557377051%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  View_238_1501: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("3.415300546448087%")
  },
  View_238_1502: {
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_238_1502: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_238_1503: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("-2.0491803278688607%")
  },
  View_238_1504: {
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_238_1504: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_238_1505: {
    width: wp("11.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333513%"),
    top: hp("0.546448087431699%")
  },
  Text_238_1505: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_238_1525: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999997%"),
    top: hp("0.1366120218579283%")
  },
  Text_238_1525: {
    color: "rgba(142, 142, 147, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  ImageBackground_238_1526: {
    width: wp("3.733333333333334%"),
    height: hp("2.103825475348801%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_238_1528: {
    width: wp("89.60000000000001%"),
    minWidth: wp("89.60000000000001%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218577%")
  },
  ImageBackground_238_1529: {
    width: wp("89.60000000000001%"),
    minWidth: wp("89.60000000000001%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.20218579234973%")
  },
  ImageBackground_238_1530: {
    width: wp("4.464664713541667%"),
    height: hp("1.366120218579235%"),
    top: hp("8.51800637167009%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.75611979166666%")
  },
  View_238_1603: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("16.530054644808743%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_238_1604: {
    width: wp("37.333333333333336%"),
    height: hp("19.125680975575264%"),
    top: hp("-1.9125683060109289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.666666666666668%")
  },
  View_238_1605: {
    width: wp("16.266666666666666%"),
    height: hp("2.3224043715846996%"),
    top: hp("18.852459016393446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%")
  },
  View_238_1606: {
    width: wp("16.266666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_238_1606: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.28,
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
