import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <div className="mt-4">
          <div className="text-5xl font-medium text-gray-700">Page Not Found</div>
          <p className="mt-4 text-lg text-gray-600">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="mt-2 text-lg text-indigo-600 font-medium">
            🚧 Website Under Construction 🚧
          </p>
        </div>
        <div className="mt-8">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
