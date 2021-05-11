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
      <View style={styles.View_105_85}>
        <View style={styles.View_I105_85_36_1888}>
          <View style={styles.View_I105_85_36_1889}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a98/8cb4/efec87dc6a00aea2c06c97e2f8082ac9"
              }}
              style={styles.ImageBackground_I105_85_36_1890}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e5/b05f/ea75ef4f9849cc276d591680d7791261"
              }}
              style={styles.ImageBackground_I105_85_36_1893}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdd8/b009/66d689ba54ff7c70f6ae095f9b7e4787"
              }}
              style={styles.ImageBackground_I105_85_36_1894}
            />
          </View>
        </View>
        <View style={styles.View_I105_85_36_1813}>
          <Text style={styles.Text_I105_85_36_1813}>100%</Text>
        </View>
        <View style={styles.View_I105_85_36_1814}>
          <Text style={styles.Text_I105_85_36_1814}>1:20 PM</Text>
        </View>
        <View style={styles.View_I105_85_36_1816}>
          <Text style={styles.Text_I105_85_36_1816}>Carrier</Text>
        </View>
        <View style={styles.View_I105_85_36_1880}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/718a/4236/aaf9d2fe5aca68d62d2e14345fe4344c"
            }}
            style={styles.ImageBackground_I105_85_36_1881}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8a5/ea82/29d810f66984e27f9844163e6e00d9fa"
            }}
            style={styles.ImageBackground_I105_85_36_1882}
          />
        </View>
        <View style={styles.View_I105_85_36_1873}>
          <View style={styles.View_I105_85_36_1874}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
              }}
              style={styles.ImageBackground_I105_85_36_1875}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
              }}
              style={styles.ImageBackground_I105_85_36_1878}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
              }}
              style={styles.ImageBackground_I105_85_36_1879}
            />
          </View>
        </View>
        <View style={styles.View_I105_85_36_1868}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ba/0433/2bbb192a4666e3fd84bfb293b01e2767"
            }}
            style={styles.ImageBackground_I105_85_36_1869}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb45/c0df/0a274194297fd91d3f9a8b36ef1ba103"
          }}
          style={styles.ImageBackground_I105_85_36_1866}
        />
        <View style={styles.View_I105_85_36_1861}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4145/c072/f35964dd209a09f9e4f5e7352bfb8c98"
            }}
            style={styles.ImageBackground_I105_85_36_1862}
          />
        </View>
        <View style={styles.View_I105_85_36_1855}>
          <View style={styles.View_I105_85_36_1856}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f432/1bcd/adb610f0f8fc25901b910af7888cbacd"
              }}
              style={styles.ImageBackground_I105_85_36_1857}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9441/1445/59625de16e461d60391b2fc74076b7cd"
              }}
              style={styles.ImageBackground_I105_85_36_1860}
            />
          </View>
        </View>
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
  View_105_85: {
    width: wp("100%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I105_85_36_1888: {
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
  View_I105_85_36_1889: {
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
  ImageBackground_I105_85_36_1890: {
    width: wp("6.4%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I105_85_36_1893: {
    width: wp("0.4%"),
    height: hp("0.6694385914203248%"),
    top: hp("0.45079299009562834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666657%")
  },
  ImageBackground_I105_85_36_1894: {
    width: wp("5.333333333333334%"),
    height: hp("1.0245901639344261%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  View_I105_85_36_1813: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%"),
    top: hp("0.4508263426400273%")
  },
  Text_I105_85_36_1813: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I105_85_36_1814: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%"),
    top: hp("0.4098360655737705%")
  },
  Text_I105_85_36_1814: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I105_85_36_1816: {
    flexGrow: 1,
    width: wp("10.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("0.4508263426400273%")
  },
  Text_I105_85_36_1816: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I105_85_36_1880: {
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
  ImageBackground_I105_85_36_1881: {
    width: wp("0.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.133333333333334%")
  },
  ImageBackground_I105_85_36_1882: {
    width: wp("3.2%"),
    height: hp("1.092896174863388%"),
    top: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333334%")
  },
  View_I105_85_36_1873: {
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
  View_I105_85_36_1874: {
    width: wp("2.666666666666667%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%")
  },
  ImageBackground_I105_85_36_1875: {
    width: wp("2.3333333333333335%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908469948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16533203125000284%")
  },
  ImageBackground_I105_85_36_1878: {
    width: wp("0.563995361328125%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I105_85_36_1879: {
    width: wp("0.5653223037719727%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.101334635416677%")
  },
  View_I105_85_36_1868: {
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
  ImageBackground_I105_85_36_1869: {
    width: wp("1.8532292683919271%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.15295476861338797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8116536458333314%")
  },
  ImageBackground_I105_85_36_1866: {
    flexGrow: 1,
    width: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.39999999999999%"),
    top: hp("0.4098360655737705%")
  },
  View_I105_85_36_1861: {
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
  ImageBackground_I105_85_36_1862: {
    width: wp("3.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I105_85_36_1855: {
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
  View_I105_85_36_1856: {
    width: wp("3.182666778564453%"),
    height: hp("1.400273224043716%"),
    top: hp("0.2568145918715846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2986653645833286%")
  },
  ImageBackground_I105_85_36_1857: {
    width: wp("3.1826822916666666%"),
    height: hp("1.400273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I105_85_36_1860: {
    width: wp("0.5333333333333333%"),
    height: hp("0.25614754098360654%"),
    top: hp("0.3750160092213114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0999999999999943%")
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
