const UserTableRow = ({ data }) => {
  const { name, email } = data;
  return (
    <div className="w-full h-[60px] mt-[20px] transition ease-linear bg-specialwhite drop-shadow-threeDboxOuterMiddle hover:drop-shadow-threeDboxOuter rounded-[20px] py-[10px] px-[20px] text-[15px]">
      <div className="w-full h-full grid grid-cols-[30px_auto] place-items-center">
        <div className="w-full bg-black h-full"></div>
        <div className="w-full h-full grid grid-cols-5 place-items-center">
          <div>{name}</div>
          <div>{email}</div>
          <div>Administrator</div>
          <button className="px-[20px] py-[8px] transition ease-linear bg-green-500 border-[1px] border-green-500 hover:bg-specialwhite hover:text-green-500 rounded-full text-white text-[12px] font-bold">
            Reset Password
          </button>
          <button className="px-[20px] py-[8px] transition ease-linear bg-red-500 border-[1px] border-red-500 hover:bg-specialwhite hover:text-red-500 rounded-full text-white text-[12px] font-bold">
            Remove User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTableRow;
