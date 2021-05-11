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
      <View style={styles.View_114_1561}>
        <View style={styles.View_I114_1561_36_1640}>
          <View style={styles.View_I114_1561_36_1641}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a98/8cb4/efec87dc6a00aea2c06c97e2f8082ac9"
              }}
              style={styles.ImageBackground_I114_1561_36_1642}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e5/b05f/ea75ef4f9849cc276d591680d7791261"
              }}
              style={styles.ImageBackground_I114_1561_36_1645}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdd8/b009/66d689ba54ff7c70f6ae095f9b7e4787"
              }}
              style={styles.ImageBackground_I114_1561_36_1646}
            />
          </View>
        </View>
        <View style={styles.View_I114_1561_36_1565}>
          <Text style={styles.Text_I114_1561_36_1565}>100%</Text>
        </View>
        <View style={styles.View_I114_1561_36_1566}>
          <Text style={styles.Text_I114_1561_36_1566}>1:20 PM</Text>
        </View>
        <View style={styles.View_I114_1561_36_1568}>
          <Text style={styles.Text_I114_1561_36_1568}>Carrier</Text>
        </View>
        <View style={styles.View_I114_1561_36_1632}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/718a/4236/aaf9d2fe5aca68d62d2e14345fe4344c"
            }}
            style={styles.ImageBackground_I114_1561_36_1633}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8a5/ea82/29d810f66984e27f9844163e6e00d9fa"
            }}
            style={styles.ImageBackground_I114_1561_36_1634}
          />
        </View>
        <View style={styles.View_I114_1561_36_1625}>
          <View style={styles.View_I114_1561_36_1626}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
              }}
              style={styles.ImageBackground_I114_1561_36_1627}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
              }}
              style={styles.ImageBackground_I114_1561_36_1630}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
              }}
              style={styles.ImageBackground_I114_1561_36_1631}
            />
          </View>
        </View>
        <View style={styles.View_I114_1561_36_1620}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ba/0433/2bbb192a4666e3fd84bfb293b01e2767"
            }}
            style={styles.ImageBackground_I114_1561_36_1621}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb45/c0df/0a274194297fd91d3f9a8b36ef1ba103"
          }}
          style={styles.ImageBackground_I114_1561_36_1618}
        />
        <View style={styles.View_I114_1561_36_1613}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4145/c072/f35964dd209a09f9e4f5e7352bfb8c98"
            }}
            style={styles.ImageBackground_I114_1561_36_1614}
          />
        </View>
        <View style={styles.View_I114_1561_36_1607}>
          <View style={styles.View_I114_1561_36_1608}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f432/1bcd/adb610f0f8fc25901b910af7888cbacd"
              }}
              style={styles.ImageBackground_I114_1561_36_1609}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9441/1445/59625de16e461d60391b2fc74076b7cd"
              }}
              style={styles.ImageBackground_I114_1561_36_1612}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d02/9307/76d59ad807478b7c38ab32cb1fbb18f7"
        }}
        style={styles.ImageBackground_114_1562}
      />
      <View style={styles.View_114_1575}>
        <Text style={styles.Text_114_1575}>4</Text>
      </View>
      <View style={styles.View_114_1576}>
        <Text style={styles.Text_114_1576}>0</Text>
      </View>
      <View style={styles.View_114_1578}>
        <Text style={styles.Text_114_1578}>9</Text>
      </View>
      <View style={styles.View_114_1579}>
        <Text style={styles.Text_114_1579}>3</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1828/eeb3/9933f78f982b80a5fd9d8edf0f9a3e67"
        }}
        style={styles.ImageBackground_114_1581}
      />
      <View style={styles.View_114_1582}>
        <View style={styles.View_I114_1582_114_1377}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80e9/042d/4ae1ec9e4ee8d8298e8ab17e4fe5f7d9"
            }}
            style={styles.ImageBackground_I114_1582_114_1379}
          />
          <View style={styles.View_I114_1582_114_1381}>
            <View style={styles.View_I114_1582_114_1382}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f35/a85c/004bb5d496e1981c82bc1834c0435d09"
                }}
                style={styles.ImageBackground_I114_1582_114_1383}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcfe/a4a9/14c3a6638602c98bfb92c7f6e3dd557b"
                }}
                style={styles.ImageBackground_I114_1582_114_1386}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2077/8d6d/ed915cc47ecaa75c1688b85648280071"
                }}
                style={styles.ImageBackground_I114_1582_114_1391}
              />
            </View>
          </View>
          <View style={styles.View_I114_1582_114_1445}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d76/f439/8f901816b4369b9f5203b08ab8be9e00"
              }}
              style={styles.ImageBackground_I114_1582_114_1446}
            />
            <View style={styles.View_I114_1582_114_1448}>
              <Text style={styles.Text_I114_1582_114_1448}>1</Text>
            </View>
          </View>
          <View style={styles.View_I114_1582_114_1450}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d76/f439/8f901816b4369b9f5203b08ab8be9e00"
              }}
              style={styles.ImageBackground_I114_1582_114_1451}
            />
            <View style={styles.View_I114_1582_114_1452}>
              <Text style={styles.Text_I114_1582_114_1452}>ABC</Text>
            </View>
            <View style={styles.View_I114_1582_114_1453}>
              <Text style={styles.Text_I114_1582_114_1453}>2</Text>
            </View>
          </View>
          <View style={styles.View_I114_1582_114_1455}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d76/f439/8f901816b4369b9f5203b08ab8be9e00"
              }}
              style={styles.ImageBackground_I114_1582_114_1456}
            />
            <View style={styles.View_I114_1582_114_1457}>
              <Text style={styles.Text_I114_1582_114_1457}>DEF</Text>
            </View>
            <View style={styles.View_I114_1582_114_1458}>
              <Text style={styles.Text_I114_1582_114_1458}>3</Text>
            </View>
          </View>
          <View style={styles.View_I114_1582_114_1460}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d76/f439/8f901816b4369b9f5203b08ab8be9e00"
              }}
              style={styles.ImageBackground_I114_1582_114_1461}
            />
            <View style={styles.View_I114_1582_114_1462}>
              <Text style={styles.Text_I114_1582_114_1462}>GHI</Text>
            </View>
            <View style={styles.View_I114_1582_114_1463}>
              <Text style={styles.Text_I114_1582_114_1463}>4</Text>
            </View>
          </View>
          <View style={styles.View_I114_1582_114_1465}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d76/f439/8f901816b4369b9f5203b08ab8be9e00"
              }}
              style={styles.ImageBackground_I114_1582_114_1466}
            />
            <View style={styles.View_I114_1582_114_1467}>
              <Text style={styles.Text_I114_1582_114_1467}>JKL</Text>
            </View>
            <View style={styles.View_I114_1582_114_1468}>
              <Text style={styles.Text_I114_1582_114_1468}>5</Text>
            </View>
          </View>
          <View style={styles.View_I114_1582_114_1470}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d76/f439/8f901816b4369b9f5203b08ab8be9e00"
              }}
              style={styles.ImageBackground_I114_1582_114_1471}
            />
            <View style={styles.View_I114_1582_114_1472}>
              <Text style={styles.Text_I114_1582_114_1472}>MNO</Text>
            </View>
            <View style={styles.View_I114_1582_114_1473}>
              <Text style={styles.Text_I114_1582_114_1473}>6</Text>
            </View>
          </View>
          <View style={styles.View_I114_1582_114_1475}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d76/f439/8f901816b4369b9f5203b08ab8be9e00"
              }}
              style={styles.ImageBackground_I114_1582_114_1476}
            />
            <View style={styles.View_I114_1582_114_1477}>
              <Text style={styles.Text_I114_1582_114_1477}>PQRS</Text>
            </View>
            <View style={styles.View_I114_1582_114_1478}>
              <Text style={styles.Text_I114_1582_114_1478}>7</Text>
            </View>
          </View>
          <View style={styles.View_I114_1582_114_1480}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d76/f439/8f901816b4369b9f5203b08ab8be9e00"
              }}
              style={styles.ImageBackground_I114_1582_114_1481}
            />
            <View style={styles.View_I114_1582_114_1482}>
              <Text style={styles.Text_I114_1582_114_1482}>TUV</Text>
            </View>
            <View style={styles.View_I114_1582_114_1483}>
              <Text style={styles.Text_I114_1582_114_1483}>8</Text>
            </View>
          </View>
          <View style={styles.View_I114_1582_114_1485}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d76/f439/8f901816b4369b9f5203b08ab8be9e00"
              }}
              style={styles.ImageBackground_I114_1582_114_1486}
            />
            <View style={styles.View_I114_1582_114_1489}>
              <Text style={styles.Text_I114_1582_114_1489}>0</Text>
            </View>
          </View>
          <View style={styles.View_I114_1582_114_1490}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d76/f439/8f901816b4369b9f5203b08ab8be9e00"
              }}
              style={styles.ImageBackground_I114_1582_114_1491}
            />
            <View style={styles.View_I114_1582_114_1492}>
              <Text style={styles.Text_I114_1582_114_1492}>WXYZ</Text>
            </View>
            <View style={styles.View_I114_1582_114_1493}>
              <Text style={styles.Text_I114_1582_114_1493}>9</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_114_1583}>
        <Text style={styles.Text_114_1583}>Aus nachrichten</Text>
      </View>
      <View style={styles.View_114_1584}>
        <Text style={styles.Text_114_1584}>4903</Text>
      </View>
      <View style={styles.View_114_1585} />
      <View style={styles.View_177_98}>
        <Text style={styles.Text_177_98}>PRISDAL</Text>
      </View>
      <View style={styles.View_204_104}>
        <Text style={styles.Text_204_104}>Senden Sie OTP erneut</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e3/a3eb/d4c109107bb5b811278c5b5c124c657f"
        }}
        style={styles.ImageBackground_204_105}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e3/a3eb/d4c109107bb5b811278c5b5c124c657f"
        }}
        style={styles.ImageBackground_204_106}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e3/a3eb/d4c109107bb5b811278c5b5c124c657f"
        }}
        style={styles.ImageBackground_204_107}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e3/a3eb/d4c109107bb5b811278c5b5c124c657f"
        }}
        style={styles.ImageBackground_204_108}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce08/a419/e95422d816012a5c58914123a797d7cd"
        }}
        style={styles.ImageBackground_204_109}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c22/0a70/ab40cef3ca88279a392f93e64ce92e72"
        }}
        style={styles.ImageBackground_204_110}
      />
      <View style={styles.View_204_115}>
        <Text style={styles.Text_204_115}>665 9480498</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_114_1561: {
    width: wp("100%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I114_1561_36_1640: {
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
  View_I114_1561_36_1641: {
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
  ImageBackground_I114_1561_36_1642: {
    width: wp("6.4%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I114_1561_36_1645: {
    width: wp("0.4%"),
    height: hp("0.6694385914203248%"),
    top: hp("0.45079299009562834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666657%")
  },
  ImageBackground_I114_1561_36_1646: {
    width: wp("5.333333333333334%"),
    height: hp("1.0245901639344261%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  View_I114_1561_36_1565: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%"),
    top: hp("0.4508263426400273%")
  },
  Text_I114_1561_36_1565: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I114_1561_36_1566: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%"),
    top: hp("0.4098360655737705%")
  },
  Text_I114_1561_36_1566: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I114_1561_36_1568: {
    flexGrow: 1,
    width: wp("10.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("0.4508263426400273%")
  },
  Text_I114_1561_36_1568: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I114_1561_36_1632: {
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
  ImageBackground_I114_1561_36_1633: {
    width: wp("0.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.133333333333334%")
  },
  ImageBackground_I114_1561_36_1634: {
    width: wp("3.2%"),
    height: hp("1.092896174863388%"),
    top: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333334%")
  },
  View_I114_1561_36_1625: {
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
  View_I114_1561_36_1626: {
    width: wp("2.666666666666667%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%")
  },
  ImageBackground_I114_1561_36_1627: {
    width: wp("2.3333333333333335%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.05189655908469948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16533203125000284%")
  },
  ImageBackground_I114_1561_36_1630: {
    width: wp("0.563995361328125%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I114_1561_36_1631: {
    width: wp("0.5653223037719727%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.101334635416677%")
  },
  View_I114_1561_36_1620: {
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
  ImageBackground_I114_1561_36_1621: {
    width: wp("1.8532292683919271%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.15295476861338797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8116536458333314%")
  },
  ImageBackground_I114_1561_36_1618: {
    flexGrow: 1,
    width: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.39999999999999%"),
    top: hp("0.4098360655737705%")
  },
  View_I114_1561_36_1613: {
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
  ImageBackground_I114_1561_36_1614: {
    width: wp("3.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I114_1561_36_1607: {
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
  View_I114_1561_36_1608: {
    width: wp("3.182666778564453%"),
    height: hp("1.400273224043716%"),
    top: hp("0.2568145918715846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2986653645833286%")
  },
  ImageBackground_I114_1561_36_1609: {
    width: wp("3.1826822916666666%"),
    height: hp("1.400273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I114_1561_36_1612: {
    width: wp("0.5333333333333333%"),
    height: hp("0.25614754098360654%"),
    top: hp("0.3750160092213114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0999999999999943%")
  },
  ImageBackground_114_1562: {
    width: wp("22.666705322265628%"),
    minWidth: wp("22.666705322265628%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.4%"),
    top: hp("106.55737704918033%")
  },
  View_114_1575: {
    width: wp("4.608863321940104%"),
    minWidth: wp("4.608863321940104%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%"),
    top: hp("52.86885245901639%")
  },
  Text_114_1575: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.54,
    textTransform: "none"
  },
  View_114_1576: {
    width: wp("2.933333333333333%"),
    minWidth: wp("2.933333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.266666666666666%"),
    top: hp("52.86885245901639%")
  },
  Text_114_1576: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.54,
    textTransform: "none"
  },
  View_114_1578: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86666666666667%"),
    top: hp("52.86885245901639%")
  },
  Text_114_1578: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.54,
    textTransform: "none"
  },
  View_114_1579: {
    width: wp("2.933333333333333%"),
    minWidth: wp("2.933333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333334%"),
    top: hp("52.86885245901639%")
  },
  Text_114_1579: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.54,
    textTransform: "none"
  },
  ImageBackground_114_1581: {
    width: wp("100.8%"),
    height: hp("37.56830601092896%"),
    top: hp("73.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.8%")
  },
  View_114_1582: {
    width: wp("101.33333333333334%"),
    minWidth: wp("101.33333333333334%"),
    height: hp("30.87431693989071%"),
    minHeight: hp("30.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.8%"),
    top: hp("79.37158469945356%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I114_1582_114_1377: {
    flexGrow: 1,
    width: wp("101.33333333333334%"),
    height: hp("30.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I114_1582_114_1379: {
    width: wp("7.124999999999999%"),
    height: hp("2.4299225520566514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.43333333333334%"),
    top: hp("25.585670679644807%")
  },
  View_I114_1582_114_1381: {
    width: wp("16.78333740234375%"),
    height: hp("2.0011109732539274%"),
    top: hp("26.014484342981547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.916666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I114_1582_114_1382: {
    width: wp("14.133333333333335%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%")
  },
  ImageBackground_I114_1582_114_1383: {
    width: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I114_1582_114_1386: {
    width: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.399999999999999%"),
    top: hp("0%")
  },
  ImageBackground_I114_1582_114_1391: {
    width: wp("3.733333333333334%"),
    height: hp("1.7246387043937308%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("0.025648106642762514%")
  },
  View_I114_1582_114_1445: {
    width: wp("31.35000203450521%"),
    height: hp("6.575086207989135%"),
    top: hp("0.8576273266734802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I114_1582_114_1446: {
    width: wp("31.35000203450521%"),
    height: hp("6.575086207989135%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I114_1582_114_1448: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  Text_I114_1582_114_1448: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.8125,
    textTransform: "none"
  },
  View_I114_1582_114_1450: {
    width: wp("31.349991861979166%"),
    height: hp("6.575086207989135%"),
    top: hp("0.8576273266734802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I114_1582_114_1451: {
    width: wp("31.349991861979166%"),
    height: hp("6.575086207989135%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I114_1582_114_1452: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595636%")
  },
  Text_I114_1582_114_1452: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I114_1582_114_1453: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  Text_I114_1582_114_1453: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.8125,
    textTransform: "none"
  },
  View_I114_1582_114_1455: {
    width: wp("31.349991861979166%"),
    height: hp("6.575086207989135%"),
    top: hp("0.8576273266734802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I114_1582_114_1456: {
    width: wp("31.349991861979166%"),
    height: hp("6.575086207989135%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I114_1582_114_1457: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595636%")
  },
  Text_I114_1582_114_1457: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I114_1582_114_1458: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  Text_I114_1582_114_1458: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.8125,
    textTransform: "none"
  },
  View_I114_1582_114_1460: {
    width: wp("31.35000203450521%"),
    height: hp("6.575086207989135%"),
    top: hp("8.57620656164616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I114_1582_114_1461: {
    width: wp("31.35000203450521%"),
    height: hp("6.575086207989135%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I114_1582_114_1462: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595636%")
  },
  Text_I114_1582_114_1462: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I114_1582_114_1463: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  Text_I114_1582_114_1463: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.8125,
    textTransform: "none"
  },
  View_I114_1582_114_1465: {
    width: wp("31.349991861979166%"),
    height: hp("6.575086207989135%"),
    top: hp("8.57620656164616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I114_1582_114_1466: {
    width: wp("31.349991861979166%"),
    height: hp("6.575086207989135%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I114_1582_114_1467: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595636%")
  },
  Text_I114_1582_114_1467: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I114_1582_114_1468: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  Text_I114_1582_114_1468: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.8125,
    textTransform: "none"
  },
  View_I114_1582_114_1470: {
    width: wp("31.349991861979166%"),
    height: hp("6.575086207989135%"),
    top: hp("8.57620656164616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I114_1582_114_1471: {
    width: wp("31.349991861979166%"),
    height: hp("6.575086207989135%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I114_1582_114_1472: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595636%")
  },
  Text_I114_1582_114_1472: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I114_1582_114_1473: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  Text_I114_1582_114_1473: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.8125,
    textTransform: "none"
  },
  View_I114_1582_114_1475: {
    width: wp("31.35000203450521%"),
    height: hp("6.5750841234551105%"),
    top: hp("16.29478579661884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I114_1582_114_1476: {
    width: wp("31.35000203450521%"),
    height: hp("6.5750841234551105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I114_1582_114_1477: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595636%")
  },
  Text_I114_1582_114_1477: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I114_1582_114_1478: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  Text_I114_1582_114_1478: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.8125,
    textTransform: "none"
  },
  View_I114_1582_114_1480: {
    width: wp("31.349991861979166%"),
    height: hp("6.5750841234551105%"),
    top: hp("16.29478579661884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I114_1582_114_1481: {
    width: wp("31.349991861979166%"),
    height: hp("6.5750841234551105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I114_1582_114_1482: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595636%")
  },
  Text_I114_1582_114_1482: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I114_1582_114_1483: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  Text_I114_1582_114_1483: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.8125,
    textTransform: "none"
  },
  View_I114_1582_114_1485: {
    width: wp("31.349991861979166%"),
    height: hp("6.575087250256148%"),
    top: hp("23.87041602629779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I114_1582_114_1486: {
    width: wp("31.349991861979166%"),
    height: hp("6.575087250256148%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I114_1582_114_1489: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.2295081967213264%")
  },
  Text_I114_1582_114_1489: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.8125,
    textTransform: "none"
  },
  View_I114_1582_114_1490: {
    width: wp("31.349991861979166%"),
    height: hp("6.5750841234551105%"),
    top: hp("16.29478579661884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I114_1582_114_1491: {
    width: wp("31.349991861979166%"),
    height: hp("6.5750841234551105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I114_1582_114_1492: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595636%")
  },
  Text_I114_1582_114_1492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I114_1582_114_1493: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  Text_I114_1582_114_1493: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.8125,
    textTransform: "none"
  },
  View_114_1583: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%"),
    top: hp("74.4535519125683%")
  },
  Text_114_1583: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_114_1584: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.53333333333334%"),
    top: hp("76.775956284153%")
  },
  Text_114_1584: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_114_1585: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73.36065573770492%")
  },
  View_177_98: {
    width: wp("47.199999999999996%"),
    minWidth: wp("47.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.400000000000002%"),
    top: hp("16.120218579234972%")
  },
  Text_177_98: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_104: {
    width: wp("41.06666666666667%"),
    minWidth: wp("41.06666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("61.74863387978142%")
  },
  Text_204_104: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_204_105: {
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
  ImageBackground_204_106: {
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
  ImageBackground_204_107: {
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
  ImageBackground_204_108: {
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
  ImageBackground_204_109: {
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
  ImageBackground_204_110: {
    width: wp("3.2%"),
    height: hp("2.9834809850473873%"),
    top: hp("40.16393442622951%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%")
  },
  View_204_115: {
    width: wp("33.6%"),
    minWidth: wp("33.6%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("40.30054644808743%")
  },
  Text_204_115: {
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
