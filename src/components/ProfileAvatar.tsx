import { LogoutOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Dropdown } from "antd"
import type { MenuProps } from 'antd';
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";


const ProfileAvatar = () => {
    
    const dispatch = useDispatch();
    
    const items: MenuProps['items'] = [
        {
          key: '1',
          icon: <UserOutlined />,
          label: <span>Profile</span>,
        },
        {
          key: '2',
          danger: true,
          icon: <LogoutOutlined />,
          label: "Log out",
          onClick: () => dispatch(logout())
        }
    ];

    return (
        <Dropdown menu={{ items }}>
            <Avatar className="cursor-pointer bg-light-border" size={40} icon={<UserOutlined />} />
        </Dropdown>
    )
}
export default ProfileAvatar;