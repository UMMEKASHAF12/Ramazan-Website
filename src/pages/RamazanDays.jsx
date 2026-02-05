import React from "react";

const RamzanCalculator = () => {
    // Ramzan start date 
    const ramzanStartDate = new Date("2026-02-19");

    // Today's date
    const today = new Date();
    const diffTime = today - ramzanStartDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    const totalRozay = 30;
    const rozaNumber =
        diffDays > 0 && diffDays <= totalRozay ? diffDays : 0;

    const remainingRozay =
        rozaNumber > 0 ? totalRozay - rozaNumber : totalRozay;

    const progress =
        rozaNumber > 0 ? Math.round((rozaNumber / totalRozay) * 100) : 0;

    return (
        <div className="min-h-screen bg-gray-100 pt-24 px-4">
            <h1 className="text-center text-3xl font-bold text-green-700 mb-10">
                Ramzan Calculator
            </h1>

            <div className="max-w-xl mx-auto grid gap-6">

                <div className="bg-white p-6 rounded-xl shadow text-center">
                    <h2 className="text-lg font-semibold text-gray-600">
                        Today’s Roza
                    </h2>
                    <p className="text-4xl font-bold text-green-700 mt-2">
                        {rozaNumber === 0 ? "Ramzan hasn't started yet" : `Roza #${rozaNumber}`}
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow text-center">
                    <h2 className="text-lg font-semibold text-gray-600">
                        How many fasts are completed
                    </h2>
                    <p className="text-3xl font-bold mt-2">
                        {rozaNumber}
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow text-center">
                    <h2 className="text-lg font-semibold text-gray-600">
                        How many fasts are remaining
                    </h2>
                    <p className="text-3xl font-bold mt-2">
                        {remainingRozay}
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow text-center">
                    <h2 className="text-lg font-semibold text-gray-600">
                        Overall Ramzan progress (%)
                    </h2>
                    <p className="text-3xl font-bold mt-2 text-green-700">
                        {progress}%
                    </p>
                </div>

            </div>
        </div>
    );
};

export default RamzanCalculator;
