import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface Props {
  initial_count?: number;
  disable_increment?: boolean;
  disable_decrement?: boolean;
  style?: any;
}

const Counter = ({
  initial_count = 1,
  disable_increment,
  disable_decrement,
  style,
}: Props) => {
  const [count, set_count] = useState(initial_count);
  const disabled_decrement = count === 1 || disable_decrement;

  return (
    <React.Fragment>
      <View style={{ ...styles.container, ...style }}>
        <TouchableOpacity
          disabled={count === 0 || disable_decrement}
          onPress={() => {
            if (disabled_decrement) return;
            set_count(count > 0 ? count - 1 : 0);
          }}
        >
          <MaterialCommunityIcons
            name="minus"
            color={disabled_decrement ? "rgba(0, 0, 0, 0.12)" : "grey"}
            size={30}
          />
        </TouchableOpacity>

        <View style={styles.count_box}>
          <Text style={styles.count_text}>{count}</Text>
        </View>

        <TouchableOpacity
          disabled={disable_increment}
          onPress={() => set_count(count + 1)}
        >
          <MaterialCommunityIcons
            name="plus"
            color={disable_increment ? "rgba(0, 0, 0, 0.12)" : "#ed7550"}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(246,246,248)",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 12,
    gap: 6,
  },
  count_box: {
    minWidth: 50,
    alignItems: "center",
  },
  count_text: {
    fontSize: 26,
    fontWeight: "800",
  },
});

export default Counter;
