import { useEffect, useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import api from "../../../Utils/api";
import UserTableRow from "../../../Components/usertablerow";
import UserTableHeader from "../../../Components/usertableheader";

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      api
        .get("/user")
        .then((res) => res.data)
        .then((res) => {
          var arr = [];
          res.forEach((element) => {
            arr.push({
              name: element.name,
              email: element.email,
            });
          });
          setData(arr);
        })
        .catch((err) => {});
    };
    fetchData();
  }, []);

  return (
    <div className="w-full md:p-[30px] p-[10px]">
      <div className="flex justify-end">
        <button
          to="/admin"
          className="px-[20px] py-[6px] bg-gradient-to-br from-pink to-purple rounded-full border-[1px] border-purple/0 text-specialwhite font-bold text-[13px] ease-linear duration-300 hover:from-specialwhite hover:to-specialwhite hover:border-purple hover:text-purple flex items-center"
        >
          <FiUserPlus className="mr-[5px] w-[18px] h-[18px]" />
          New User
        </button>
      </div>
      <div className="w-full mt-[20px]">
        <UserTableHeader />
        {data.map((item) => (
          <UserTableRow key={item.email} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Users;
