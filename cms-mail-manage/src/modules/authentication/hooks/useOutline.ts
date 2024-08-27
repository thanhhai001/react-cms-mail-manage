import { useEffect, useState } from "react";

function useOutline(error: boolean) {
  const [outline, setOutline] = useState("");
  const baseColor = error ? 'rose-200' : 'sky-200';
  const strongColor = error ? 'rose-400' : 'sky-400';
  
  useEffect(() => {
    
  });

  setOutline(`outline outline-${baseColor} hover:outline-${strongColor} focus:ring focus:outline-${strongColor}`);

  return outline
}

export default useOutline