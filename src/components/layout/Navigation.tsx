import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-6">
        <li><Link href="/" className="hover:text-dreamland-light">Home</Link></li>
        <li><Link href="/news" className="hover:text-dreamland-light">News</Link></li>
        <li><Link href="/events" className="hover:text-dreamland-light">Events</Link></li>
        <li><Link href="/members" className="hover:text-dreamland-light">Members</Link></li>
        <li><Link href="/live" className="hover:text-dreamland-light">Live Stream</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;