import { useState } from "react";

const ToggleButton = ({
  toggleTheme,
  isDarkTheme,
}: {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}) => {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={isToggled}
          onChange={onToggle}
          className="sr-only"
        />
        <div
          className={`box flex h-6 w-12 p-1 rounded-full ${
            isToggled ? "bg-purple-950" : "bg-gray-300"
          }`}
        >
          <div
            className={`h-4 w-4 rounded-full bg-white transition duration-150 ${
              isToggled ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </div>
      </div>
    </label>
  );
};

export default ToggleButton;
