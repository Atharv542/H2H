import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { workshops } from "../data/workshops";

export default function EventGallery() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const workshop = useMemo(() => workshops.find((w) => w.id === id), [id]);

  const slides = useMemo(() => {
    if (!workshop) return [];
    return workshop.photos.map((p) => ({ src: p.url }));
  }, [workshop]);

  if (!workshop) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <Link
            to="/events"
            className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
          >
            ← Back to Events
          </Link>

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-slate-900">Workshop not found</h2>
            <p className="mt-2 text-slate-600">
              The event you are trying to open doesn’t exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              to="/events"
              className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
            >
              ← Back to Events
            </Link>

            <h1 className="mt-4 text-2xl font-bold text-slate-900">{workshop.title}</h1>
            <p className="mt-1 text-slate-600">
              {workshop.date} • {workshop.location} • {workshop.photos.length} photos
            </p>
          </div>

          
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {workshop.photos.map((photo, i) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
              aria-label={`Open image ${i + 1}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.alt || `Workshop photo ${i + 1}`}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-black/15" />
                <div className="absolute bottom-2 right-2 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-slate-900">
                  View
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox open={open} close={() => setOpen(false)} index={index} slides={slides} />
      </div>
    </div>
  );
}
