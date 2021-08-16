
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon
} from "@heroicons/react/outline";
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon
} from "@heroicons/react/solid";
import SideBarRow from './SideBarRow'

function SideBar() {
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SideBarRow Icon={UsersIcon} title="Friends"/>
            <SideBarRow Icon={UserGroupIcon} title="Groups"/>
            <SideBarRow Icon={ShoppingBagIcon} title="Marketplace"/>
            <SideBarRow Icon={DesktopComputerIcon} title="Watch"/>
            <SideBarRow Icon={CalendarIcon} title="Events"/>
            <SideBarRow Icon={ClockIcon} title="Memories"/>
            <SideBarRow Icon={ChevronDownIcon} title="See More"/>
        </div>
    )
}
export default SideBar