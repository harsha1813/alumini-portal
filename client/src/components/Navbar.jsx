function Navbar() {

  const userInfo =
    JSON.parse(
      localStorage.getItem("userInfo")
    );

  const logoutHandler = () => {

    localStorage.removeItem(
      "userInfo"
    );

    window.location.href =
      "/login";
  };

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">

      <h1 className="font-bold text-xl">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">

        <span className="font-medium">
          {userInfo?.name}
        </span>

        <button
          onClick={logoutHandler}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;