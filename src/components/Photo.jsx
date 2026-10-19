import { useState } from 'react';

// A photo that removes itself if the file is missing, so the section's
// background colour shows instead of a broken-image icon.
export default function Photo(props) {
  const [missing, setMissing] = useState(false);
  if (missing) return null;
  return <img alt="" {...props} onError={() => setMissing(true)} />;
}
