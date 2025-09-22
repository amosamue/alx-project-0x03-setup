// pages/index.tsx
import Layout from "../components/layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] bg-gray-50 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Splash App</h1>
        <p className="text-lg text-gray-600">A starter Next.js + TypeScript + Tailwind template for AI apps.</p>
      </div>
    </Layout>
  );
};

export default Home;
