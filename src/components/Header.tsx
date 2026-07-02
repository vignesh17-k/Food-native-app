import React from "react";
import { Text, View } from "react-native";

interface Props {
  container_style?: any;
  left_section?: any;
  right_section?: any;
  title?: any;
}

const Header = ({
  container_style,
  left_section,
  right_section,
  title,
}: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems:'center',
        ...container_style,
      }}
    >
      {left_section}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text>{title}</Text>
      </View>
      {right_section}
    </View>
  );
};

export default Header;
