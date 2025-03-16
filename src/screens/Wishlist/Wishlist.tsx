import React, { useEffect } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import { SIZES } from "../../../constants";
import ImageLinks from "../../../assets/ImageLink";
import CartIcon from "../../components/CartIcon";
import Button from "../../components/Button";

const Wishlist = ({ navigation }) => {
  const wishlist_data = useSelector(
    (state: any) => state?.wishlist?.wishlist_data
  );


  const render_item = ({ item }) => {
    return (
      <TouchableOpacity style={styles.wishlist_item} key={item?.id}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: 8,
          }}
        >
          <Image
            source={item?.image}
            style={{
              resizeMode: "contain",
              marginTop: 10,
              height: SIZES.height * 0.1,
              width: SIZES.width * 0.2,
            }}
            alt="img"
          />

          <View
            style={{
              justifyContent: "center",
              gap: 5,
            }}
          >
            <Text
              style={styles.wishlist_name}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item?.name}
            </Text>
            <Text style={styles.wishlist_price}>${item?.price}</Text>
          </View>

          <Button
            // loading={loading}
            // onClick={onSubmit}
            text={"Add To Cart"}
            type="primary"
            width={SIZES.width * 0.4}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <Header
        container_style={{
          marginRight: 18,
          marginHorizontal: SIZES.width * 0.02,
          marginBottom: 10,
        }}
        title={
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Wishlist</Text>
        }
        left_section={
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <Image
              source={ImageLinks?.back_arrow}
              style={{
                resizeMode: "contain",
                height: SIZES.height * 0.04,
              }}
              alt="logo"
            />
          </TouchableOpacity>
        }
        right_section={<CartIcon />}
      />

      <FlatList
        data={wishlist_data}
        renderItem={render_item}
        keyExtractor={(item) => `${item?.id?.toString()}${item?.name}`}
        contentContainerStyle={styles.wishlist_container}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  wishlist_container: {
    gap: 12,
    marginHorizontal: 20,
  },
  wishlist_item: {
    backgroundColor: "#f6f6f8",
    borderRadius: 12,
  },
  wishlist_name: {
    fontSize: 18,
    maxWidth: 100,
    minWidth: 100,
  },
  wishlist_price: {
    color: "#ed7550",
    fontSize: 16,
    fontWeight: "700",
  },
});
