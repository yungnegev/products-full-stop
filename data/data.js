const img1 = '../assets/images/prod1.png'
const img2 = '../assets/images/prod2.png'
const img3 = '../assets/images/prod3.png'


export const products = [
    {
        id: 1,
        title: 'Футболка UZcotton мужская',
        price: 522,
        noDiscount:1051,
        quantityRemaining: 2,
        color: 'Белый',
        size: '58',
        img: img1,
        address: 'Коледино WB',
        producer: {
            name: 'OOO Вайлдберриз',
            name2: 'OOO «ВАЙЛДБЕРРИЗ»',
            ogrn: '5167746237148',
            address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
        },
        innitialQuanitity: 1,
        delivery : {
            splitDelivery: false,
            deliveryDates: ['5—6 февраля'],
            deliveryCutoff: null,
        }
    },
    {
        id: 2,
        title: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
        price: 10500.235,
        noDiscount: 11500.235,
        quantityRemaining: null,
        color: 'прозрачный',
        size: null,
        img: img2,
        address: 'Коледино WB',
        producer: {
            name: 'OOO Мегапрофстиль',
            name2: 'OOO «МЕГАПРОФСТИЛЬ»',
            ogrn: '5167746237148',
            address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
        },
        innitialQuanitity: 200,
        delivery : {
            splitDelivery: true,
            deliveryDates: ['5—6 февраля','7—8 февраля'],
            deliveryCutoff: [184, 16],
        }
    },
    {
        id: 3,
        title: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, <br> Faber-Castell',
        price: 247,
        noDiscount: 475,
        quantityRemaining: 2,
        color: null,
        size: null,
        img: img3,
        address: 'Коледино WB',
        producer: {
            name: 'OOO Вайлдберриз',
            name2: 'OOO «ВАЙЛДБЕРРИЗ»',
            ogrn: '5167746237148',
            address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
        },
        innitialQuanitity: 2,
        delivery : {
            splitDelivery: false,
            deliveryDates: ['5—6 февраля'],
            deliveryCutoff: null,
        }
    },
]


export const missingProducts = [
    {
        id: 1,
        title: 'Футболка UZcotton мужская',
        img: img1,
        color: 'Белый',
        size: '58',
    },
    {
        id: 2,
        title: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
        img: img2,
        color: 'прозрачный',
        size: null,
    },
    {
        id: 3,
        title: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
        img: img3,
        color: null,
        size: null,
    }
]

export const cards = [
    {
        id: 1,
        number: '1234 12•• •••• 1234',
        icon: '../assets/icons/mir.svg',
        default: true,
    },
    {
        id: 2,
        number: '1234 12•• •••• 1235',
        icon: '../assets/icons/visa.svg',
        default: false,
    },
    {
        id: 3,
        number: '1234 12•• •••• 1236',
        icon: '../assets/icons/mastercard.svg',
        default: false,
    },
    {
        id: 4,
        number: '1234 12•• •••• 1237',
        icon: '../assets/icons/maestro.svg',
        default: false,
    }
]


export const homeAddresses = [
    {
        id: 1,
        address: 'Бишкек, улица Табышалиева, 57',
        default: true,
        type: 'home',
    },
    {
        id: 2,
        address: 'Бишкек, улица Жукеева-Пудовкина, 77/1',
        default: false,
        type: 'home',
    },
    {
        id: 3,
        address: 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1',
        default: false,
        type: 'home',
    }
]

export const deliveryPointAddresses = [
    {
        id: 1,
        address: 'Бишкек, улица Табышалиева, 57',
        default: false,
        type: 'deliveryPoint',
    }
]