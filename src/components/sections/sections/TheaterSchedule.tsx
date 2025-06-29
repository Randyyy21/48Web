import React from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { ScheduleItem } from '@/types/schedule';
import { mockSchedules } from '@/data/mockData';

const TheaterSchedule: React.FC = () => {
  const schedules: ScheduleItem[] = mockSchedules;

  return (
    <section className="theater-schedule py-12 bg-dreamland-light">
      <h2 className="text-3xl font-bold text-dreamland-dark text-center mb-8 animate-fade-in">Theater Schedule</h2>
      <div className="container mx-auto">
        {schedules.length === 0 ? (
          <LoadingSpinner />
        ) : (
          <table className="angle.mx-auto w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Show</th>
                <th className="px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule) => (
                <tr key={schedule.id}>
                  <td className="border px-4 py-2">{schedule.date}</td>
                  <td className="border px-4 py-2">{schedule.show}</td>
                  <td className="border px-4 py-2">{schedule.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default TheaterSchedule;