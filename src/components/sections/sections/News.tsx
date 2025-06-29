"use client";

import React from 'react';
import Card from '@/components/ui/Card';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { NewsItem } from '@/types/news';
import { mockNews } from '@/data/mockData';

const News: React.FC = () => {
  const news: NewsItem[] = mockNews;

  return (
    <section className="news py-12 bg-dreamland-light">
      <h2 className="text-3xl font-bold text-dreamland-dark text-center mb-8 animate-fade-in">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {news.length === 0 ? (
          <LoadingSpinner />
        ) : (
          news.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.excerpt}
              buttonText="Read More"
              onButtonClick={() => console.log('Read more')}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default News;