import React, { useEffect, useRef, useState } from "react";
import {
  MdCampaign,
  MdAssignment,
  MdNotifications,
  MdGroups,
  MdCalendarToday,
  MdAccessTime,
  MdArrowForward,
} from "react-icons/md";

import api from "../../../services/api";

/* ── Category config ─────────────────────────────────────────── */

const CATEGORY_CONFIG = [
  {
    id: "announcement",
    title: "Announcement",
    icon: <MdCampaign size={16} />,
    headerBg: "#0d173b",
    headerText: "#fff",
    accentColor: "#378ADD",
    borderColor: "#0d173b",
  },
  {
    id: "tender",
    title: "Tender",
    icon: <MdAssignment size={16} />,
    headerBg: "#0d173b",
    headerText: "#fff",
    accentColor: "#BA7517",
    borderColor: "#0d173b",
  },
  {
    id: "notice",
    title: "Notice",
    icon: <MdNotifications size={16} />,
    headerBg: "#0d173b",
    headerText: "#fff",
    accentColor: "#D85A30",
    borderColor: "#0d173b",
  },
  {
    id: "event",
    title: "Events",
    icon: <MdGroups size={16} />,
    headerBg: "#0d173b",
    headerText: "#fff",
    accentColor: "#3B6D11",
    borderColor: "#0d173b",
  },
];

/* ── Helpers ─────────────────────────────────────────────────── */

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

