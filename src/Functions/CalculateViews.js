export const CalculateViews = (views) => {
    if (views > 10000000) {
        const sayilar = String(views).split("")
        return (sayilar[0] + sayilar[1]) + "M"
    }
    if (views > 1000000) {
        const sayilar = String(views).split("")
        return sayilar[0] + "." + sayilar[1] + "M"
    }
    else if (views > 100000) {
        const sayilar = String(views).split("")
        return sayilar[0] + sayilar[1] + sayilar[2] + "K"
    }
    else if (views > 10000) {
        const sayilar = String(views).split("")
        return (sayilar[0] + sayilar[1]) + "K"
    }
    else {
        return views;
    }
}
