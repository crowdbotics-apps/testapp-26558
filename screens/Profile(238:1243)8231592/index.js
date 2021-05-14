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
      <View style={styles.View_238_1286}>
        <View style={styles.View_238_1287} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1d3/d7c2/dbef7654ea458cde2051bfdc62ea90f1"
          }}
          style={styles.ImageBackground_238_1288}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1d3/d7c2/dbef7654ea458cde2051bfdc62ea90f1"
          }}
          style={styles.ImageBackground_238_1289}
        />
      </View>
      <View style={styles.View_238_1460} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f699/70d7/fdcf5d5d18412185fbd04d0abf4e679f"
        }}
        style={styles.ImageBackground_238_1845}
      />
      <View style={styles.View_238_1245}>
        <View style={styles.View_238_1246} />
        <View style={styles.View_238_1247}>
          <Text style={styles.Text_238_1247}>Weiter</Text>
        </View>
      </View>
      <View style={styles.View_238_1275}>
        <Text style={styles.Text_238_1275}>665 9480498</Text>
      </View>
      <View style={styles.View_238_1458}>
        <Text style={styles.Text_238_1458}>spieler</Text>
      </View>
      <View style={styles.View_238_1472}>
        <Text style={styles.Text_238_1472}>Ausstehende genehmigung</Text>
      </View>
      <View style={styles.View_238_1276}>
        <Text style={styles.Text_238_1276}>stefan.andrei34@gmail.com</Text>
      </View>
      <View style={styles.View_238_1277}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6de8/642b/ab727027bc94a76cfce830cd4ffa85bd"
          }}
          style={styles.ImageBackground_238_1278}
        />
        <View style={styles.View_238_1279}>
          <Text style={styles.Text_238_1279}>Stefan Andrei</Text>
        </View>
      </View>
      <View style={styles.View_238_1439}>
        <Text style={styles.Text_238_1439}>Jonas Andrei</Text>
      </View>
      <View style={styles.View_238_1461}>
        <Text style={styles.Text_238_1461}>8</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c22/0a70/ab40cef3ca88279a392f93e64ce92e72"
        }}
        style={styles.ImageBackground_238_1280}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc4f/7eb0/821cebd5a8d539b550601761318d520a"
        }}
        style={styles.ImageBackground_238_1283}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e37/1a28/d2b770343801f48c8c2fc15058adeb41"
        }}
        style={styles.ImageBackground_238_1284}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/578c/53f4/e2b4ed4eb8748eaaf5aca63ccfcefdcc"
        }}
        style={styles.ImageBackground_238_1471}
      />
      <View style={styles.View_238_1285}>
        <Text style={styles.Text_238_1285}>:</Text>
      </View>
      <View style={styles.View_238_1311}>
        <View style={styles.View_238_1312}>
          <Text style={styles.Text_238_1312}>Spieler hinzufügen</Text>
        </View>
      </View>
      <View style={styles.View_238_1313}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e89b/39e4/17189a730921afb1cbd275997206959c"
          }}
          style={styles.ImageBackground_238_1314}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f260/efe8/78c74b418b78516c3fed56686b39c087"
          }}
          style={styles.ImageBackground_238_1315}
        />
      </View>
      <View style={styles.View_238_1446}>
        <Text style={styles.Text_238_1446}>Team A</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_238_1286: {
    width: wp("100.00035807291667%"),
    height: hp("20.62841530054645%"),
    top: hp("42.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_238_1287: {
    width: wp("100%"),
    height: hp("20.62841530054645%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0001953125%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  ImageBackground_238_1288: {
    width: wp("100.00035807291667%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_238_1289: {
    width: wp("100.00035807291667%"),
    height: hp("0%"),
    top: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_238_1460: {
    width: wp("93.06666666666666%"),
    minWidth: wp("93.06666666666666%"),
    height: hp("16.80327868852459%"),
    minHeight: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("44.53551912568306%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_238_1845: {
    width: wp("13.333333333333334%"),
    height: hp("6.830600571762668%"),
    top: hp("47.13114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%")
  },
  View_238_1245: {
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
  View_238_1246: {
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
  View_238_1247: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333333%"),
    top: hp("1.9125683060109395%")
  },
  Text_238_1247: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_238_1275: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%"),
    top: hp("31.284153005464482%")
  },
  Text_238_1275: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_238_1458: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("51.63934426229508%")
  },
  Text_238_1458: {
    color: "rgba(142, 142, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_238_1472: {
    width: wp("50.66666666666667%"),
    minWidth: wp("50.66666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("57.786885245901644%")
  },
  Text_238_1472: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_238_1276: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%"),
    top: hp("37.02185792349727%")
  },
  Text_238_1276: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_238_1277: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333333%"),
    top: hp("3.9617486338797816%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_238_1278: {
    width: wp("29.333333333333332%"),
    height: hp("15.027321362104573%"),
    top: hp("2.7322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_238_1279: {
    width: wp("45.6%"),
    top: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7.4666666666666615%")
  },
  Text_238_1279: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_238_1439: {
    width: wp("33.6%"),
    top: hp("47.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%")
  },
  Text_238_1439: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_238_1461: {
    width: wp("3.733333333333334%"),
    top: hp("47.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.46666666666667%")
  },
  Text_238_1461: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_238_1280: {
    width: wp("3.2%"),
    height: hp("2.9834809850473873%"),
    top: hp("30.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%")
  },
  ImageBackground_238_1283: {
    width: wp("4.533333333333333%"),
    height: hp("1.6998100801895226%"),
    top: hp("37.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%")
  },
  ImageBackground_238_1284: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666667%")
  },
  ImageBackground_238_1471: {
    width: wp("80%"),
    height: hp("0%"),
    top: hp("56.830601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%")
  },
  View_238_1285: {
    width: wp("1.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100.26666666666667%"),
    top: hp("12.021857923497267%")
  },
  Text_238_1285: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_238_1311: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86666666666667%"),
    top: hp("91.12021857923497%")
  },
  View_238_1312: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_238_1312: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_238_1313: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.200000000000003%"),
    top: hp("90.57377049180327%")
  },
  ImageBackground_238_1314: {
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
  ImageBackground_238_1315: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%")
  },
  View_238_1446: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.33333333333333%"),
    top: hp("51.63934426229508%")
  },
  Text_238_1446: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
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
