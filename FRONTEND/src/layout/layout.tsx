type LayoutProps = {
  sidebar: React.ReactNode;
  children: React.ReactNode;
};

export default function Layout({ sidebar, children }: LayoutProps) {
  return (
    <div className=" max-w-7xl mx-auto min-h-screen ">
      {/* HEADER */}
      <header className=" border border-gray-300 bg-gray-900 text-white py-4">
        <div className="grid grid-flow-col w-max mx-auto gap-4 justify-items-center items-center px-8 ">
          {" "}
          <h1 className="text-xl font-bold bg-red">Job Finder</h1>
        </div>
      </header>
      <header className="bg-indigo-800 text-white px-6 py-5 shadow-lg">
        <div className="grid grid-flow-col items-center">
          <h1 className="text-3xl font-bold text-red-500">Job Finder</h1>
          <p className="text-xl ">TECH JOBS- Find Your Next Opportunity</p>
        </div>
      </header>
      {/* SIDEBAR */}
      <aside className="w-full">{sidebar}</aside>

      {/* BODY */}
      <div className="flex flex-1  mx-auto w-full  rounded-3xl gap-6">
        {/* MAIN */}
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
}
