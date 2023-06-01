
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
        ui: JSON.parse(localStorage.getItem("uiConfig")),
        editorMode: { isActive: false, changeComponentPosition: []},
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
        result = { ...result, components }
    }

    if(!JSON.parse(localStorage.getItem("uiConfig"))){
        const uiConfig = {
            containerColor: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
            isHintsEnabled: true,
            primaryColor: "#45a198",
            settingsPosition:"top", 
        };
        localStorage.setItem("uiConfig", JSON.stringify(uiConfig))
        result = { ...result, uiConfig }
    }

    return result
}


//background
export const backgroundInitialState = () => {
    let result = {
        isLoading: false, 
        error: null,
        localBackgrounds: [
            {
                url: "https://ik.imagekit.io/q5892cimh/luna/default_backgrounds/bg_default_1_ULa_LbtJN.jpg?updatedAt=1685514595598", 
                thumbnailUrl: "https://ik.imagekit.io/q5892cimh/luna/default_backgrounds/bg_default_1_thumb_DN8tfIKe7.jpg?updatedAt=1685514592579",
                name: "Patapat Bridge"
            },
            {
                url: "https://ik.imagekit.io/q5892cimh/luna/default_backgrounds/bg_default_2_dXQdfj_Bz.jpg?updatedAt=1685514595803", 
                thumbnailUrl: "https://ik.imagekit.io/q5892cimh/luna/default_backgrounds/bg_default_2_thumb_0MF0bUYjb.jpg?updatedAt=1685514592748",
                name: "Tropical Beach"
            },
            {
                url: "https://ik.imagekit.io/q5892cimh/luna/default_backgrounds/bg_default_3_yQN9BOgGX.jpg?updatedAt=1685514595158", 
                thumbnailUrl: "https://ik.imagekit.io/q5892cimh/luna/default_backgrounds/bg_default_3_thumb_0sITQmF0UQ.jpg?updatedAt=1685514592600",
                name: "Windmills"
            },
            {
                url: "https://ik.imagekit.io/q5892cimh/luna/default_backgrounds/bg_default_4__pQaxbRIcL.jpg?updatedAt=1685514595708", 
                thumbnailUrl: "https://ik.imagekit.io/q5892cimh/luna/default_backgrounds/bg_default_4_thumb_9sAqBSh4u.jpg?updatedAt=1685514592710",
                name: "Yosemite Park"
            },
            {
                url: "https://ik.imagekit.io/q5892cimh/luna/default_backgrounds/bg_default_5_sCL4etloi.jpg?updatedAt=1685514593984", 
                thumbnailUrl: "https://ik.imagekit.io/q5892cimh/luna/default_backgrounds/bg_default_5_thumb_tNB6rdX9R.jpg?updatedAt=1685514592559",
                name: "San Francisco"
            },
        ]
    }

    if(!JSON.parse(localStorage.getItem('backgroundConfig'))) {
        const bgConfig = {
            filter:{ brightness: 100, contrast: 100, saturation: 100 },
            isLocal: true,
            isRandom: true,
            src: null,
            activeLocalBackground: null,
        }
        localStorage.setItem("backgroundConfig", JSON.stringify(bgConfig))
        return { ...bgConfig, ...result }
    } else {
        return { ...JSON.parse(localStorage.getItem('backgroundConfig')), ...result }
    }
}

