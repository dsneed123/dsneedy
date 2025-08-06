import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import FunctionsIcon from '@mui/icons-material/Functions';
import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';
import MemoryIcon from '@mui/icons-material/Memory';
import SearchIcon from '@mui/icons-material/Search';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { toast } from 'react-toastify'; // For copy feedback
import 'react-toastify/dist/ReactToastify.css'; // Toast styles
import { cheatSheets } from '../CheatSheet/cheatSheets'; // Imported data

// Type definitions for cheat sheet data
interface Topic {
  code: string;
  use: string;
}

interface Section {
  [topicName: string]: Topic;
}

interface Language {
  color: string;
  bgColor: string;
  borderColor: string;
  sections: {
    [sectionName: string]: Section;
  };
}

interface CheatSheets {
  [language: string]: Language;
}

export default function CheatSheets() {
  const [activeLanguage, setActiveLanguage] = useState<keyof CheatSheets>('Python');
  const [activeSection, setActiveSection] = useState<string>('Basic Syntax');
  const [searchTerm, setSearchTerm] = useState('');

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success('Code copied to clipboard!', { autoClose: 2000 });
    } catch (error) {
      console.error('Failed to copy:', error);
      toast.error('Failed to copy code.');
    }
  };

  // Memoize filtered sections to prevent unnecessary recalculations
  const filteredSections = useMemo(() => {
    return Object.entries(cheatSheets[activeLanguage].sections).filter(
      ([sectionName, topics]) =>
        sectionName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        Object.keys(topics as Section).some((topic) =>
          topic.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  }, [activeLanguage, searchTerm]);

  return (
    <>
      <Head>
        <title>Programming Cheat Sheets - Davis Sneed</title>
        <meta name="description" content="Quick reference for common programming languages" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Header */}
        <header className="bg-white shadow-lg sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                  <CodeIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Programming Cheat Sheets</h1>
                  <p className="text-gray-600">Quick reference for common programming languages</p>
                </div>
              </div>

              {/* Search */}
              <div className="relative">
                <label htmlFor="search-input" className="sr-only">Search topics</label>
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="search-input"
                  type="text"
                  placeholder="Search topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Search cheat sheet topics"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Language Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-28">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Languages</h3>
                <div className="space-y-2">
                  {Object.keys(cheatSheets).map((language) => (
                    <button
                      key={language}
                      onClick={() => {
                        setActiveLanguage(language as keyof CheatSheets);
                        setActiveSection(Object.keys(cheatSheets[language as keyof CheatSheets].sections)[0]);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeLanguage === language
                          ? `bg-gradient-to-r ${cheatSheets[language].color} text-white shadow-lg`
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      aria-current={activeLanguage === language ? 'true' : 'false'}
                    >
                      <div className="flex items-center space-x-3">
                        <DataObjectIcon className="w-5 h-5" />
                        <span className="font-medium">{language}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Section Navigation */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Sections</h4>
                  <div className="space-y-1">
                    {Object.keys(cheatSheets[activeLanguage].sections).map((section) => (
                      <button
                        key={section}
                        onClick={() => setActiveSection(section)}
                        className={`w-full text-left px-3 py-2 rounded text-sm transition-all ${
                          activeSection === section
                            ? 'bg-blue-100 text-blue-700 font-medium'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                        aria-current={activeSection === section ? 'true' : 'false'}
                      >
                        {section}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Language Header */}
                <div className={`bg-gradient-to-r ${cheatSheets[activeLanguage].color} p-6 text-white`}>
                  <h2 className="text-2xl font-bold mb-2">{activeLanguage}</h2>
                  <p className="text-white/90">
                    {activeLanguage === 'Python' && 'General-purpose programming language known for readability'}
                    {activeLanguage === 'Java' && 'Object-oriented programming language for enterprise applications'}
                    {activeLanguage === 'C++' && 'Systems programming language with manual memory management'}
                    {activeLanguage === 'JavaScript' && 'Dynamic language for web development and beyond'}
                    {activeLanguage === 'SQL' && 'Query language for managing relational databases'}
                  </p>
                </div>

                {/* Topics */}
                <div className="p-6">
                  {filteredSections.length === 0 ? (
                    <div className="text-center py-8 bg-gray-50 rounded-lg">
                      <SearchIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg">
                        No topics found matching &quot;<strong>{searchTerm}</strong>&quot;
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      {filteredSections.map(([sectionName, topics]) => (
                        <div key={sectionName}>
                          <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                            {sectionName}
                          </h3>
                          <div className="space-y-6">
                            {Object.entries(topics as Section).map(([topicName, topicData]) => {
                              const data = topicData as Topic;
                              return (
                                <div
                                  key={topicName}
                                  className={`border rounded-lg p-5 ${cheatSheets[activeLanguage].borderColor} ${cheatSheets[activeLanguage].bgColor}`}
                                >
                                  <div className="flex items-start justify-between mb-3">
                                    <h4 className="text-lg font-semibold text-gray-900">{topicName}</h4>
                                    <button
                                      onClick={() => copyToClipboard(data.code)}
                                      className="p-2 text-gray-500 hover:text-blue-600 hover:bg-white rounded-lg transition-colors"
                                      aria-label={`Copy ${topicName} code`}
                                      title="Copy code"
                                    >
                                      <ContentCopyIcon className="w-4 h-4" />
                                    </button>
                                  </div>

                                  <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
                                    <pre className="text-green-400 text-sm font-mono whitespace-pre">
                                      <code>{data.code}</code>
                                    </pre>
                                  </div>

                                  <div className="flex items-start space-x-3">
                                    <div className="bg-blue-100 p-2 rounded-lg mt-0.5">
                                      <FunctionsIcon className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                      <p className="text-sm text-gray-700 leading-relaxed">
                                        <strong>When to use:</strong> {data.use}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Reference Cards */}
              <div className="mt-8 grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-md border border-green-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <SpeedIcon className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-gray-900">Time Complexity</h4>
                  </div>
                  <div className="text-sm text-gray-700">
                    <div>O(1) - Constant</div>
                    <div>O(log n) - Logarithmic</div>
                    <div>O(n) - Linear</div>
                    <div>O(n²) - Quadratic</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-md border border-blue-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <MemoryIcon className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Space Complexity</h4>
                  </div>
                  <div className="text-sm text-gray-700">
                    <div>In-place: O(1) extra space</div>
                    <div>Linear: O(n) extra space</div>
                    <div>Recursive: O(depth) stack space</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-md border border-purple-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <StorageIcon className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-gray-900">Data Structure Tips</h4>
                  </div>
                  <div className="text-sm text-gray-700">
                    <div>Arrays: Random access O(1)</div>
                    <div>Hash Tables: Fast lookups</div>
                    <div>Trees: Hierarchical data</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm">© 2025 Davis Sneed. Programming Cheat Sheets for quick reference.</p>
          </div>
        </footer>
      </div>
    </>
  );
}