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
      <View style={styles.View_105_4}>
        <View style={styles.View_I105_4_36_1392}>
          <View style={styles.View_I105_4_36_1393}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a98/8cb4/efec87dc6a00aea2c06c97e2f8082ac9"
              }}
              style={styles.ImageBackground_I105_4_36_1394}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e5/b05f/ea75ef4f9849cc276d591680d7791261"
              }}
              style={styles.ImageBackground_I105_4_36_1397}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdd8/b009/66d689ba54ff7c70f6ae095f9b7e4787"
              }}
              style={styles.ImageBackground_I105_4_36_1398}
            />
          </View>
        </View>
        <View style={styles.View_I105_4_36_1317}>
          <Text style={styles.Text_I105_4_36_1317}>100%</Text>
        </View>
        <View style={styles.View_I105_4_36_1318}>
          <Text style={styles.Text_I105_4_36_1318}>1:20 PM</Text>
        </View>
        <View style={styles.View_I105_4_36_1320}>
          <Text style={styles.Text_I105_4_36_1320}>Carrier</Text>
        </View>
        <View style={styles.View_I105_4_36_1384}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/718a/4236/aaf9d2fe5aca68d62d2e14345fe4344c"
            }}
            style={styles.ImageBackground_I105_4_36_1385}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8a5/ea82/29d810f66984e27f9844163e6e00d9fa"
            }}
            style={styles.ImageBackground_I105_4_36_1386}
          />
        </View>
        <View style={styles.View_I105_4_36_1377}>
          <View style={styles.View_I105_4_36_1378}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
              }}
              style={styles.ImageBackground_I105_4_36_1379}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
              }}
              style={styles.ImageBackground_I105_4_36_1382}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
              }}
              style={styles.ImageBackground_I105_4_36_1383}
            />
          </View>
        </View>
        <View style={styles.View_I105_4_36_1372}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ba/0433/2bbb192a4666e3fd84bfb293b01e2767"
            }}
            style={styles.ImageBackground_I105_4_36_1373}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb45/c0df/0a274194297fd91d3f9a8b36ef1ba103"
          }}
          style={styles.ImageBackground_I105_4_36_1370}
        />
        <View style={styles.View_I105_4_36_1365}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4145/c072/f35964dd209a09f9e4f5e7352bfb8c98"
            }}
            style={styles.ImageBackground_I105_4_36_1366}
          />
        </View>
        <View style={styles.View_I105_4_36_1359}>
          <View style={styles.View_I105_4_36_1360}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f432/1bcd/adb610f0f8fc25901b910af7888cbacd"
              }}
              style={styles.ImageBackground_I105_4_36_1361}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9441/1445/59625de16e461d60391b2fc74076b7cd"
              }}
              style={styles.ImageBackground_I105_4_36_1364}
            />
          </View>
        </View>
      </View>
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
  View_105_4: {
    width: wp("100%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I105_4_36_1392: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.66666666666666%"),
    top: hp("0.4098360655737705%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I105_4_36_1393: {
    width: wp("7.066666666666667%"),
    minWidth: wp("7.066666666666667%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000114%"),
    top: hp("0.20491803278688525%")
  },
  ImageBackground_I105_4_36_1394: {
    width: wp("6.4%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I105_4_36_1397: {
    width: wp("0.4%"),
    height: hp("0.6694385914203248%"),
    top: hp("0.45079299009562834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666657%")
  },
  ImageBackground_I105_4_36_1398: {
    width: wp("5.333333333333334%"),
    height: hp("1.0245901639344261%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  View_I105_4_36_1317: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%"),
    top: hp("0.4508263426400273%")
  },
  Text_I105_4_36_1317: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I105_4_36_1318: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%"),
    top: hp("0.4098360655737705%")
  },
  Text_I105_4_36_1318: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I105_4_36_1320: {
    flexGrow: 1,
    width: wp("10.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("0.4508263426400273%")
  },
  Text_I105_4_36_1320: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I105_4_36_1384: {
    flexGrow: 1,
    width: wp("5.6000000000000005%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666667%"),
    top: hp("0.4098360655737705%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I105_4_36_1385: {
    width: wp("0.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.133333333333334%")
  },
  ImageBackground_I105_4_36_1386: {
    width: wp("3.2%"),
    height: hp("1.092896174863388%"),
    top: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333334%")
  },
  View_I105_4_36_1377: {
    flexGrow: 1,
    width: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("0.4098360655737705%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I105_4_36_1378: {
    width: wp("2.666666666666667%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%")
  },
  ImageBackground_I105_4_36_1379: {
    width: wp("2.3333333333333335%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908469948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1653340657552178%")
  },
  ImageBackground_I105_4_36_1382: {
    width: wp("0.563995361328125%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I105_4_36_1383: {
    width: wp("0.5653223037719727%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1013448079427093%")
  },
  View_I105_4_36_1372: {
    flexGrow: 1,
    width: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("0.4098360655737705%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I105_4_36_1373: {
    width: wp("1.8532292683919271%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.15295476861338797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8116516113281165%")
  },
  ImageBackground_I105_4_36_1370: {
    flexGrow: 1,
    width: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.39999999999999%"),
    top: hp("0.4098360655737705%")
  },
  View_I105_4_36_1365: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333334%"),
    top: hp("0.4098360655737705%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I105_4_36_1366: {
    width: wp("3.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I105_4_36_1359: {
    flexGrow: 1,
    width: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.4%"),
    top: hp("0.4098360655737705%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I105_4_36_1360: {
    width: wp("3.182666778564453%"),
    height: hp("1.400273224043716%"),
    top: hp("0.2568145918715846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29866739908852935%")
  },
  ImageBackground_I105_4_36_1361: {
    width: wp("3.1826822916666666%"),
    height: hp("1.400273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I105_4_36_1364: {
    width: wp("0.5333333333333333%"),
    height: hp("0.25614754098360654%"),
    top: hp("0.3750160092213114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1000000000000085%")
  },
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
