import { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

const FloatingLeaves = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    // Generate random leaves
    const generatedLeaves = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 15 + Math.random() * 20,
      animationDelay: Math.random() * 10,
      size: 16 + Math.random() * 24,
      opacity: 0.1 + Math.random() * 0.2
    }));
    setLeaves(generatedLeaves);
  }, []);

  return (
    <div className="floating-leaves fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="leaf absolute animate-float-leaves"
          style={{
            left: `${leaf.left}%`,
            animationDuration: `${leaf.animationDuration}s`,
            animationDelay: `${leaf.animationDelay}s`
          }}
        >
          <Leaf
            className="text-theme-leaf"
            style={{
              width: leaf.size,
              height: leaf.size,
              opacity: leaf.opacity
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingLeaves;
