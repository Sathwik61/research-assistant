import React from 'react';
import { FileText, Download, Trash } from 'lucide-react';

const Documents = () => {
  const documents = [
    { id: 1, name: 'Report Q1 2024.pdf', size: '2.5 MB', date: '2024-03-15' },
    { id: 2, name: 'Presentation.pptx', size: '5.1 MB', date: '2024-03-10' },
    { id: 3, name: 'Budget 2024.xlsx', size: '1.8 MB', date: '2024-02-28' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Documents</h2>
      <div className="bg-white dark:bg-gray-700 rounded shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-600">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Size</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-500">
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileText className="mr-2" size={20} />
                    <span>{doc.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{doc.size}</td>
                <td className="px-6 py-4 whitespace-nowrap">{doc.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">
                    <Download size={20} />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Documents;