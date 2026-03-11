


export const PageLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
    <div className="bg-white h-screen w-screen flex flex-col p-4 gap-4">
      {/* <div className="bg-violet-700 w-1/3 rounded-xl"></div> */}
      <div className="bg-[#EBF2FC] my-20 rounded-xl flex-1">
      { children }
      </div>
      <div className="bg-red-200 bottom-0">NAv</div>
    </div>
    </>
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
