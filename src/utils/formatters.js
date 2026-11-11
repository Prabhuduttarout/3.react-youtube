//=> Duration Calulation
export function formatDuration(duration) {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

  if (!match) return "0:00";

  const hours = Number(match[1] || 0);
  const minutes = Number(match[2] || 0);
  const seconds = Number(match[3] || 0);

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

// => View Count
export function formatViews(viewCount) {
  const views = Number(viewCount);

  if (views >= 10000000) {
    return (views / 10000000).toFixed(1) + " Crore";
  }

  if (views >= 100000) {
    return (views / 100000).toFixed(1) + " lakh";
  }

  if (views >= 1000) {
    return (views / 1000).toFixed(1) + "K";
  }

  return String(views);
}

// => Publish Duaration Calulation
export function formatTimeAgo(publishedAt) {
  const publishedDate = new Date(publishedAt);
  const now = new Date();

  const diffMs = now - publishedDate;

  if (Number.isNaN(publishedDate.getTime()) || diffMs < 0) {
    return "Just now";
  }

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30.4375);
  const years = Math.floor(days / 365.25);

  if (years >= 1) return `${years} yr ago`;
  if (months >= 1) return `${months} mo ago`;
  if (days >= 1) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours >= 1) return `${hours} hr ago`;
  if (minutes >= 1) return `${minutes} min ago`;

  return "Just now";
}
