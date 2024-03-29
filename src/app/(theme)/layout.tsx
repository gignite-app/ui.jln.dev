import { type PropsWithChildren } from "react";

import { FloatingMenu } from "@/client/components/menu/floating-menu";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative w-screen">
      {/* <ThemeBanner />
      {children}
      <FloatingMenu /> */}
      {children}
      <FloatingMenu />
    </div>
  );
};

export default Layout;
