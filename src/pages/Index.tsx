// Update this page (the content is just a fallback if you fail to update the page)
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-6xl font-bold mb-4">
                Welcome to Your Blank App
            </h1>
            <p className="text-xl text-gray-600">
                Start building your amazing project here!
            </p>
        </motion.div>
    </div>
  );
};

export default Index;

