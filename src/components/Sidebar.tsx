import { NavLink } from "react-router-dom";
import { private_routes } from "../routes";

const Sidebar = () => {

  return (
    <aside className="flex-shrink-0 w-[244px] h-screen pr-[30px] pl-[22px] pt-[13px] pb-5 flex flex-col border-r-[1px] border-solid border-light-border">
      <h2 className="text-2xl font-normal leading-[133%] mb-[37px] mx-[10px]">Pages</h2>
      <nav className="flex flex-col gap-[13px]">
        {
          private_routes?.map((item) => (
            item?.config?.isMenu ?
              <NavLink
                key={item?.path}
                to={item?.path}
                className={({ isActive }) =>
                  `sidebar-item ${isActive ? "active-menu" : ""
                  }`
                }
              >
                {item?.config?.icon} {item?.name}
              </NavLink> : undefined
          ))
        }
      </nav>
    </aside>
  );
};

export default Sidebar;
