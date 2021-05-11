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
      <View style={styles.View_204_23}>
        <View style={styles.View_I204_23_36_1888}>
          <View style={styles.View_I204_23_36_1889}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a98/8cb4/efec87dc6a00aea2c06c97e2f8082ac9"
              }}
              style={styles.ImageBackground_I204_23_36_1890}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e5/b05f/ea75ef4f9849cc276d591680d7791261"
              }}
              style={styles.ImageBackground_I204_23_36_1893}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdd8/b009/66d689ba54ff7c70f6ae095f9b7e4787"
              }}
              style={styles.ImageBackground_I204_23_36_1894}
            />
          </View>
        </View>
        <View style={styles.View_I204_23_36_1813}>
          <Text style={styles.Text_I204_23_36_1813}>100%</Text>
        </View>
        <View style={styles.View_I204_23_36_1814}>
          <Text style={styles.Text_I204_23_36_1814}>1:20 PM</Text>
        </View>
        <View style={styles.View_I204_23_36_1816}>
          <Text style={styles.Text_I204_23_36_1816}>Carrier</Text>
        </View>
        <View style={styles.View_I204_23_36_1880}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/718a/4236/aaf9d2fe5aca68d62d2e14345fe4344c"
            }}
            style={styles.ImageBackground_I204_23_36_1881}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8a5/ea82/29d810f66984e27f9844163e6e00d9fa"
            }}
            style={styles.ImageBackground_I204_23_36_1882}
          />
        </View>
        <View style={styles.View_I204_23_36_1873}>
          <View style={styles.View_I204_23_36_1874}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
              }}
              style={styles.ImageBackground_I204_23_36_1875}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
              }}
              style={styles.ImageBackground_I204_23_36_1878}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
              }}
              style={styles.ImageBackground_I204_23_36_1879}
            />
          </View>
        </View>
        <View style={styles.View_I204_23_36_1868}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ba/0433/2bbb192a4666e3fd84bfb293b01e2767"
            }}
            style={styles.ImageBackground_I204_23_36_1869}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb45/c0df/0a274194297fd91d3f9a8b36ef1ba103"
          }}
          style={styles.ImageBackground_I204_23_36_1866}
        />
        <View style={styles.View_I204_23_36_1861}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4145/c072/f35964dd209a09f9e4f5e7352bfb8c98"
            }}
            style={styles.ImageBackground_I204_23_36_1862}
          />
        </View>
        <View style={styles.View_I204_23_36_1855}>
          <View style={styles.View_I204_23_36_1856}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f432/1bcd/adb610f0f8fc25901b910af7888cbacd"
              }}
              style={styles.ImageBackground_I204_23_36_1857}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9441/1445/59625de16e461d60391b2fc74076b7cd"
              }}
              style={styles.ImageBackground_I204_23_36_1860}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_204_24}>
        <View style={styles.View_204_25} />
        <View style={styles.View_204_26}>
          <Text style={styles.Text_204_26}>Weiter</Text>
        </View>
      </View>
      <View style={styles.View_204_129}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3091/8180/a6c2de31f511df8a8705c8f0ef421436"
          }}
          style={styles.ImageBackground_204_40}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8332/61b5/e581c2fb0623396f9edb504e360186f1"
          }}
          style={styles.ImageBackground_204_41}
        />
        <View style={styles.View_204_42}>
          <Text style={styles.Text_204_42}>trainer</Text>
        </View>
        <View style={styles.View_204_86}>
          <Text style={styles.Text_204_86}>spieler</Text>
        </View>
      </View>
      <View style={styles.View_204_123}>
        <Text style={styles.Text_204_123}>Geburtsdatum</Text>
      </View>
      <View style={styles.View_204_130}>
        <View style={styles.View_204_131}>
          <View style={styles.View_204_132}>
            <Text style={styles.Text_204_132}>11</Text>
          </View>
        </View>
        <View style={styles.View_204_133}>
          <View style={styles.View_204_134}>
            <Text style={styles.Text_204_134}>10</Text>
          </View>
        </View>
        <View style={styles.View_204_135}>
          <View style={styles.View_204_136}>
            <Text style={styles.Text_204_136}>09</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_204_151}>
        <View style={styles.View_204_152}>
          <View style={styles.View_204_153}>
            <Text style={styles.Text_204_153}>00</Text>
          </View>
        </View>
        <View style={styles.View_204_154}>
          <View style={styles.View_204_155}>
            <Text style={styles.Text_204_155}>08</Text>
          </View>
        </View>
        <View style={styles.View_204_156}>
          <View style={styles.View_204_157}>
            <Text style={styles.Text_204_157}>07</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_204_158}>
        <View style={styles.View_204_159}>
          <View style={styles.View_204_160}>
            <Text style={styles.Text_204_160}>2008</Text>
          </View>
        </View>
        <View style={styles.View_204_163}>
          <View style={styles.View_204_164}>
            <Text style={styles.Text_204_164}>2006</Text>
          </View>
        </View>
        <View style={styles.View_207_0}>
          <Text style={styles.Text_207_0}>1990</Text>
        </View>
      </View>
      <View style={styles.View_177_192}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20da/3d53/118ea458eb60c4144102bdb679668b8f"
          }}
          style={styles.ImageBackground_177_193}
        />
        <View style={styles.View_177_247}>
          <Text style={styles.Text_177_247}>Herman Howle</Text>
        </View>
      </View>
      <View style={styles.View_185_11}>
        <Text style={styles.Text_185_11}>:</Text>
      </View>
      <View style={styles.View_234_1245}>
        <Text style={styles.Text_234_1245}>602 9423452</Text>
      </View>
      <View style={styles.View_234_1246}>
        <Text style={styles.Text_234_1246}>howle_herman@gmail.com</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c22/0a70/ab40cef3ca88279a392f93e64ce92e72"
        }}
        style={styles.ImageBackground_234_1247}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc4f/7eb0/821cebd5a8d539b550601761318d520a"
        }}
        style={styles.ImageBackground_234_1250}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e37/1a28/d2b770343801f48c8c2fc15058adeb41"
        }}
        style={styles.ImageBackground_234_1251}
      />
      <View style={styles.View_234_1252}>
        <View style={styles.View_234_1253} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1d3/d7c2/dbef7654ea458cde2051bfdc62ea90f1"
          }}
          style={styles.ImageBackground_234_1254}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1d3/d7c2/dbef7654ea458cde2051bfdc62ea90f1"
          }}
          style={styles.ImageBackground_234_1255}
        />
      </View>
      <View style={styles.View_238_1237}>
        <View style={styles.View_238_1238}>
          <Text style={styles.Text_238_1238}>Spieler hinzufügen</Text>
        </View>
      </View>
      <View style={styles.View_238_1239}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e89b/39e4/17189a730921afb1cbd275997206959c"
          }}
          style={styles.ImageBackground_238_1240}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f260/efe8/78c74b418b78516c3fed56686b39c087"
          }}
          style={styles.ImageBackground_238_1241}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_204_23: {
    width: wp("100%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I204_23_36_1888: {
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
  View_I204_23_36_1889: {
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
  ImageBackground_I204_23_36_1890: {
    width: wp("6.4%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I204_23_36_1893: {
    width: wp("0.4%"),
    height: hp("0.6694385914203248%"),
    top: hp("0.45079299009562834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666657%")
  },
  ImageBackground_I204_23_36_1894: {
    width: wp("5.333333333333334%"),
    height: hp("1.0245901639344261%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  View_I204_23_36_1813: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%"),
    top: hp("0.4508263426400273%")
  },
  Text_I204_23_36_1813: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I204_23_36_1814: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%"),
    top: hp("0.4098360655737705%")
  },
  Text_I204_23_36_1814: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I204_23_36_1816: {
    flexGrow: 1,
    width: wp("10.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("0.4508263426400273%")
  },
  Text_I204_23_36_1816: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I204_23_36_1880: {
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
  ImageBackground_I204_23_36_1881: {
    width: wp("0.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.133333333333334%")
  },
  ImageBackground_I204_23_36_1882: {
    width: wp("3.2%"),
    height: hp("1.092896174863388%"),
    top: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333334%")
  },
  View_I204_23_36_1873: {
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
  View_I204_23_36_1874: {
    width: wp("2.666666666666667%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%")
  },
  ImageBackground_I204_23_36_1875: {
    width: wp("2.3333333333333335%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908469948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1653645833333428%")
  },
  ImageBackground_I204_23_36_1878: {
    width: wp("0.563995361328125%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I204_23_36_1879: {
    width: wp("0.5653223037719727%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.101367187500003%")
  },
  View_I204_23_36_1868: {
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
  ImageBackground_I204_23_36_1869: {
    width: wp("1.8532292683919271%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.15295476861338797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8116536458333314%")
  },
  ImageBackground_I204_23_36_1866: {
    flexGrow: 1,
    width: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.39999999999999%"),
    top: hp("0.4098360655737705%")
  },
  View_I204_23_36_1861: {
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
  ImageBackground_I204_23_36_1862: {
    width: wp("3.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I204_23_36_1855: {
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
  View_I204_23_36_1856: {
    width: wp("3.182666778564453%"),
    height: hp("1.400273224043716%"),
    top: hp("0.2568145918715846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29869791666666856%")
  },
  ImageBackground_I204_23_36_1857: {
    width: wp("3.1826822916666666%"),
    height: hp("1.400273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I204_23_36_1860: {
    width: wp("0.5333333333333333%"),
    height: hp("0.25614754098360654%"),
    top: hp("0.3750160092213114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0999999999999943%")
  },
  View_204_24: {
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
  View_204_25: {
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
  View_204_26: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333333%"),
    top: hp("1.9125683060109395%")
  },
  Text_204_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_129: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("46.85792349726776%")
  },
  ImageBackground_204_40: {
    width: wp("85.33333333333334%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_204_41: {
    width: wp("42.13333333333333%"),
    height: hp("4.098360655737705%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.666666666666664%")
  },
  View_204_42: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666666%"),
    top: hp("1.229508196721305%")
  },
  Text_204_42: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_204_86: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333337%"),
    top: hp("1.229508196721305%")
  },
  Text_204_86: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_204_123: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("58.879781420765035%")
  },
  Text_204_123: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_204_130: {
    width: wp("12%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    top: hp("57.513661202185794%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  View_204_131: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333327%"),
    top: hp("3.2786885245901587%")
  },
  View_204_132: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_204_132: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_204_133: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666615%"),
    top: hp("0.5464480874316919%")
  },
  View_204_134: {
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_204_134: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_135: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.93333333333333%"),
    top: hp("-2.0491803278688607%")
  },
  View_204_136: {
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_204_136: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_204_151: {
    width: wp("12%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.199999999999996%"),
    top: hp("57.513661202185794%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  View_204_152: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.93333333333333%"),
    top: hp("3.2786885245901587%")
  },
  View_204_153: {
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_204_153: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_204_154: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.93333333333333%"),
    top: hp("0.5464480874316919%")
  },
  View_204_155: {
    width: wp("6.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_204_155: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_156: {
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
  View_204_157: {
    width: wp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_204_157: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_204_158: {
    width: wp("17.333333333333336%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.6%"),
    top: hp("57.513661202185794%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  View_204_159: {
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
  View_204_160: {
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_204_160: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_204_163: {
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
  View_204_164: {
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_204_164: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_207_0: {
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.5464480874316919%")
  },
  Text_207_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_192: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333333%"),
    top: hp("4.098360655737705%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_177_193: {
    width: wp("29.333333333333332%"),
    height: hp("15.188905059314164%"),
    top: hp("2.5956284153005473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333357%")
  },
  View_177_247: {
    width: wp("49.06666666666666%"),
    top: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8.533333333333328%")
  },
  Text_177_247: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_185_11: {
    width: wp("1.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100.26666666666667%"),
    top: hp("9.836065573770492%")
  },
  Text_185_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_234_1245: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%"),
    top: hp("31.010928961748636%")
  },
  Text_234_1245: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_234_1246: {
    width: wp("50.4%"),
    minWidth: wp("50.4%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%"),
    top: hp("36.74863387978142%")
  },
  Text_234_1246: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  ImageBackground_234_1247: {
    width: wp("3.2%"),
    height: hp("2.9834809850473873%"),
    top: hp("30.601092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%")
  },
  ImageBackground_234_1250: {
    width: wp("4.533333333333333%"),
    height: hp("1.6998100801895226%"),
    top: hp("37.02185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%")
  },
  ImageBackground_234_1251: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666667%")
  },
  View_234_1252: {
    width: wp("100.00035807291667%"),
    height: hp("2.0491803278688523%"),
    top: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_234_1253: {
    width: wp("100%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0001953125%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  ImageBackground_234_1254: {
    width: wp("100.00035807291667%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_234_1255: {
    width: wp("100.00035807291667%"),
    height: hp("0%"),
    top: hp("2.0491803278688465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_238_1237: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("91.53005464480874%")
  },
  View_238_1238: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_238_1238: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_238_1239: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.666666666666664%"),
    top: hp("90.98360655737704%")
  },
  ImageBackground_238_1240: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_238_1241: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333357%")
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
