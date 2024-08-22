import { useEffect } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import SideBar from "../../components/sidebar/SideBar";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { authUser } = useAuthContext();
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    if (authUser && !authUser.isAdmin) {
      setSelectedConversation({
        _id: "66c354e1663e2d35d8709ff9",
        fullName: "admin",
        username: "admin",
        gender: "male",
        isAdmin: true,
        profilePic: "https://avatar.iran.liara.run/public/boy?username=admin",
        createdAt: "2024-08-19T14:21:21.730Z",
        updatedAt: "2024-08-19T14:21:21.730Z",
        __v: 0,
      });
    }
  }, [authUser, setSelectedConversation]);

  return (
    <div className="adminDashBoard">
      <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        {authUser.isAdmin && <SideBar />}
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
