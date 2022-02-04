import wifi_standart from "../assets/images/wifi_standart.png";
import wifi_double from "../assets/images/wifi_double.png";
import tv_android from "../assets/images/tv_android.png";

export const help_phone = "+7 (3842) 00-00-00";
export const help_info = [
    {
        name: "Категория вопросов #1",
        items: [
            {
                name:"Вопрос #1",
                answer:"Ответ #1",
            },
            {
                name:"Вопрос #2",
                answer:"Ответ #2",
            },
            {
                name:"Вопрос #3",
                answer:"Ответ #3",
            },
            {
                name:"Вопрос #4",
                answer:"Ответ #4",
            },
        ]
    }
]

export const pricelist = {
    routers: {
        standart: 1500,
        double: 3000,
    },
    routers_rent: {
        standart: 50,
        double: 100,
    },
    tvs: {
        android: 3000
    },
    tvs_rent: {
        android: 100
    },
    speeds: [500,700,900]
}

export const routers = [
    {
        tag: "standart",
        image: wifi_standart,
        title: "Обычный"
    },
    {
        tag: "double",
        image: wifi_double,
        title: "Двух-\nдиапазонный"
    },
]

export const tvs = [
    {
        tag: "android",
        image: tv_android,
        title: "Android\nTV-BOX"
    }
]