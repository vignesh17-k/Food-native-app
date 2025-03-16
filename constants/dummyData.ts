const mock_data = {
    my_profile: {
        name: "ByProgrammers",
        profile_image: require("../assets/images/profile.png"),
        address: "No. 88, Jln Padungan, Kuching"
    },
    categories: [
        {
            id: 1,
            name: "Fast Food",
            icon: require("../assets/icons/burger.png")
        },
        {
            id: 2,
            name: "Fruit Item",
            icon: require("../assets/icons/cherry.png")
        },
        {
            id: 3,
            name: "Rice Item",
            icon: require("../assets/icons/rice.png")
        },
        {
            id: 4,
            name: "Beverages",
            icon: require("../assets/icons/drinks.png"),
            style: {
                width: 35,
                height: 35,
            }
        },
        {
            id: 5,
            name: "Desserts",
            icon: require("../assets/icons/desserts.png"),
            style: {
                width: 35,
                height: 35,
            }
        },
        {
            id: 6,
            name: "Salads",
            icon: require("../assets/icons/salad.png"),
            style: {
                width: 35,
                height: 35,
                marginRight: 5
            }
        },
        {
            id: 7,
            name: "Pasta",
            icon: require("../assets/icons/pasta.png"),
            style: {
                width: 35,
                height: 35,
                marginRight: 5
            }
        },
        {
            id: 8,
            name: "Pizza",
            icon: require("../assets/icons/pizza.png"),
            style: {
                width: 35,
                height: 35,
                marginRight: 5
            }
        }
    ],
    popular_rails: [
        {
            id: 1,
            name: "Hamburger",
            description: "Chicken patty hamburger",
            categories: [1],
            price: 15.99,
            calories: 300,
            isFavorite: false,
            image: require("../assets/dummyData/hamburger.png")
        },
        {
            id: 2,
            name: "Hot Tacos",
            description: "Mexican tortilla & tacos",
            categories: [1],
            price: 10.99,
            calories: 200,
            isFavorite: false,
            image: require("../assets/dummyData/hot_tacos.png")
        },
        {
            id: 3,
            name: "Veg Biryani",
            description: "Indian Vegetable Biryani",
            categories: [3],
            price: 12.99,
            calories: 450,
            isFavorite: false,
            image: require("../assets/dummyData/veg_biryani.png")
        },
        {
            id: 4,
            name: "Wrap Sandwich",
            description: "Grilled vegetables sandwich",
            categories: [1, 6],
            price: 10.99,
            calories: 150,
            isFavorite: false,
            image: require("../assets/dummyData/wrap_sandwich.png")
        },
        {
            id: 5,
            name: "Margarita Pizza",
            description: "Classic Margarita Pizza with fresh basil",
            categories: [8],
            price: 14.99,
            calories: 500,
            isFavorite: false,
            image: require("../assets/dummyData/pizza.png")
        },
        {
            id: 6,
            name: "Caesar Salad",
            description: "Crispy romaine lettuce with Caesar dressing",
            categories: [6],
            price: 8.99,
            calories: 120,
            isFavorite: false,
            image: require("../assets/dummyData/salad.png")
        },
        {
            id: 7,
            name: "Chocolate Cake",
            description: "Rich and moist chocolate layered cake",
            categories: [5],
            price: 6.99,
            calories: 450,
            isFavorite: false,
            image: require("../assets/dummyData/cake.png")
        },
        {
            id: 8,
            name: "Lemon Iced Tea",
            description: "Chilled iced tea with a tangy lemon twist",
            categories: [4],
            price: 4.99,
            calories: 80,
            isFavorite: false,
            image: require("../assets/dummyData/lemon_iced_tea.png")
        },
        {
            id: 9,
            name: "Spaghetti Carbonara",
            description: "Creamy pasta with bacon and Parmesan",
            categories: [7],
            price: 13.99,
            calories: 350,
            isFavorite: false,
            image: require("../assets/dummyData/spaghetti.png"),
        },
        {
            id: 10,
            name: "Fruit Salad",
            description: "Fresh seasonal fruits in a bowl",
            categories: [2, 6],
            price: 7.99,
            calories: 150,
            isFavorite: false,
            image: require("../assets/dummyData/fruit_bowl.png"),
        },
        {
            id: 11,
            name: "Chicken Nuggets",
            description: "Golden crispy chicken nuggets",
            categories: [1],
            price: 9.99,
            calories: 250,
            isFavorite: false,
            image: require("../assets/dummyData/chicken_nuggets.png"),
            style: {
                width: '100%',
                height: 120,
            }
        },
        {
            id: 12,
            name: "Orange Juice",
            description: "Freshly squeezed orange juice",
            categories: [4],
            price: 5.99,
            calories: 90,
            isFavorite: false,
            image: require("../assets/dummyData/orange_juice.png"),
        },
        {
            id: 13,
            name: "Grilled Chicken",
            description: "Juicy grilled chicken breast",
            categories: [1, 6],
            price: 11.99,
            calories: 300,
            isFavorite: false,
            image: require("../assets/dummyData/grilled_chicken.png")
        },
        {
            id: 14,
            name: "Mango Smoothie",
            description: "Creamy mango-flavored smoothie",
            categories: [4],
            price: 6.99,
            calories: 150,
            isFavorite: false,
            image: require("../assets/dummyData/mango_smoothie.png")
        },
        {
            id: 15,
            name: "Brownie",
            description: "Chewy and gooey chocolate brownie",
            categories: [5],
            price: 4.99,
            calories: 200,
            isFavorite: false,
            image: require("../assets/dummyData/brownie.png")
        },
        {
            id: 16,
            name: "Cheese Pasta",
            description: "Pasta in rich and creamy cheese sauce",
            categories: [7],
            price: 12.99,
            calories: 400,
            isFavorite: false,
            image: require("../assets/dummyData/cheese_pasta.png")
        },
        {
            id: 17,
            name: "Ice Cream Sundae",
            description: "Ice cream with chocolate syrup and nuts",
            categories: [5],
            price: 5.49,
            calories: 300,
            isFavorite: false,
            image: require("../assets/dummyData/ice_cream_sundae.png")
        },
        {
            id: 18,
            name: "Veggie Burger",
            description: "Burger with a grilled vegetable patty",
            categories: [1, 6],
            price: 11.49,
            calories: 350,
            isFavorite: false,
            image: require("../assets/dummyData/veggie_burger.png")
        },
        {
            id: 19,
            name: "Chicken Alfredo",
            description: "Fettuccine pasta with Alfredo sauce",
            categories: [7],
            price: 13.49,
            calories: 450,
            isFavorite: false,
            image: require("../assets/dummyData/chicken_alfredo.png")
        },
        {
            id: 20,
            name: "Garlic Bread",
            description: "Toasted bread with garlic butter",
            categories: [8],
            price: 5.99,
            calories: 150,
            isFavorite: false,
            image: require("../assets/dummyData/garlic_bread.png")
        }
    ],
    menu_data: [
        {
            id: 1,
            name: "Featured",
            list: [
                {
                    id: 21,
                    name: "Grilled Chicken Burger",
                    description: "Juicy grilled chicken patty with fresh lettuce and tomatoes",
                    categories: [1],
                    price: 12.99,
                    calories: 400,
                    isFavorite: false,
                    image: require("../assets/dummyData/grilled_chicken_burger.png")
                },
                {
                    id: 22,
                    name: "Veggie Pizza",
                    description: "Cheese pizza with a variety of fresh veggies",
                    categories: [8],
                    price: 14.99,
                    calories: 500,
                    isFavorite: false,
                    image: require("../assets/dummyData/veggie_pizza_2.png"),
                },
                {
                    id: 23,
                    name: "Grilled Salmon",
                    description: "Tender salmon grilled to perfection",
                    categories: [1, 6],
                    price: 18.99,
                    calories: 350,
                    isFavorite: false,
                    image: require("../assets/dummyData/grilled_salmon.png")
                },
                {
                    id: 24,
                    name: "Strawberry Cheesecake",
                    description: "Creamy cheesecake topped with fresh strawberries",
                    categories: [5],
                    price: 5.99,
                    calories: 350,
                    isFavorite: false,
                    image: require("../assets/dummyData/strawberry_cake.png")
                },
                {
                    id: 25,
                    name: "Buffalo Wings",
                    description: "Spicy buffalo chicken wings",
                    categories: [1],
                    price: 9.99,
                    calories: 400,
                    isFavorite: false,
                    image: require("../assets/dummyData/buffalo_wing.png"),
                },

            ]
        },
        {
            id: 2,
            name: "Nearby you",
            list: [
                {
                    id: 26,
                    name: "Mushroom Risotto",
                    description: "Creamy mushroom risotto",
                    categories: [7],
                    price: 12.99,
                    calories: 380,
                    isFavorite: false,
                    image: require("../assets/dummyData/mushroom_risotto.png")
                },
                {
                    id: 27,
                    name: "BBQ Chicken Pizza",
                    description: "BBQ chicken pizza with tangy sauce",
                    categories: [8],
                    price: 16.99,
                    calories: 600,
                    isFavorite: false,
                    image: require("../assets/dummyData/chicken_pizza.png")
                },
                {
                    id: 28,
                    name: "Panna Cotta",
                    description: "Silky Italian custard dessert",
                    categories: [5],
                    price: 5.49,
                    calories: 200,
                    isFavorite: false,
                    image: require("../assets/dummyData/panna_cotta_2.png")
                },
                {
                    id: 29,
                    name: "Falafel Wrap",
                    description: "Crispy falafel wrap with hummus",
                    categories: [1],
                    price: 10.49,
                    calories: 350,
                    isFavorite: false,
                    image: require("../assets/dummyData/falafel_wrap.png")
                },
                {
                    id: 30,
                    name: "Beef Steak",
                    description: "Juicy grilled beef steak",
                    categories: [1],
                    price: 22.99,
                    calories: 500,
                    isFavorite: false,
                    image: require("../assets/dummyData/beef_steak.png")
                },
            ]
        },
        {
            id: 3,
            name: "Popular",
            list: [
                {
                    id: 31,
                    name: "Steak Sandwich",
                    description: "Grilled steak in a sandwich",
                    categories: [1],
                    price: 12.99,
                    calories: 500,
                    isFavorite: false,
                    image: require("../assets/dummyData/steak_sandwich.png")
                },
                {
                    id: 32,
                    name: "Tuna Salad",
                    description: "Fresh tuna with mixed greens",
                    categories: [6],
                    price: 9.99,
                    calories: 200,
                    isFavorite: false,
                    image: require("../assets/dummyData/tuna_salad.png")
                },
                {
                    id: 33,
                    name: "Macarons",
                    description: "Assorted French macarons",
                    categories: [5],
                    price: 8.99,
                    calories: 250,
                    isFavorite: false,
                    image: require("../assets/dummyData/macarons.png")
                },
                {
                    id: 34,
                    name: "Berry Smoothie",
                    description: "Blend of fresh berries and yogurt",
                    categories: [2],
                    price: 5.99,
                    calories: 250,
                    isFavorite: false,
                    image: require("../assets/dummyData/berry_smoothie.png")
                },
                {
                    id: 35,
                    name: "Penne Arrabbiata",
                    description: "Penne pasta with spicy tomato sauce",
                    categories: [4],
                    price: 10.49,
                    calories: 500,
                    isFavorite: false,
                    image: require("../assets/dummyData/penne_arrabbiata.png")
                },
            ]
        },
        {
            id: 4,
            name: "Newest",
            list: [
                {
                    id: 36,
                    name: "Shrimp Fried Rice",
                    description: "Savory rice with juicy shrimp",
                    categories: [3],
                    price: 9.49,
                    calories: 520,
                    isFavorite: false,
                    image: require("../assets/dummyData/shrimp_rice.png")
                },
                {
                    id: 37,
                    name: "Quinoa Salad",
                    description: "Protein-packed quinoa with veggies",
                    categories: [4],
                    price: 7.99,
                    calories: 320,
                    isFavorite: false,
                    image: require("../assets/dummyData/salad_2.png")
                },
                {
                    id: 38,
                    name: "Tom Yum Soup",
                    description: "Spicy Thai soup with shrimp",
                    categories: [3],
                    price: 7.99,
                    calories: 250,
                    isFavorite: false,
                    image: require("../assets/dummyData/soup.png")
                },
                {
                    id: 39,
                    name: "Sweet Potato Fries",
                    description: "Crispy sweet potato fries",
                    categories: [1],
                    price: 4.99,
                    calories: 180,
                    isFavorite: false,
                    image: require("../assets/dummyData/fried_potato.png")
                },
                {
                    id: 40,
                    name: "Peking Duck",
                    description: "Crispy duck with hoisin sauce",
                    categories: [1],
                    price: 19.99,
                    calories: 550,
                    isFavorite: false,
                    image: require("../assets/dummyData/peking_duck.png")
                }
            ]
        },
        {
            id: 5,
            name: "Trending",
            list: [
                {
                    id: 41,
                    name: "Sushi Rolls",
                    description: "Fresh sushi rolls with tuna and avocado",
                    categories: [1],
                    price: 14.99,
                    calories: 300,
                    isFavorite: false,
                    image: require("../assets/dummyData/sushi_rolls.png")
                },
                {
                    id: 42,
                    name: "Chicken Parmesan",
                    description: "Breaded chicken topped with marinara sauce",
                    categories: [7],
                    price: 15.49,
                    calories: 500,
                    isFavorite: false,
                    image: require("../assets/dummyData/chicken_parmesan.png")
                },
                {
                    id: 43,
                    name: "Apple Pie",
                    description: "Classic pie with spiced apple filling",
                    categories: [6],
                    price: 5.99,
                    calories: 360,
                    isFavorite: false,
                    image: require("../assets/dummyData/apple_pie.png")
                },
                {
                    id: 44,
                    name: "Pulled Pork Sandwich",
                    description: "Tender pulled pork in a soft sandwich bun",
                    categories: [1],
                    price: 9.99,
                    calories: 350,
                    isFavorite: false,
                    image: require("../assets/dummyData/pulled_pork.png")
                },
                {
                    id: 45,
                    name: "Biryani",
                    description: "Rich Indian rice dish with spices",
                    categories: [3],
                    price: 10.99,
                    calories: 550,
                    isFavorite: false,
                    image: require("../assets/dummyData/biryani.png")
                }
            ]
        },
        {
            id: 6,
            name: "Recommended",
            list: [
                {
                    id: 25,
                    name: "Beef Burritos",
                    description: "Beef burritos with spicy salsa",
                    categories: [1],
                    price: 8.99,
                    calories: 450,
                    isFavorite: false,
                    image: require("../assets/dummyData/beef_burritos.png")
                },
                {
                    id: 3,
                    name: "Tiramisu",
                    description: "Italian dessert with coffee and mascarpone",
                    categories: [6],
                    price: 8.99,
                    calories: 350,
                    isFavorite: false,
                    image: require("../assets/dummyData/tiramisu.png")
                },
                {
                    id: 26,
                    name: "Grilled Veggies",
                    description: "Assorted grilled vegetables with a touch of olive oil",
                    categories: [6],
                    price: 7.99,
                    calories: 150,
                    isFavorite: false,
                    image: require("../assets/dummyData/grilled_veggie.png")
                },
                {
                    id: 57,
                    name: "Mutton Biryani",
                    description: "Aromatic rice dish with tender mutton pieces",
                    categories: [3],
                    price: 12.49,
                    calories: 600,
                    isFavorite: false,
                    image: require("../assets/dummyData/mutton_biryani.png")
                },
                {
                    id: 27,
                    name: "Spicy Ramen",
                    description: "Hot and spicy ramen noodle soup",
                    categories: [3],
                    price: 10.49,
                    calories: 350,
                    isFavorite: false,
                    image: require("../assets/dummyData/ramen_soup.png")
                },
            ]
        }
    ],
    most_searched_data: [
        {
            id: 1,
            image: require("../assets/dummyData/grilled_chicken_burger.png"),
            title: 'Chicken Burger',
        },
        {
            id: 2,
            image: require("../assets/dummyData/pizza.png"),
            title: 'Pizza'
        },
        {
            id: 3,
            image: require("../assets/dummyData/ramen_soup.png"),
            title: 'Ramen Soup'
        },
    ]
}


export default mock_data




