
// user
export const userInitialState = {
    name: localStorage.getItem('name'),
    birthday: localStorage.getItem('birthday')
}


// settings
export const settingsInitialState = () => {
    let result = {
        components: JSON.parse(localStorage.getItem("components")),
        isGeolocationAllowed: JSON.parse(localStorage.getItem("isGeolocationAllowed")),
    }

    if(!JSON.parse(localStorage.getItem("components"))){
        const components = [
            {name: "greeting", value: "Greeting", isVisible: true, addedStyles: {fontFamily: "Lato", fontWeight: 100, color: "#EBEBEB", opacity: 1}},
            {name: "motivations", value: "Motivations", isVisible: true, addedStyles: {fontFamily: "Roboto", fontWeight: 400, color: "#EBEBEB", opacity: 0.9}},
            {name: "bookmarks", value: "Bookmarks", isVisible: true, addedStyles: {fontFamily: 'Source Sans Pro', fontWeight: 300, color: "#EBEBEB", opacity: 1}},
            {name: "search", value: "Search Bar", isVisible: true, addedStyles: {fontFamily: "Inter", fontWeight: 200, color: "#EBEBEB", opacity: 1}},
            {name: "time", value: "Time", isVisible: true, addedStyles: {fontFamily: "Inter", fontWeight: 400, color: "#EBEBEB", opacity: 1}},
            {name: "todos", value: "To-Do List", isVisible: true, addedStyles: {fontFamily: "Inter", fontWeight: 400, color: "#EBEBEB", opacity: 0.8}},
            {name: "weather", value: "Weather", isVisible: true, addedStyles: {fontFamily: "Inter", fontWeight: 400, color: "#EBEBEB", opacity: 1}},
        ];
        localStorage.setItem("components", JSON.stringify(components))
        result = { ...result, components}
    }
    
    return result
}


// // settings -> components
// export const initialComponentsConfig = [
//     {name: "greeting", value: "Greeting", isVisible: true, addedStyles: {fontFamily: "Lato", fontWeight: 100, color: "#EBEBEB", opacity: 1}},
//     {name: "motivations", value: "Motivations", isVisible: true, addedStyles: {fontFamily: "Roboto", fontWeight: 400, color: "#EBEBEB", opacity: 0.9}},
//     {name: "bookmarks", value: "Bookmarks", isVisible: true, addedStyles: {fontFamily: 'Source Sans Pro', fontWeight: 300, color: "#EBEBEB", opacity: 1}},
//     {name: "search", value: "Search Bar", isVisible: true, addedStyles: {fontFamily: "Inter", fontWeight: 200, color: "#EBEBEB", opacity: 1}},
//     {name: "time", value: "Time", isVisible: true, addedStyles: {fontFamily: "Inter", fontWeight: 400, color: "#EBEBEB", opacity: 1}},
//     {name: "todos", value: "To-Do List", isVisible: true, addedStyles: {fontFamily: "Inter", fontWeight: 400, color: "#EBEBEB", opacity: 0.8}},
//     {name: "weather", value: "Weather", isVisible: true, addedStyles: {fontFamily: "Inter", fontWeight: 400, color: "#EBEBEB", opacity: 1}},
// ];


//background
export const backgroundInitialState = () => {
    if(!JSON.parse(localStorage.getItem('backgroundConfig'))) {
        const bgConfig = {
            filter:{ brightness: 100, contrast: 100, saturation: 100 },
            isLocal: true,
            isRandom: true,
            src: null,
        }
        localStorage.setItem("backgroundConfig", JSON.stringify(bgConfig))
        return bgConfig
    } else {
        return JSON.parse(localStorage.getItem('backgroundConfig'))
    }
}


