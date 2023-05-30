
// user
export const userInitialState = {
    name: localStorage.getItem('name'),
    birthday: localStorage.getItem('birthday')
}


// settings
export const settingsInitialState = {
    components: JSON.parse(localStorage.getItem("components")),
    isGeolocationAllowed: JSON.parse(localStorage.getItem("isGeolocationAllowed")),

}
// settings -> components
export const initialComponentsSettings = [
    {name: "greeting", value: "Greeting", isVisible: true, addedStyles: {fontFamily: "Lato", fontWeight: 100, color: "#EBEBEB", opacity: 1}},
    {name: "motivations", value: "Motivations", isVisible: true, addedStyles: {fontFamily: "Roboto", fontWeight: 400, color: "#EBEBEB", opacity: 0.9}},
    {name: "bookmarks", value: "Bookmarks", isVisible: true, addedStyles: {fontFamily: 'Source Sans Pro', fontWeight: 300, color: "#EBEBEB", opacity: 1}},
    {name: "search", value: "Search Bar", isVisible: true, addedStyles: {fontFamily: "Inter", fontWeight: 200, color: "#EBEBEB", opacity: 1}},
    {name: "time", value: "Time", isVisible: true, addedStyles: {fontFamily: "Inter", fontWeight: 400, color: "#EBEBEB", opacity: 1}},
    {name: "todos", value: "To-Do List", isVisible: true, addedStyles: {fontFamily: "Inter", fontWeight: 400, color: "#EBEBEB", opacity: 0.8}},
    {name: "weather", value: "Weather", isVisible: true, addedStyles: {fontFamily: "Inter", fontWeight: 400, color: "#EBEBEB", opacity: 1}},
];
