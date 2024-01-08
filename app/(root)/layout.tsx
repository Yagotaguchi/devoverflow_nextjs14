import LeftSideBar from "@/components/shared/LeftSideBar";
import Navbar from "@/components/shared/navbar/Navbar";
import RightSideBar from "@/components/shared/RightSideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LeftSideBar />
        <section className=" background-light900_dark200 light-border sticky left-0 top-0 flex h-screen min-h-screen w-fit flex-1  flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 max-md:pb-14  sm:px-14 lg:w-[266px] dark:shadow-none">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSideBar />
      </div>
      Toaster
    </main>
  );
};

export default Layout;
