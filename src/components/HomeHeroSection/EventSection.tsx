"use client";
import React, { useState, useEffect } from 'react';

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
}

interface Timer extends Event {
  timeRemaining: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const EventsSection: React.FC = () => {
  const [timers, setTimers] = useState<Timer[]>([]);

  useEffect(() => {
    const events: Event[] = [
      {
        title: 'Community Fellowship Night Programme',
        date: '2023-12-31',
        time: '18:30:00', // 24-hour format
        location: 'Main Hall',
        description: 'Join us for an evening of fellowship, music, and community bonding.',
      },
      {
        title: 'Sunday Worship Service Programme',
        date: '2024-01-25',
        time: '09:00:00', // 24-hour format
        location: 'Main Sanctuary',
        description: 'Come together for a powerful worship experience and an uplifting message.',
      },
      // Add more events as needed
    ];

    const calculateTimeRemaining = () => {
      const now = new Date();

      const updatedTimers: Timer[] = events.map((event) => {
        const eventDate = new Date(`${event.date} ${event.time}`);
        const timeDifference = eventDate.getTime() - now.getTime();

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return {
          ...event,
          timeRemaining: {
            days,
            hours,
            minutes,
            seconds,
          },
        };
      });

      setTimers(updatedTimers);
    };

    const timerInterval = setInterval(calculateTimeRemaining, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timerInterval);
  }, []); // Empty dependency array for one-time memoization

  return (
    <section id="events" className="px-2 bg-gradient-to-r from-green-900 to-yellow-900 py-8 md:py-12 text-white">
                  <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold">Upcoming Events</h2>
          <p className="text-gray-200 text-sm md:text-base">Join us for these special occasions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Calendar */}
          <div className="bg-green-900 p-4 md:p-6 rounded-lg">
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Calendar</h3>
            <ul className="list-disc text-gray-200 ml-4 md:ml-6">
              {timers.map(event => (
                <li key={event.title} className="mb-1">
                  <span className="font-bold">{event.date}:</span> {event.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Event Details */}
          <div className="col-span-2 space-y-4 md:space-y-6">
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Event Details</h3>
            {timers.map(event => (
              <div key={event.title} className="bg-yellow-900 p-4 md:p-6 rounded-lg">
                <h4 className="text-base md:text-lg font-bold mb-2 md:mb-4">{event.title}</h4>
                <p className="text-gray-200 text-sm md:text-base">
                  <span className="font-bold">Date:</span> {event.date}<br />
                  <span className="font-bold">Time:</span> {event.time}<br />
                  <span className="font-bold">Location:</span> {event.location}<br />
                  <span className="font-bold">Time Remaining:</span> {`${event.timeRemaining.days}d ${event.timeRemaining.hours}h ${event.timeRemaining.minutes}m ${event.timeRemaining.seconds}s`}
                  <br />
                  {event.description && (
                    <>
                      <span className="font-bold">Description:</span> {event.description}<br />
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;