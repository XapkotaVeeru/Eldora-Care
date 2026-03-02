import React, { useState } from "react";

const MOCK_CAREGIVERS = [
  { id: 1, name: "Sarah Mitchell", specialization: "Elderly Care", rating: 4.9, available: true },
  { id: 2, name: "James Okafor", specialization: "Physical Therapy", rating: 4.7, available: true },
  { id: 3, name: "Linda Tran", specialization: "Pediatric Care", rating: 4.8, available: false },
  { id: 4, name: "Marcus Rivera", specialization: "Post-Surgery Care", rating: 4.6, available: true },
];

export default function AssignCaregiver({ request, onClose, onAssigned }) {
  const [selected, setSelected] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!selected) return;
    setSubmitting(true);
    setTimeout(() => {
      onAssigned && onAssigned({ request, caregiver: selected });
      setSubmitting(false);
      onClose && onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-fade-in">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-slate-900 font-bold text-lg">Assign Caregiver</h2>
              <p className="text-slate-500 text-sm mt-0.5">
                For: <span className="text-teal-700 font-medium">{request?.patientName}</span>
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 text-2xl leading-none"
            >
              ×
            </button>
          </div>
        </div>

        {/* Caregiver List */}
        <div className="px-6 py-4 flex flex-col gap-3 max-h-80 overflow-y-auto">
          {MOCK_CAREGIVERS.map((c) => (
            <label
              key={c.id}
              className={`flex items-center gap-4 p-3 rounded-xl border cursor-pointer transition-all duration-150 ${
                !c.available
                  ? "opacity-40 cursor-not-allowed border-slate-100 bg-slate-50"
                  : selected?.id === c.id
                  ? "border-teal-500 bg-teal-50"
                  : "border-slate-200 hover:border-teal-300 hover:bg-slate-50"
              }`}
            >
              <input
                type="radio"
                name="caregiver"
                disabled={!c.available}
                checked={selected?.id === c.id}
                onChange={() => c.available && setSelected(c)}
                className="accent-teal-600"
              />
              <div className="w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-sm flex-shrink-0">
                {c.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-800 font-semibold text-sm">{c.name}</p>
                <p className="text-slate-500 text-xs">{c.specialization}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-teal-700 font-semibold text-sm">★ {c.rating}</p>
                <p className={`text-xs font-medium ${c.available ? "text-green-500" : "text-slate-400"}`}>
                  {c.available ? "Available" : "Unavailable"}
                </p>
              </div>
            </label>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 pt-2 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selected || submitting}
            className="flex-1 py-2.5 rounded-xl bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {submitting ? "Assigning..." : "Confirm Assign"}
          </button>
        </div>
      </div>
    </div>
  );
}