"use client";

import { useState, useEffect } from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  timezone?: string;
  type: string;
  description: string;
  location: string;
  organizer: string;
  participants?: string[];
  maxParticipants?: number | null;
  rewards?: string[] | null;
  recurring?: string | null;
}

const eventTypeColors: Record<string, string> = {
  pvp: "bg-red-500",
  social: "bg-blue-500",
  training: "bg-green-500",
  dungeon: "bg-purple-500",
  contest: "bg-yellow-500",
  PvP: "bg-red-500",
  Social: "bg-blue-500",
  Training: "bg-green-500",
  Dungeon: "bg-purple-500",
  Contest: "bg-yellow-500",
};

const eventTypeBorders: Record<string, string> = {
  pvp: "border-red-400",
  social: "border-blue-400",
  training: "border-green-400",
  dungeon: "border-purple-400",
  contest: "border-yellow-400",
  PvP: "border-red-400",
  Social: "border-blue-400",
  Training: "border-green-400",
  Dungeon: "border-purple-400",
  Contest: "border-yellow-400",
};

export function EventsCalendar() {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [filterType, setFilterType] = useState<string>("All");

  useEffect(() => {
    // Load events from JSON file
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch(() => {
        // Fallback to static events if API fails
        import("@/data/events.json")
          .then((module) => setEvents(module.default.events))
          .catch(console.error);
      });
  }, []);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const getEventsForDate = (day: number | null) => {
    if (!day) return [];
    
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    
    return events.filter((event) => {
      if (filterType !== "All" && event.type !== filterType) return false;
      return event.date === dateStr;
    });
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = getDaysInMonth(currentDate);

  return (
    <div className="bg-[#0d0d30] border border-[#1a1a4a] rounded-lg p-6">
      {/* Calendar Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevMonth}
            className="p-2 hover:bg-[#1a1a4a] rounded transition-colors"
          >
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold text-white">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-[#1a1a4a] rounded transition-colors"
          >
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Event Type Filter */}
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="bg-[#1a1a4a] border border-[#2a2a5a] rounded px-3 py-2 text-gray-300 focus:outline-none focus:border-blue-400"
        >
          <option value="All">All Events</option>
          <option value="PvP">PvP Events</option>
          <option value="Social">Social Events</option>
          <option value="Training">Training Events</option>
          <option value="Dungeon">Dungeon Events</option>
          <option value="Contest">Contest Events</option>
        </select>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {/* Week day headers */}
        {weekDays.map((day) => (
          <div key={day} className="p-2 text-center text-sm font-medium text-gray-400 border-b border-[#2a2a5a]">
            {day}
          </div>
        ))}
        
        {/* Calendar days */}
        {days.map((day, index) => {
          const dayEvents = getEventsForDate(day);
          const isToday = day && 
            currentDate.getMonth() === new Date().getMonth() && 
            currentDate.getFullYear() === new Date().getFullYear() && 
            day === new Date().getDate();

          return (
            <div
              key={index}
              className={`min-h-[80px] p-2 border border-[#2a2a5a] ${
                day ? "hover:bg-[#1a1a4a] cursor-pointer" : ""
              } ${isToday ? "bg-blue-900/30 border-blue-400" : ""}`}
            >
              {day && (
                <>
                  <div className={`text-sm font-medium mb-1 ${isToday ? "text-blue-400" : "text-gray-300"}`}>
                    {day}
                  </div>
                  <div className="space-y-1">
                    {dayEvents.slice(0, 2).map((event) => (
                      <div
                        key={event.id}
                        onClick={() => setSelectedEvent(event)}
                        className={`text-xs p-1 rounded cursor-pointer hover:opacity-80 ${eventTypeColors[event.type]} text-white`}
                        title={event.title}
                      >
                        {event.title.length > 12 ? `${event.title.substring(0, 12)}...` : event.title}
                      </div>
                    ))}
                    {dayEvents.length > 2 && (
                      <div className="text-xs text-gray-400">
                        +{dayEvents.length - 2} more
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`bg-[#0d0d30] border-2 ${eventTypeBorders[selectedEvent.type]} rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto`}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{selectedEvent.title}</h3>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded ${eventTypeColors[selectedEvent.type]}`}></div>
                <span className="text-gray-300">{selectedEvent.type} Event</span>
              </div>
              
              <div className="text-gray-300">
                <strong>Date:</strong> {selectedEvent.date}
              </div>
              
              <div className="text-gray-300">
                <strong>Time:</strong> {selectedEvent.time} {selectedEvent.timezone && `(${selectedEvent.timezone})`}
              </div>
              
              <div className="text-gray-300">
                <strong>Location:</strong> {selectedEvent.location}
              </div>
              
              <div className="text-gray-300">
                <strong>Organizer:</strong> {selectedEvent.organizer}
              </div>
              
              <div className="text-gray-300">
                <strong>Description:</strong> {selectedEvent.description}
              </div>
              
              {selectedEvent.maxParticipants && (
                <div className="text-gray-300">
                  <strong>Participants:</strong> {selectedEvent.participants?.length || 0}/{selectedEvent.maxParticipants}
                </div>
              )}
              
              {selectedEvent.rewards && selectedEvent.rewards.length > 0 && (
                <div className="text-gray-300">
                  <strong>Rewards:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    {selectedEvent.rewards.map((reward, index) => (
                      <li key={index}>{reward}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="mt-6 flex justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                Join Event on Discord
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
