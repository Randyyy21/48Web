"use client";

import React from 'react';
import Card from '@/components/ui/Card';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { EventItem } from '@/types/event';
import { mockEvents } from '@/data/mockData';

const Events: React.FC = () => {
  const events: EventItem[] = mockEvents;

  return (
    <section className="events py-12 bg-white">
      <h2 className="text-3xl font-bold text-dreamland-dark text-center mb-8 animate-fade-in">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {events.length === 0 ? (
          <LoadingSpinner />
        ) : (
          events.map((event) => (
            <Card
              key={event.id}
              image={event.image}
              title={event.title}
              description={event.date}
              buttonText="Details"
              onButtonClick={() => console.log('Event details')}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Events;