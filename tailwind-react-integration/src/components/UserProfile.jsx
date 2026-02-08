function UserProfile() {
  return (
    <div
      className="
        bg-gray-100
        mx-auto my-20
        rounded-lg
        shadow-lg
        text-center
        p-4 md:p-8
        max-w-xs md:max-w-sm
      "
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="
          mx-auto
          rounded-full
          w-24 h-24 md:w-36 md:h-36
        "
      />

      <h1
        className="
          my-4
          text-blue-800
          text-lg md:text-xl
          font-semibold
        "
      >
        John Doe
      </h1>

      <p
        className="
          text-gray-600
          text-sm md:text-base
        "
      >
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;

