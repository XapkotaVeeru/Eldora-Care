import React from "react";

const statusStyles = {
  Pending: "bg-amber-100 text-amber-700 border border-amber-200",
  Assigned: "bg-teal-100 text-teal-700 border border-teal-200",
  Completed: "bg-slate-100 text-slate-600 border border-slate-200",
  Cancelled: "bg-red-100 text-red-600 border border-red-200",
};

export default function RequestCard({ request, onAssign }) {
  const { id, patientName, serviceType, date, location, status, notes } = request;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">
            Request #{id}
          </p>
          <h3 className="text-slate-900 font-semibold text-base">{patientName}</h3>
        </div>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
            statusStyles[status] || statusStyles["Pending"]
          }`}
        >
          {status}
        </span>
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        <Detail icon="🩺" label="Service" value={serviceType} />
        <Detail icon="📅" label="Date" value={date} />
        <Detail icon="📍" label="Location" value={location} />
      </div>

      {/* Notes */}
      {notes && (
        <p className="text-sm text-slate-500 bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
          {notes}
        </p>
      )}

      {/* Action */}
      {status === "Pending" && (
        <button
          onClick={() => onAssign && onAssign(request)}
          className="mt-1 w-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors duration-150"
        >
          Assign Caregiver
        </button>
      )}
    </div>
  );
}

function Detail({ icon, label, value }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-base leading-none mt-0.5">{icon}</span>
      <div>
        <p className="text-slate-400 text-xs">{label}</p>
        <p className="text-slate-700 font-medium">{value}</p>
      </div>
    </div>
  );
}