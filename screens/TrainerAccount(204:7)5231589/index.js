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
