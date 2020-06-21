import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import App from "./home";
import About from "./about";

const RootDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : App,
    },
    About : {
        screen : About,
    }
})

export default createAppContainer(RootDrawerNavigator);