import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface Props {
  initial_count?: number;
  value?: number;
  onChange?: (count: number) => void;
  disable_increment?: boolean;
  disable_decrement?: boolean;
  style?: any;
}

const Counter = ({
  initial_count = 1,
  value,
  onChange,
  disable_increment,
  disable_decrement,
  style,
}: Props) => {
  const is_controlled = value !== undefined;
  const [internal_count, set_internal_count] = useState(initial_count);
  const count = is_controlled ? value : internal_count;
  const disabled_decrement = count <= 1 || disable_decrement;

  useEffect(() => {
    if (!is_controlled) {
      set_internal_count(initial_count);
    }
  }, [initial_count, is_controlled]);

  const update_count = (next_count: number) => {
    if (!is_controlled) {
      set_internal_count(next_count);
    }
    onChange?.(next_count);
  };

  return (
    <View style={{ ...styles.container, ...style }}>
      <TouchableOpacity
        disabled={disabled_decrement}
        onPress={() => {
          if (disabled_decrement) return;
          update_count(Math.max(1, count - 1));
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
        onPress={() => update_count(count + 1)}
      >
        <MaterialCommunityIcons
          name="plus"
          color={disable_increment ? "rgba(0, 0, 0, 0.12)" : "#ed7550"}
          size={30}
        />
      </TouchableOpacity>
    </View>
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