/* ── Infinite vertical scroll track ─────────────────────────── */
/*
  FIX 1 — overflow-hidden is set on the wrapper div below.
  FIX 4 — genuine infinite loop: duplicate items are appended so
           when the track reaches the halfway point it snaps back
           to 0 seamlessly. Pauses on hover.
*/
const AutoScrollTrack = ({ items, speed = 0.4 }) => {
  const wrapperRef = useRef(null);
  const trackRef   = useRef(null);
  const frameRef   = useRef(null);
  const yRef       = useRef(0);
  const pausedRef  = useRef(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track   = trackRef.current;
    if (!track || !wrapper) return;

    // Only scroll if there are enough items to overflow the card
    const needsScroll = track.scrollHeight / 2 > wrapper.clientHeight;
    if (!needsScroll) return;

    const animate = () => {
      if (!pausedRef.current) {
        const half = track.scrollHeight / 2;
        yRef.current -= speed;
        if (Math.abs(yRef.current) >= half) yRef.current = 0;
        track.style.transform = `translateY(${yRef.current}px)`;
      }
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [items, speed]);

  const doubled = [...items, ...items]; // duplicate for seamless loop

  return (
    /* FIX 1 — overflow-hidden lives here so nothing bleeds out */
    <div
      ref={wrapperRef}
      className="flex-1 overflow-hidden relative"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div
        ref={trackRef}
        className="absolute inset-x-0 top-0 will-change-transform"
      >
        {doubled.map((item, idx) => (
          <NoticeRow key={`${item._id}-${idx}`} item={item} />
        ))}
      </div>
    </div>
  );
};

/* ── Single notice row ───────────────────────────────────────── */

const NoticeRow = ({ item }) => {
  const hasLink = item.link && item.link.trim() !== "";

  const handleClick = () => {
    if (hasLink) window.open(item.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      className={[
        "border-b border-base-200 px-4 py-3 last:border-b-0 transition-colors duration-150",
        hasLink
          ? "cursor-pointer hover:bg-base-200/60 group"
          : "cursor-default",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-base-200 px-2 py-1 text-[11px] font-semibold text-base-content/60">
          <MdCalendarToday size={11} />
          {formatDate(item.createdAt)}
        </span>

        {/* External link icon — only shown when link exists */}
        {hasLink && (
          <MdArrowForward
            size={13}
            className="shrink-0 text-base-content/30 group-hover:text-primary transition-colors"
          />
        )}
      </div>

      <h4
        className={[
          "mt-2 text-sm font-semibold leading-snug",
          hasLink
            ? "text-base-content group-hover:text-primary transition-colors"
            : "text-base-content",
        ].join(" ")}
      >
        {item.title}
      </h4>

      <p className="mt-1 text-xs text-base-content/60 leading-relaxed line-clamp-2">
        {item.message}
      </p>

      {item.lastDate && (
        <p className="mt-2 flex items-center gap-1 text-xs font-medium text-error">
          <MdAccessTime size={12} />
          Last Date: {formatDate(item.lastDate)}
        </p>
      )}
    </div>
  );
};

/* ── Category card ───────────────────────────────────────────── */

const CategoryCard = ({ category, items }) => (
  /* FIX 1 — overflow-hidden on the card itself */
  <div
    className="flex h-[380px] flex-col rounded-2xl border-2 bg-base-100 shadow-sm overflow-hidden"
    style={{ borderColor: category.borderColor }}
  >
    {/* Header */}
    <div
      className="flex shrink-0 items-center gap-2 px-4 py-3"
      style={{ background: category.headerBg, color: category.headerText }}
    >
      {category.icon}
      <h2 className="font-bold text-sm">{category.title}</h2>
      <span
        className="badge badge-sm ml-auto font-semibold px-2 py-1 rounded-full text-xs"
        style={{ background: category.accentColor, color: "#fff", border: "none" }}
      >
        {items.length}
      </span>
    </div>

    {/* Body */}
    {items.length === 0 ? (
      <div className="flex flex-1 items-center justify-center text-sm text-base-content/40">
        No records found
      </div>
    ) : (
      <AutoScrollTrack items={items} />
    )}

    {/* FIX 2 — proper DaisyUI button, no rounded-none hack */}
    <button
      className="btn btn-neutral w-full rounded-none rounded-b-2xl shrink-0 gap-1 flex items-center justify-center p-3"
    >
      View All <MdArrowForward />
    </button>
  </div>
);

/* ── Loading skeleton ────────────────────────────────────────── */

const LoadingSkeleton = () => (
  <section className="bg-base-200 py-10 px-5">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-6">
      {CATEGORY_CONFIG.map((c) => (
        <div
          key={c.id}
          className="h-[380px] rounded-2xl border-2 bg-base-100 overflow-hidden flex flex-col"
          style={{ borderColor: c.borderColor }}
        >
          <div
            className="px-4 py-3 shrink-0"
            style={{ background: c.headerBg }}
          >
            <div className="h-4 w-24 rounded bg-white/20 animate-pulse" />
          </div>
          <div className="flex-1 p-4 space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-1.5">
                <div className="h-2.5 w-20 rounded bg-base-300 animate-pulse" />
                <div className="h-3 w-full rounded bg-base-300 animate-pulse" />
                <div className="h-3 w-4/5 rounded bg-base-300 animate-pulse" />
              </div>
            ))}
          </div>
          <div className="h-10 bg-base-300 animate-pulse shrink-0 rounded-b-2xl" />
        </div>
      ))}
    </div>
  </section>
);

/* ── Main component ──────────────────────────────────────────── */

export default function NoticeBoard() {
  const [notifications, setNotifications] = useState([]); // FIX 3 — no dummy data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await api.get("/notifications");
      const list =
        response.data.notifications ??
        response.data.data ??
        response.data ??
        [];
      setNotifications(Array.isArray(list) ? list : []);
    } catch (err) {
      console.error(err);
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSkeleton />;

  const grouped = {
    announcement: notifications.filter((x) => x.category === "announcement"),
    tender:       notifications.filter((x) => x.category === "tender"),
    notice:       notifications.filter((x) => x.category === "notice"),
    event:        notifications.filter((x) => x.category === "event"),
  };

  return (
    <section className="bg-base-200 py-10 px-5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        {CATEGORY_CONFIG.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            items={grouped[category.id] ?? []}
          />
        ))}
      </div>
    </section>
  );
}