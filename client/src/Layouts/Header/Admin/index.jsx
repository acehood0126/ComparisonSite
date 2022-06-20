import avatar from "../../../Assets/Images/avatars/avatar1.jpg";

const AdminHeader = () => {
  return (
    <div className="w-full h-[60px] px-[20px] bg-transparent flex justify-end items-center">
      <img src={avatar} alt="" className="w-[30px] h-[30px] rounded-full" />
    </div>
  );
};

export default AdminHeader;
