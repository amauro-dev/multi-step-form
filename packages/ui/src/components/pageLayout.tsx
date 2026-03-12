import { useBreakpoint } from "@multi-step-form/utils";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useBreakpoint("lg");

  if (isDesktop)
    return (
      <>
        <div className="bg-white h-screen w-screen flex flex-row p-4 gap-4">
          <div className="bg-[url('../../assets/images/bg-sidebar-desktop.svg')] bg-cover w-1/3 rounded-xl"></div>
          <div className="bg-green-200 w-full p-12 mx-20 flex-col">
            <div className="flex flex-col h-full">{children}</div>
            <div className="flex flex-row bg-white p-4 justify-end">
              <button className="bg-[#03295A]">Next Step</button>
            </div>
          </div>
          {/* <div className="bg-red-200 w-full p-12 mx-20">{children}</div> */}
          {/* <div className="flex-1 flex-col p-12 mx-20">
            <div className="bg-gray-200 w-screen p-12 mx-20">{children}</div>
            <div className="flex flex-row bg-white bottom-0 p-4 justify-end">
              <button className="bg-[#03295A]">Next Step</button>
            </div>
          </div> */}
        </div>
      </>
    );

  return (
    <div className={"flex flex-col h-screen w-screen"}>
      <div className="relative flex flex-col h-full">
        <div className="bg-[url('../../assets/images/bg-sidebar-mobile.svg')] bg-cover bg-center top-0 h-1/4"></div>
        <div className="bg-[#EBF2FC] flex-1"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex flex-1 flex-col bg-white mx-4 p-4 rounded-xl h-2/3">
            {children}
          </div>
        </div>
      </div>
      <div className="flex flex-row bg-white bottom-0 p-4 justify-end">
        <button className="bg-[#03295A]">Next Step</button>
      </div>
    </div>
  );
};
