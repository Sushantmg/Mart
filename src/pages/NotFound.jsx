
import { Link } from 'react-router-dom';
import { ExclamationTriangleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center px-4">
            <div className="max-w-xl text-center">
                <div className="flex justify-center mb-6">
                    <ExclamationTriangleIcon className="h-20 w-20 text-yellow-500" />
                </div>
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-6">Oops! The page you’re looking for doesn’t exist or has been moved.</p>
                <Link
                    to="/"
                    className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    <ArrowLeftIcon className="h-5 w-5 mr-2" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
