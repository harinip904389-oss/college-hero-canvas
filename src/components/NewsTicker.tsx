import { useEffect, useState } from "react";
import { Bell } from "lucide-react";

const news = [
  "Admissions Open for Academic Year 2024-2025 | Apply Now!",
  "Results of Final Year Examinations Published - Check Student Portal",
  "Annual Day Celebration on December 15th, 2024",
  "New Scholarship Program Announced for Meritorious Students",
  "Campus Placement Drive - Leading Companies Visiting Campus",
];

const NewsTicker = () => {
  const [currentNews, setCurrentNews] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % news.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-primary text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center gap-3">
        <div className="flex items-center gap-2 flex-shrink-0">
          <Bell className="h-4 w-4 animate-pulse" />
          <span className="font-semibold text-sm">Latest Updates:</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${currentNews * 100}%)` }}
          >
            {news.map((item, index) => (
              <div key={index} className="text-sm py-0.5">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
