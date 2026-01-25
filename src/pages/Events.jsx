import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { workshops } from "../data/workshops";

export default function Events() {
  const navigate = useNavigate();

  const stats = useMemo(() => {
    const totalEvents = workshops.length;
    const totalPhotos = workshops.reduce((acc, w) => acc + (w.photos?.length || 0), 0);

    // latest event (simple: last item; or sort by date if you store real date)
    const latest = workshops[0];

    return { totalEvents, totalPhotos, latest };
  }, []);

  const featured = workshops[0];

  const showPlaceholders = workshops.length < 3;
  const placeholderCount = Math.max(0, 3 - workshops.length);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-sm">
          <div className="absolute inset-0 opacity-20">
            {/* subtle background image */}
            {featured?.coverImage ? (
              <img
                src={featured.coverImage}
                alt="Events background"
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>

          <div className="relative p-8 sm:p-10">
            <p className="text-xs font-semibold tracking-wider text-white/80">
              HEAD2HEART • EVENTS & WORKSHOPS
            </p>

            <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
              Moments from our workshops
            </h1>

            <p className="mt-3 max-w-2xl text-white/80">
              Explore memories, smiles, and healing journeys captured during our sessions.
              Click any workshop to view the full gallery.
            </p>

            {/* Stats chips */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                {stats.totalEvents} Event{stats.totalEvents !== 1 ? "s" : ""}
              </div>
              <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                {stats.totalPhotos} Photos
              </div>
              {stats.latest ? (
                <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                  Latest: {stats.latest.date}
                </div>
              ) : null}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  if (featured) navigate(`/events/${featured.id}`);
                }}
                className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-white/90"
              >
                View Latest Gallery
              </button>

          
            </div>
          </div>
        </div>

        {/* FEATURED EVENT (big card) */}
        {featured ? (
          <div className="mt-10">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Featured Event</h2>
                <p className="mt-1 text-sm text-slate-600">
                  A quick highlight of the most recent workshop.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate(`/events/${featured.id}`)}
              className="group grid w-full overflow-hidden rounded-3xl bg-white text-left shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md md:grid-cols-[1.2fr_1fr]"
            >
              <div className="relative min-h-[220px] overflow-hidden">
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                  {featured.photos.length} photos
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-slate-900">{featured.title}</h3>
                <p className="mt-2 text-slate-600">
                  {featured.date} • {featured.location}
                </p>

                <p className="mt-4 text-slate-600">
                  Tap to explore the complete gallery. You can view photos in a grid and open
                  them in full-screen.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900">
                  Open gallery <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            </button>
          </div>
        ) : null}

        {/* ALL EVENTS GRID */}
        <div className="mt-10">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-slate-900">All Events</h2>
            <p className="mt-1 text-sm text-slate-600">
              Click a workshop to view photos.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workshops.map((w) => (
              <button
                key={w.id}
                type="button"
                onClick={() => navigate(`/events/${w.id}`)}
                className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={w.coverImage}
                    alt={w.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                    {w.photos.length} photos
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900">{w.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {w.date} • {w.location}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                    View photos{" "}
                    <span className="transition group-hover:translate-x-0.5">→</span>
                  </div>
                </div>
              </button>
            ))}

            {/* Placeholders to avoid "empty" feeling */}
            {showPlaceholders &&
              Array.from({ length: placeholderCount }).map((_, i) => (
                <div
                  key={`placeholder-${i}`}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
                >
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-600">
                        More events coming soon
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="h-4 w-2/3 rounded bg-slate-100" />
                    <div className="mt-3 h-3 w-1/2 rounded bg-slate-100" />
                    <div className="mt-5 h-3 w-1/3 rounded bg-slate-100" />
                  </div>
                </div>
              ))}
          </div>
        </div>

       
      </div>
    </div>
  );
}
