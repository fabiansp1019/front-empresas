import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
  } from "@react-pdf/renderer";

const FIRMA_PDF = () => {
  return (
    <View style={styles.cajonFirma}>
      <View style={styles.firmaUno}>
        <Text> </Text>
        <Image
          style={{ height: "30%", width: "60%", paddingLeft: "5%" }}
          src={
            "https://media.istockphoto.com/vectors/thank-you-ink-brush-vector-lettering-thank-you-modern-phrase-vector-vector-id1271311350?s=612x612"
          }
        />
        <Text style={{ paddingLeft: "10%" }}>_______________________</Text>
        <Text style={{ paddingLeft: "30%" }}>CONTADOR</Text>
      </View>

      <View style={styles.firmaDos}>
        <Text> </Text>
        <Image
          style={{ height: "30%", width: "60%", paddingLeft: "5%" }}
          src={
            "https://media.istockphoto.com/vectors/thank-you-ink-brush-vector-lettering-thank-you-modern-phrase-vector-vector-id1271311350?s=612x612"
          }
        />
        <Text style={{ paddingLeft: "10%" }}>_______________________</Text>
        <Text style={{ paddingLeft: "10%" }}>REPRESENTANTE LEGAL</Text>
      </View>
    </View>
  );
};

export default FIRMA_PDF;

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingLeft: 60,
    paddingRight: 60,
    paddingHorizontal: 35,
  },
  cajonFirma: {
    width: "100vw",
    height: 130,
    // backgroundColor: "pink",
    display: "flex",
    flexDirection: "row",
  },
  firmaUno: {
    flex: 1,
    fontSize: 12,
    // backgroundColor: "yellow",
  },
  firmaDos: {
    flex: 1,
    fontSize: 12,
    // backgroundColor: "green",
  },
});
