import ProfileAvatar from "./ProfileAvatar";

const Header = () => {
  return (
    <header className="p-4 flex justify-end items-center border-b-[1px] border-solid border-light-border py-[10px] px-[21px]">
        <ProfileAvatar />
    </header>
  );
};

export default Header;
