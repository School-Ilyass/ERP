import "./style.css";

import Link from "./Link";

import DashboardIcon from "../../assets/icons/dashboard.svg"
import UsersIcon from "../../assets/icons/users.svg"
import MoneyIcon from "../../assets/icons/money.svg"
import MailIcon from "../../assets/icons/Mail.svg"

function Sidebar(){
    return(
        <div className="sidebar animate__fadeInLeft">
            <Link
                id="dashboardicon"
                href="/dashboard"
                icon={DashboardIcon}
            />
            <Link
                id="usersicon"
                href="/users"
                icon={UsersIcon}
            />
            <Link
                id="moneyicon"
                href="/Money"
                icon={MoneyIcon}
            />
            <Link
                id="mailicon"
                href="/Mail"
                icon={MailIcon}
            />
        </div>
    )
}

export default Sidebar;