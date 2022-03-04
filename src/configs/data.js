import wifi_standart from "../assets/images/wifi_standart.png";
import wifi_double from "../assets/images/wifi_double.png";
import tv_android from "../assets/images/tv_android.png";

export const help_phone = "+7 (3842) 76-43-65";
export const help_info = [
    {
        name: "Подключение интернета",
        items: [
            {
                name:"Как производится подключение?",
                answer:"Вы подаёте заявку на подключение через сайт или по телефону. Если существует возможность подключения и вас всё устраивает, в удобный для вас день к вам приедет наш сотрудник, оформит договор на предоставление услуг и подключит ваш дом к интернету.",
            },
            {
                name:"Как можно оплатить подключение?",
                answer:"Оплата за подключение производится после подписания договора. Вам предоставят доступ к личному кабинету, где вы сможете оплатить как услугу подключения, так и другие услуги",
            },
            {
                name:"Предоставление оборудования",
                answer:"Вы можете купить или взять наше оборудование в аренду. На данный момент мы предоставляем Wi-Fi роутеры и ТВ-Приставки",
            },
            {
                name:"Что если у меня есть своё оборудование?",
                answer:"Мы можем подключить вас к интернету, даже если у вас стоит собственное оборудование",
            },
            {
                name:"Нужна ли мне ТВ-Приставка?",
                answer:"Если вы обладатель Smart-TV на базе Android, то вы можете пользоваться услугами IPTV абсолютно бесплатно, без преобретения дополнительного оборудования",
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