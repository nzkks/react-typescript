import { useEffect, useRef } from 'react';

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!); // If we are sure the reference never null when we access it, we can add NONNULL assertion when invoking useRef

  useEffect(() => {
    inputRef.current.focus(); // When the NONNULL assertion is in place, we can remove the optional chaining
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
