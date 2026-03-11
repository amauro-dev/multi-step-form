
export const PageLayout = ({ children }: { children: React.ReactNode }) => {
    // MOBILE
  return (
    <div className=" flex flex-col h-screen w-screen bg-red-200">
      <div className="relative flex flex-col h-full">
        <div className="bg-[url('../../assets/images/bg-sidebar-mobile.svg')] bg-cover bg-center top-0 h-1/4">
        </div>
        <div className="bg-[#EBF2FC] flex-1"></div>
        {/* form */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex flex-1 flex-col bg-white mx-4 p-4 rounded-xl h-2/3">
          { children }
          </div> 
        </div>
      </div>
      <div className="flex flex-row bg-white bottom-0 p-4 justify-end">
        <button className="bg-[#03295A]">Next Step</button>
      </div>
    </div>
  )
  
  // WEB
  return (
    <>
    <div className="bg-white h-screen w-screen flex p-4 gap-4">
      <div className="bg-violet-700 w-1/3 rounded-xl"></div>
      <div className="bg-gray-200 w-screen p-12 mx-20">
      { children }
      </div>
    </div>
    </>
  );
};
