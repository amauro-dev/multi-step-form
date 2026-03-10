export const PageLayout = ({ children }: { children: React.ReactNode }) => {
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
