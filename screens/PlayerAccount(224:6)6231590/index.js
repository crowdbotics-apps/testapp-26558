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
      <View style={styles.View_374_45}>
        <Text style={styles.Text_374_45}>:</Text>
      </View>
      <View style={styles.View_374_46}>
        <View style={styles.View_374_47} />
        <View style={styles.View_374_48}>
          <Text style={styles.Text_374_48}>Weiter</Text>
        </View>
      </View>
      <View style={styles.View_374_49}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3091/8180/a6c2de31f511df8a8705c8f0ef421436"
          }}
          style={styles.ImageBackground_374_50}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8332/61b5/e581c2fb0623396f9edb504e360186f1"
          }}
          style={styles.ImageBackground_374_51}
        />
        <View style={styles.View_374_52}>
          <Text style={styles.Text_374_52}>trainer</Text>
        </View>
        <View style={styles.View_374_53}>
          <Text style={styles.Text_374_53}>spieler</Text>
        </View>
      </View>
      <View style={styles.View_374_54}>
        <Text style={styles.Text_374_54}>665 9480498</Text>
      </View>
      <View style={styles.View_374_55}>
        <Text style={styles.Text_374_55}>stefan.andrei34@gmail.com</Text>
      </View>
      <View style={styles.View_374_56}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6de8/642b/ab727027bc94a76cfce830cd4ffa85bd"
          }}
          style={styles.ImageBackground_374_57}
        />
        <View style={styles.View_374_58}>
          <Text style={styles.Text_374_58}>Stefan Andrei</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c22/0a70/ab40cef3ca88279a392f93e64ce92e72"
        }}
        style={styles.ImageBackground_374_59}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc4f/7eb0/821cebd5a8d539b550601761318d520a"
        }}
        style={styles.ImageBackground_374_62}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e37/1a28/d2b770343801f48c8c2fc15058adeb41"
        }}
        style={styles.ImageBackground_374_63}
      />
      <View style={styles.View_374_64}>
        <View style={styles.View_374_65} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1d3/d7c2/dbef7654ea458cde2051bfdc62ea90f1"
          }}
          style={styles.ImageBackground_374_66}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1d3/d7c2/dbef7654ea458cde2051bfdc62ea90f1"
          }}
          style={styles.ImageBackground_374_67}
        />
      </View>
      <View style={styles.View_374_68}>
        <View style={styles.View_374_69}>
          <Text style={styles.Text_374_69}>Spieler hinzufügen</Text>
        </View>
      </View>
      <View style={styles.View_374_70}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e89b/39e4/17189a730921afb1cbd275997206959c"
          }}
          style={styles.ImageBackground_374_71}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f260/efe8/78c74b418b78516c3fed56686b39c087"
          }}
          style={styles.ImageBackground_374_72}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_374_45: {
    width: wp("1.6%"),
    top: hp("31.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100.26666666666667%")
  },
  Text_374_45: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_374_46: {
    width: wp("85.33333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("96.99453551912568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%")
  },
  View_374_47: {
    width: wp("85.33333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_374_48: {
    width: wp("15.466666666666667%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%")
  },
  Text_374_48: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_374_49: {
    width: wp("85.33333333333334%"),
    height: hp("4.644808743169399%"),
    top: hp("46.72131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%")
  },
  ImageBackground_374_50: {
    width: wp("85.33333333333334%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_374_51: {
    width: wp("42.13333333333333%"),
    height: hp("4.098360655737705%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%")
  },
  View_374_52: {
    width: wp("13.066666666666665%"),
    top: hp("1.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666666%")
  },
  Text_374_52: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_374_53: {
    width: wp("13.333333333333334%"),
    top: hp("1.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333337%")
  },
  Text_374_53: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_374_54: {
    width: wp("26.666666666666668%"),
    top: hp("31.010928961748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%")
  },
  Text_374_54: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_374_55: {
    width: wp("53.333333333333336%"),
    top: hp("36.74863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%")
  },
  Text_374_55: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_374_56: {
    width: wp("32%"),
    height: hp("20.491803278688526%"),
    top: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_374_57: {
    width: wp("29.333333333333332%"),
    height: hp("15.027321362104573%"),
    top: hp("2.7322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_374_58: {
    width: wp("45.6%"),
    top: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7.4666666666666615%")
  },
  Text_374_58: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_374_59: {
    width: wp("3.2%"),
    height: hp("2.9834809850473873%"),
    top: hp("30.601092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%")
  },
  ImageBackground_374_62: {
    width: wp("4.533333333333333%"),
    height: hp("1.6998100801895226%"),
    top: hp("37.02185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%")
  },
  ImageBackground_374_63: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666667%")
  },
  View_374_64: {
    width: wp("100.00035807291667%"),
    height: hp("2.0491803278688523%"),
    top: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_374_65: {
    width: wp("100%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0001953125%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  ImageBackground_374_66: {
    width: wp("100.00035807291667%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_374_67: {
    width: wp("100.00035807291667%"),
    height: hp("0%"),
    top: hp("2.0491803278688465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_374_68: {
    width: wp("34.93333333333333%"),
    height: hp("2.3224043715846996%"),
    top: hp("91.53005464480874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.800000000000004%")
  },
  View_374_69: {
    width: wp("34.93333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_374_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_374_70: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("90.98360655737704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%")
  },
  ImageBackground_374_71: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_374_72: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%")
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
