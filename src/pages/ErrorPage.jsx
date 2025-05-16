
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Message */}
        <h1 className="text-6xl font-bold text-base-content mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-base-content mb-6">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-base-content/80 mb-8">
          It looks like the page you’re looking for doesn’t exist. Let’s get you
          back to learning with TutorFlow!
        </p>

        {/* Call to Action */}
        <Link to="/" className="btn btn-primary btn-wide">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;