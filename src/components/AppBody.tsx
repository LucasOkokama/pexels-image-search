import { AppBodyStyle } from "./styles/AppBodyStyle";
import { MenuStyle } from "./styles/Menu.styled";

const Menu = ({ children }: { children: React.ReactNode }) => {
  return <AppBodyStyle>{children}</AppBodyStyle>;
};

export default Menu;
