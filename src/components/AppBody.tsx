import { AppBodyStyle } from "./styles/AppBodyStyle";

const Menu = ({ children }: { children: React.ReactNode }) => {
  return <AppBodyStyle>{children}</AppBodyStyle>;
};

export default Menu;
