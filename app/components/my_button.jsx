import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";

export const MyButton = (props) => {
  return (
    <TouchableOpacity style={[style.container, props.style]}>
      <Image
        style= {style.gambar}
        source={props.imgUrl} />
      <Text style={{marginLeft: 10, fontSize: 18, color:'blue'}}>{props.Text}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    borderColor: "black",
    backgroundColor: "white",
    borderWidth: 1.5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  gambar: {
    width: 40,
    height: 40,
  }
});
