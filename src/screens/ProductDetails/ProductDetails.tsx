import { Image, Skeleton, Text, View } from "native-base";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import { SIZES } from "../../../constants";
import ImageLinks from "../../../assets/ImageLink";
import CartIcon from "../../components/CartIcon";
import product from "../../../utils/api/product";
import { FontAwesome } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { debounce, find, map } from "lodash";
import Button from "../../components/Button";
import {
  add_to_wishlist_action,
  remove_from_wishlist_action,
} from "../../../actions/wishlist";
import { update_wishlist } from "../../../store/slices/WishlistSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = ({ route, navigation }) => {
  const { id } = route.params;
  const [loading, set_loading] = useState(false);
  const [product_details, set_product_details] = useState<any>({});
  const [selected_size, set_selected_size] = useState<any>(null);
  const dispatch = useDispatch();

  const wishlist_data = useSelector(
    (state: any) => state.wishlist.wishlist_data
  );

  const is_favorite = find(
    wishlist_data,
    (wishlist: any) => wishlist?.id === product_details?.id
  );

  const product_info = useMemo(() => {
    const product_info_arr = [
      {
        icon: <Fontisto name="star" color="white" size={22} />,
        text: product_details?.rating,
        style: {
          backgroundColor: "#ed7550",
          padding: 10,
          borderRadius: 15,
        },
        text_style: { color: "white" },
      },
      {
        icon: (
          <MaterialCommunityIcons
            name="clock-time-four-outline"
            color="#000"
            size={24}
          />
        ),
        text: product_details?.deliveryTime,
        style: {},
        text_style: {},
      },
    ];

    if (product_details?.isFreeShipping) {
      product_info_arr.push({
        icon: <Fontisto name="dollar" color="#000" size={20} />,
        text: "Free shipping",
        style: {},
        text_style: {},
      });
    }
    return product_info_arr;
  }, [product_details]);

  const handle_get_details = async () => {
    try {
      set_loading(true);
      const response = await product.get_product_details(id);
      set_product_details(response?.data);
      set_selected_size(response?.data?.sizes?.[0]);
    } catch (error) {
      console.log(error);
    } finally {
      set_loading(false);
    }
  };

  const debounced_ref = useRef(
    debounce((product_id: string, exists: any, dispatch: any, data: any) => {
      if (exists) {
        dispatch(remove_from_wishlist_action(product_id, data));
      } else {
        dispatch(add_to_wishlist_action(product_id));
      }
    }, 2000)
  );

  const handle_favorite = (data: any) => {
    const product_id_exist = find(
      wishlist_data,
      (item: any) => item?.id === data?.id
    );
    dispatch(update_wishlist(data));
    debounced_ref.current(data?.id, product_id_exist, dispatch, data);
  };

  useEffect(() => {
    handle_get_details();
  }, [id]);

  const handle_render_icon = (
    icon: any,
    text: string,
    style?: any,
    text_style?: any
  ) => {
    return (
      <View
        key={text}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          ...style,
        }}
      >
        {icon}
        <Text style={{ fontSize: 16, fontWeight: "500", ...text_style }}>
          {text}
        </Text>
      </View>
    );
  };

  const handle_render_product_image = () => {
    return (
      <View
        style={{
          backgroundColor: "rgb(246,246,248)",
          borderRadius: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={ImageLinks.calories}
              style={styles.icon_style}
              alt="image"
            />

            <Text style={styles.calories}>
              {product_details?.calories} Calories
            </Text>
          </View>

          <TouchableOpacity onPress={() => handle_favorite(product_details)}>
            <FontAwesome
              name={is_favorite ? "heart" : "heart-o"}
              size={20}
              color={is_favorite ? "#ff6e4d" : "grey"}
            />
          </TouchableOpacity>
        </View>

        <Image
          src={product_details?.image}
          style={
            product_details?.style ? product_details?.style : styles.image_style
          }
          alt="product"
        />
      </View>
    );
  };

  const handle_render_product_info = () => {
    return (
      <View
        style={{
          paddingVertical: 20,
          gap: 10,
        }}
      >
        <Text style={{ fontSize: 38, fontWeight: "800", lineHeight: 40 }}>
          {product_details?.name}
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "grey",
            lineHeight: 28,
            fontWeight: "500",
            textAlign: "justify",
          }}
        >
          {product_details?.fullDescription}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
            gap: 15,
          }}
        >
          {map(product_info, (item) => {
            return handle_render_icon(
              item?.icon,
              item?.text,
              item?.style,
              item?.text_style
            );
          })}
        </View>

        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Sizes:</Text>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 15,
            }}
          >
            {map(product_details?.sizes, (size) => (
              <TouchableOpacity
                key={size}
                style={
                  selected_size === size ? styles.active_size : styles.size
                }
                onPress={() => set_selected_size(size)}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: selected_size === size ? "white" : "black",
                  }}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  };

  const handle_render_skeleton = () => {
    return (
      <View style={{ padding: 20, gap: 20 }}>
        <View>
          <Skeleton height={250} width={"100%"} borderRadius={10} />
        </View>

        <Skeleton variant={"text"} height={5} width={"60%"} borderRadius={10} />

        <Skeleton
          variant={"text"}
          height={150}
          width={"100%"}
          borderRadius={10}
        />

        <Skeleton
          variant={"text"}
          height={5}
          width={"100%"}
          borderRadius={10}
        />

        <View style={{ flexDirection: "row", gap: 15 }}>
          <Skeleton height={50} width={20} borderRadius={10} />

          <Skeleton height={50} width={20} borderRadius={10} />
          <Skeleton height={50} width={20} borderRadius={10} />
        </View>
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
        title={<Text style={{ fontSize: 20, fontWeight: "700" }}>DETAILS</Text>}
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

      {loading ? (
        handle_render_skeleton()
      ) : (
        <View
          style={{
            flex: 1,
            paddingHorizontal: 30,
            paddingVertical: 10,
            position: "relative",
          }}
        >
          <View style={styles.details_section}>
            {handle_render_product_image()}
            {handle_render_product_info()}
          </View>

          <View style={styles.footer_section}>
            <Button type="primary" text="Add to Cart" />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  tab_container: {
    flexDirection: "row",
    height: SIZES.height * 0.1,
    paddingHorizontal: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 15,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: -15,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },

  details_section: {
    flex: 1,
  },

  image_style: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    resizeMode: "contain",
  },

  footer_section: {
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOffset: {
      width: 0,
      height: -15,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,

    position: "absolute",
    backgroundColor: "white",
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  calories: {
    fontSize: 14,
    color: "grey",
  },

  icon_style: {
    resizeMode: "contain",
    height: SIZES.height * 0.03,
    width: SIZES.width * 0.03,
    paddingHorizontal: 15,
    marginTop: 5,
  },

  size: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "grey",
    borderStyle: "solid",
  },

  active_size: {
    backgroundColor: "#ed7550",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});
