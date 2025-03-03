import { useLoading } from "@/Context/LoadingProvider";
import { motion } from "framer-motion";

const Loader = () => {
  const { isLoading } = useLoading();

  return (
    isLoading && (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-background text-yellow-600 z-50">
        <motion.div
          className="w-15 h-15 border-3 border-yellow-600 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <h1 className="text-4xl font-bold mt-4">Loading...</h1>
      </div>
    )
  );
};

export default Loader;
