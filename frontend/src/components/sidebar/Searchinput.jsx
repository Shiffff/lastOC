import { FaSearch } from "react-icons/fa";

const Searchinput = () => {
  return (
    <form className="flex item-center gap-2 px-4 pt-5">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />
      <button>
        <FaSearch />
      </button>
    </form>
  );
};

export default Searchinput;
