import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  PanResponder,
  Animated,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { SIZES } from "../../../constants";
import ImageLinks from "../../../assets/ImageLink";
import CartIcon from "../../components/CartIcon";
import Button from "../../components/Button";
import { remove_from_wishlist_action } from "../../../actions/wishlist";
import { update_wishlist } from "../../../store/slices/WishlistSlice";

const Wishlist = ({ navigation }) => {
  const wishlist_data = useSelector(
    (state: any) => state?.wishlist?.wishlist_data
  );
  const dispatch = useDispatch<any>();

  const handle_delete = (item: any) => {
    dispatch(update_wishlist(item));
    dispatch(remove_from_wishlist_action(item?.id, item));
  };

  const handle_render_item = (item: any) => {
    return (
      <React.Fragment>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Image
            src={item?.image}
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
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {item?.name}
            </Text>
            <Text style={styles.wishlist_price}>${item?.price}</Text>
          </View>
        </View>

        <Button
          // loading={loading}
          // onClick={onSubmit}
          text={"Add To Cart"}
          type="primary"
          style={{
            marginHorizontal: 5,
          }}
          width={SIZES.width * 0.3}
        />
      </React.Fragment>
    );
  };

  const render_item = ({ item }) => {
    const translateX =  new Animated.Value(0);

    
    const pan_responder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dx < 0) {
          translateX.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < -50) {
          Animated.spring(translateX, {
            toValue: -110,
            useNativeDriver: true,
          }).start();
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    });

    return (
      <View style={{ flexDirection: "row" }}>
        <Animated.View style={{ transform: [{ translateX }] }}>
          <View
            {...pan_responder?.panHandlers}
            key={item?.id}
            style={styles.wishlist_item}
          >
            {handle_render_item(item)}
          </View>
        </Animated.View>

        <TouchableOpacity
          style={styles.delete_btn}
          onPress={() => handle_delete(item)}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#fff",
              fontWeight: "700",
            }}
          >
            Delete
          </Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  wishlist_name: {
    fontSize: 18,
    width: 150,
  },
  wishlist_price: {
    color: "#ed7550",
    fontSize: 16,
    fontWeight: "700",
  },
  delete_btn: {
    justifyContent: "center",
    backgroundColor: "red",
    width: 100,
    alignItems: "center",
    borderRadius: 12,
    position: "absolute",
    right: 0,
    height: "100%",
    zIndex: -1,
  },
});
