import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PanResponder,
  Animated,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { SIZES } from "../../../constants";
import ImageLinks from "../../../assets/ImageLink";
import Button from "../../components/Button";
import constants from "../../../utils/constants";
import {
  set_cart_products,
  type CartProduct,
} from "../../../store/slices/CartSlice";

const Cart = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const cart_products =
    useSelector((state: any) => state?.cart?.cart_data?.products) ?? [];

  const handle_delete = (item: CartProduct) => {
    const next_products = cart_products.filter(
      (product: CartProduct) => product?.id !== item?.id,
    );
    dispatch(set_cart_products(next_products));
  };

  const handle_render_item = (item: CartProduct) => {
    return (
      <React.Fragment>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(constants.route_names.ProductDetails, {
              id: item?.id,
            });
          }}
        >
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
                style={styles.cart_name}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {item?.name}
              </Text>
              <Text style={styles.cart_price}>${item?.price}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <Button
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

  const render_item = ({ item }: { item: CartProduct }) => {
    const translateX = new Animated.Value(0);
    const pan_responder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_evt, gestureState) => {
        if (gestureState.dx < 0) {
          translateX.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_evt, gestureState) => {
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
            {...pan_responder.panHandlers}
            key={item?.id}
            style={styles.cart_item}
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
        title={<Text style={{ fontSize: 20, fontWeight: "700" }}>Cart</Text>}
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
        right_section={null}
      />

      {cart_products.length === 0 ? (
        <View style={styles.empty_wrap}>
          <View style={styles.empty_glow}>
            <View style={styles.empty_icon_circle}>
              <Image
                source={ImageLinks.cart}
                style={styles.empty_cart_icon}
              />
            </View>
          </View>

          <Text style={styles.empty_title}>Hungry? Your cart is empty</Text>
          <Text style={styles.empty_subtitle}>
            Browse delicious meals and add your favorites to get started.
          </Text>

          <TouchableOpacity
            style={styles.empty_cta}
            activeOpacity={0.85}
            onPress={() => navigation.navigate(constants.route_names.Home)}
          >
            <Text style={styles.empty_cta_text}>Browse Menu</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.empty_secondary}
            onPress={() => navigation.navigate(constants.route_names.Search)}
          >
            <Text style={styles.empty_secondary_text}>Search food</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={cart_products}
          renderItem={render_item}
          keyExtractor={(item) => `${item?.id?.toString()}${item?.name}`}
          contentContainerStyle={styles.cart_container}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cart_container: {
    gap: 12,
    marginHorizontal: 20,
  },
  cart_item: {
    backgroundColor: "#f6f6f8",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  cart_name: {
    fontSize: 18,
    width: 150,
  },
  cart_price: {
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
  empty_wrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
    paddingBottom: SIZES.height * 0.06,
  },
  empty_glow: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#fff3ee",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },
  empty_icon_circle: {
    width: 108,
    height: 108,
    borderRadius: 54,
    backgroundColor: "#ed7550",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#ed7550",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },
  empty_cart_icon: {
    width: 44,
    height: 44,
    tintColor: "#fff",
    resizeMode: "contain",
  },
  empty_title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1a1a1a",
    textAlign: "center",
    marginBottom: 10,
  },
  empty_subtitle: {
    fontSize: 15,
    fontWeight: "400",
    color: "#8a8a8a",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 28,
    maxWidth: 280,
  },
  empty_cta: {
    backgroundColor: "#ed7550",
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 14,
    minWidth: 200,
    alignItems: "center",
  },
  empty_cta_text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  empty_secondary: {
    marginTop: 16,
    paddingVertical: 8,
  },
  empty_secondary_text: {
    color: "#ed7550",
    fontSize: 15,
    fontWeight: "600",
  },
});
