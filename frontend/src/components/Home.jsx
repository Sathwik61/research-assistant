
const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h2>
      <p className="mb-4">This is your home page. You can add quick links, summaries, or important information here.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
          <ul className="list-disc list-inside">
            <li>Uploaded new document</li>
            <li>Updated profile information</li>
            <li>Completed task XYZ</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Quick Stats</h3>
          <ul className="list-disc list-inside">
            <li>5 documents uploaded this week</li>
            <li>3 tasks completed</li>
            <li>2 new messages</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;