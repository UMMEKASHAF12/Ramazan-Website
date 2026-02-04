import React, { useEffect, useState } from "react";

// Ramazan start date
const ramazanStart = new Date("2026-02-17");

const SehriIftari = () => {
  const [times, setTimes] = useState(null);
  const [day, setDay] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch timings on component mount
  useEffect(() => {
    fetchTimes();
  }, []);

  // Fetch API function
  const fetchTimes = async (date = "") => {
    setLoading(true);

    const selectedDate = date || new Date().toISOString().split("T")[0];

    try {
      const response = await fetch(
        `https://api.aladhan.com/v1/timingsByCity/${selectedDate}?city=Karachi&country=Pakistan&method=2`
      );
      const data = await response.json();
      setTimes(data.data.timings);
    } catch (error) {
      console.error("Error fetching timings:", error);
      setTimes(null);
    }

    setLoading(false);
  };

  // Handle Search button
  const handleSearch = () => {
    if (day) {
      fetchTimes(day);
    }
  };

  // Convert 24-hour time to 12-hour format
  const formatTime = (time24) => {
    const [hour, minute] = time24.split(":").map(Number);
    const suffix = hour >= 12 ? "PM" : "AM";
    const hour12 = ((hour + 11) % 12) + 1; // 0->12
    return `${hour12}:${minute.toString().padStart(2, "0")} ${suffix}`;
  };

  // Calculate Ramazan day
  const getRamazanDay = (selectedDate) => {
    const diffTime = new Date(selectedDate) - ramazanStart;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays > 0 ? diffDays : null;
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow">
        <h2 className="text-center text-2xl font-bold text-green-700 mb-6">
          Sehri & Iftari Timings
        </h2>

        {/* Date Picker */}
        <div className="flex gap-2 mb-6">
          <input
            type="date"
            className="w-full border rounded px-3 py-2"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-green-700 text-white px-4 rounded"
          >
            Search
          </button>
        </div>

        {loading && <p className="text-center">Loading...</p>}

        {times && (
          <div className="space-y-3 text-gray-700">
            {/* Ramazan day */}
            {day && getRamazanDay(day) && (
              <p>
                <b>Ramazan Day:</b> {getRamazanDay(day)}
              </p>
            )}

            {/* Sehri & Iftari */}
            <p>
              <b>Sehri (Fajr):</b> {formatTime(times.Fajr)}
            </p>
            <p>
              <b>Iftari (Maghrib):</b> {formatTime(times.Maghrib)}
            </p>

            <hr />

            {/* All prayers */}
            <p>Fajr: {formatTime(times.Fajr)}</p>
            <p>Dhuhr: {formatTime(times.Dhuhr)}</p>
            <p>Asr: {formatTime(times.Asr)}</p>
            <p>Maghrib: {formatTime(times.Maghrib)}</p>
            <p>Isha: {formatTime(times.Isha)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SehriIftari;
