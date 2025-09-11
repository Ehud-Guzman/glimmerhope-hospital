import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Trigger fade-out first
    setFade(false);

    const timeout = setTimeout(() => {
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Trigger fade-in
      setFade(true);
    }, 50); // small delay to allow fade-out

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
      {children}
    </div>
  );
}
