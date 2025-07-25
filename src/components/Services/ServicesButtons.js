import ServiceTabs from "./ServicesTabs"
import useSmallScreen from "../Function/useSmallScreen";
import MobileServiceTabs from "./Mobile/MobileServiceTabs";
export default function ServicesButtons() {
    const isSmallScreen = useSmallScreen();
    return(
        <div>
            {isSmallScreen ? <MobileServiceTabs /> : <ServiceTabs />}
        </div>
    )
}