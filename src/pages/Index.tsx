
import React from 'react';
import Header from '@/components/Header';
import LiveStatusToggle from '@/components/LiveStatusToggle';
import FilterBar from '@/components/FilterBar';
import MatchFeed from '@/components/MatchFeed';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <LiveStatusToggle />
        <FilterBar />
        <MatchFeed />
      </main>
    </div>
  );
};

export default Index;
