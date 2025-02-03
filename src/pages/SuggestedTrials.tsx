import React, { useState } from 'react';
import { Trial } from '../types';

const SuggestedTrials: React.FC = () => {
  const [category, setCategory] = useState<string>('all');
  const [bookmarked, setBookmarked] = useState<Trial[]>([]);

  return (
    <div className="suggested-trials">
      <div className="filters">
        <button onClick={() => setCategory('streaming')}>Streaming</button>
        <button onClick={() => setCategory('software')}>Software</button>
        <button onClick={() => setCategory('gaming')}>Gaming</button>
      </div>
      
      <div className="recommendations">
        {/* AI-driven trial recommendations */}
      </div>
      
      <div className="bookmarks">
        <h3>Your Bookmarks</h3>
        {/* Bookmarked trials */}
      </div>
    </div>
  );
};

export default SuggestedTrials;
