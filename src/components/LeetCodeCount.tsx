'use client';

import { useEffect, useState } from 'react';

interface LeetCodeStats {
  totalSolved: number;
}

export default function LeetCodeCount() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://leetcode-api.henry-wu.dev/henry-wu-1130');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const totalSolved = data.totalSolved;
        
        if (typeof totalSolved !== 'number') {
          throw new TypeError('Invalid response structure');
        }

        setStats({ totalSolved });
      } catch (error) {
        console.error('Failed to fetch LeetCode stats:', error);
        setStats({ totalSolved: 95 });
      }
    };

    fetchStats();
  }, []);

  return stats?.totalSolved ? `${stats.totalSolved}+` : '95+';
}
