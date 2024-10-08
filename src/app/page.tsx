import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image src="" alt="Logo" width={40} height={40} />
          <h1 className="text-xl font-bold">
            <span className="text-orange-600">Project</span> Hive
          </h1>
        </div>
        <div className="flex gap-4">
          <button className="bg-transparent border border-orange-600 px-4 py-2 rounded hover:bg-white hover:text-orange-300 transition">
            Sign In
          </button>
          <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500 transition">
            Sign Up
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1 flex flex-col items-center justify-center p-10 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Manage Your Projects Seamlessly
        </h2>
        <p className="text-lg max-w-2xl">
          Our platform is designed to help you organize, manage, and track your
          projects effortlessly. From task creation to completion, we provide
          the tools you need for success.
        </p>
      </main>

      {/* Footer */}
      <footer className=" text-orange-600 p-10">
        <h3 className="text-2xl font-semibold text-center mb-8">Features</h3>
        <div className="flex justify-around">
          {/* Feature 1 */}
          <div className="text-center flex flex-col items-center">
            <Image src="" alt="Feature 1" width={80} height={80} />
            <h4 className="mt-4 text-lg font-bold">Real-time Collaboration</h4>
            <p className="text-sm mt-2">
              Work with your team in real-time, with instant updates and
              communication.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center flex flex-col items-center">
            <Image src="" alt="Feature 2" width={80} height={80} />
            <h4 className="mt-4 text-lg font-bold">Task Automation</h4>
            <p className="text-sm mt-2">
              Automate repetitive tasks to boost productivity and save time.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center flex flex-col items-center">
            <Image src="" alt="Feature 3" width={80} height={80} />
            <h4 className="mt-4 text-lg font-bold">Progress Tracking</h4>
            <p className="text-sm mt-2">
              Monitor the progress of each task and project with detailed
              insights.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
