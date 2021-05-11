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
      <View style={styles.View_105_27}>
        <View style={styles.View_I105_27_36_1640}>
          <View style={styles.View_I105_27_36_1641}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a98/8cb4/efec87dc6a00aea2c06c97e2f8082ac9"
              }}
              style={styles.ImageBackground_I105_27_36_1642}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e5/b05f/ea75ef4f9849cc276d591680d7791261"
              }}
              style={styles.ImageBackground_I105_27_36_1645}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdd8/b009/66d689ba54ff7c70f6ae095f9b7e4787"
              }}
              style={styles.ImageBackground_I105_27_36_1646}
            />
          </View>
        </View>
        <View style={styles.View_I105_27_36_1565}>
          <Text style={styles.Text_I105_27_36_1565}>100%</Text>
        </View>
        <View style={styles.View_I105_27_36_1566}>
          <Text style={styles.Text_I105_27_36_1566}>1:20 PM</Text>
        </View>
        <View style={styles.View_I105_27_36_1568}>
          <Text style={styles.Text_I105_27_36_1568}>Carrier</Text>
        </View>
        <View style={styles.View_I105_27_36_1632}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/718a/4236/aaf9d2fe5aca68d62d2e14345fe4344c"
            }}
            style={styles.ImageBackground_I105_27_36_1633}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8a5/ea82/29d810f66984e27f9844163e6e00d9fa"
            }}
            style={styles.ImageBackground_I105_27_36_1634}
          />
        </View>
        <View style={styles.View_I105_27_36_1625}>
          <View style={styles.View_I105_27_36_1626}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
              }}
              style={styles.ImageBackground_I105_27_36_1627}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
              }}
              style={styles.ImageBackground_I105_27_36_1630}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
              }}
              style={styles.ImageBackground_I105_27_36_1631}
            />
          </View>
        </View>
        <View style={styles.View_I105_27_36_1620}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ba/0433/2bbb192a4666e3fd84bfb293b01e2767"
            }}
            style={styles.ImageBackground_I105_27_36_1621}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb45/c0df/0a274194297fd91d3f9a8b36ef1ba103"
          }}
          style={styles.ImageBackground_I105_27_36_1618}
        />
        <View style={styles.View_I105_27_36_1613}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4145/c072/f35964dd209a09f9e4f5e7352bfb8c98"
            }}
            style={styles.ImageBackground_I105_27_36_1614}
          />
        </View>
        <View style={styles.View_I105_27_36_1607}>
          <View style={styles.View_I105_27_36_1608}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f432/1bcd/adb610f0f8fc25901b910af7888cbacd"
              }}
              style={styles.ImageBackground_I105_27_36_1609}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9441/1445/59625de16e461d60391b2fc74076b7cd"
              }}
              style={styles.ImageBackground_I105_27_36_1612}
            />
          </View>
        </View>
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
  View_105_27: {
    width: wp("100%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I105_27_36_1640: {
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
  View_I105_27_36_1641: {
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
  ImageBackground_I105_27_36_1642: {
    width: wp("6.4%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I105_27_36_1645: {
    width: wp("0.4%"),
    height: hp("0.6694385914203248%"),
    top: hp("0.45079299009562834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666657%")
  },
  ImageBackground_I105_27_36_1646: {
    width: wp("5.333333333333334%"),
    height: hp("1.0245901639344261%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  View_I105_27_36_1565: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%"),
    top: hp("0.4508263426400273%")
  },
  Text_I105_27_36_1565: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I105_27_36_1566: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%"),
    top: hp("0.4098360655737705%")
  },
  Text_I105_27_36_1566: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I105_27_36_1568: {
    flexGrow: 1,
    width: wp("10.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("0.4508263426400273%")
  },
  Text_I105_27_36_1568: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I105_27_36_1632: {
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
  ImageBackground_I105_27_36_1633: {
    width: wp("0.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.133333333333334%")
  },
  ImageBackground_I105_27_36_1634: {
    width: wp("3.2%"),
    height: hp("1.092896174863388%"),
    top: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333334%")
  },
  View_I105_27_36_1625: {
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
  View_I105_27_36_1626: {
    width: wp("2.666666666666667%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%")
  },
  ImageBackground_I105_27_36_1627: {
    width: wp("2.3333333333333335%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908469948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16533203125000284%")
  },
  ImageBackground_I105_27_36_1630: {
    width: wp("0.563995361328125%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I105_27_36_1631: {
    width: wp("0.5653223037719727%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.10135091145834%")
  },
  View_I105_27_36_1620: {
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
  ImageBackground_I105_27_36_1621: {
    width: wp("1.8532292683919271%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.15295476861338797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8116536458333314%")
  },
  ImageBackground_I105_27_36_1618: {
    flexGrow: 1,
    width: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.39999999999999%"),
    top: hp("0.4098360655737705%")
  },
  View_I105_27_36_1613: {
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
  ImageBackground_I105_27_36_1614: {
    width: wp("3.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I105_27_36_1607: {
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
  View_I105_27_36_1608: {
    width: wp("3.182666778564453%"),
    height: hp("1.400273224043716%"),
    top: hp("0.2568145918715846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2986653645833286%")
  },
  ImageBackground_I105_27_36_1609: {
    width: wp("3.1826822916666666%"),
    height: hp("1.400273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I105_27_36_1612: {
    width: wp("0.5333333333333333%"),
    height: hp("0.25614754098360654%"),
    top: hp("0.3750160092213114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0999999999999943%")
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
