import React from "react";
import { Link } from "react-router-dom";

// Hadees data for each day of Ramzan
const hadeesData = [
  { roza: 1, arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ", urdu: "اعمال کا دارومدار نیتوں پر ہے" },
  { roza: 2, arabic: "الصِّيَامُ جُنَّةٌ", urdu: "روزہ ڈھال ہے" },
  { roza: 3, arabic: "لِلصَّائِمِ فَرْحَتَانِ", urdu: "روزہ دار کے لیے دو خوشیاں ہیں" },
  { roza: 4, arabic: "مَنْ صَامَ رَمَضَانَ إِيمَانًا", urdu: "جو ایمان کے ساتھ رمضان کے روزے رکھے" },
  { roza: 5, arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ", urdu: "تم میں بہترین وہ ہے جو قرآن سیکھے" },
  
];

const Home = () => {
  //Ramzan start date 
  const ramzanStart = new Date("2026-02-19");
  const today = new Date();

  // Day difference
  const diffTime = today - ramzanStart;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Roza logic
  const rozaNumber = diffDays + 1;
  const totalRozay = 30;
  const guzrayRozay = diffDays < 0 ? 0 : diffDays;
  const remainingRozay = totalRozay - guzrayRozay;

  // Progress
  const progress = Math.min(Math.round((guzrayRozay / totalRozay) * 100), 100);

  // Today’s Hadees
  const todayHadees = hadeesData.find(h => h.roza === rozaNumber);

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4">
      <h1 className="text-center text-3xl font-bold text-green-700 mb-8">
        Ramazan Dashboard 
      </h1>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-sm text-gray-500">Today’s Roza</p>
          <p className="text-2xl font-bold text-green-700">{rozaNumber}</p>
        </div>

        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-sm text-gray-500">Completed Rozay</p>
          <p className="text-2xl font-bold">{guzrayRozay}</p>
        </div>

        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-sm text-gray-500">Remaining Rozay</p>
          <p className="text-2xl font-bold">{remainingRozay}</p>
        </div>

        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-sm text-gray-500">Progress</p>
          <p className="text-2xl font-bold">{progress}%</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-3xl mx-auto mb-10">
        <div className="w-full bg-gray-300 rounded-full h-3">
          <div
            className="bg-green-700 h-3 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Today’s Hadees */}
      {todayHadees && (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow mb-8">
          <h2 className="text-green-700 font-bold mb-2">
            Hadees for Roza #{rozaNumber}
          </h2>
          <p className="text-right text-lg font-serif mb-3">
            {todayHadees.arabic}
          </p>
          <p className="text-gray-700 text-sm">
            {todayHadees.urdu}
          </p>
        </div>
      )}

      {/* Quick Links */}
      <div className="flex justify-center gap-4">
        <Link to="/hadess" className="bg-green-700 text-white px-4 py-2 rounded">
          View All Hadees
        </Link>
        <Link to="/sehri-iftari" className="bg-gray-700 text-white px-4 py-2 rounded">
          Sehri & Iftari
        </Link>
      </div>
    </div>
  );
};

export default Home;
