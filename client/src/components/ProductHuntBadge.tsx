/**
 * Official Product Hunt embed. Renders only when VITE_PRODUCT_HUNT_POST_ID is set.
 */
export default function ProductHuntBadge() {
  const postId = import.meta.env.VITE_PRODUCT_HUNT_POST_ID?.trim();
  if (!postId) return null;

  const slug =
    import.meta.env.VITE_PRODUCT_HUNT_POST_SLUG?.trim() || postId;
  const href = `https://www.producthunt.com/posts/${encodeURIComponent(slug)}`;
  const src = `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${encodeURIComponent(postId)}&theme=dark`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block opacity-90 hover:opacity-100 transition-opacity"
      aria-label="GV Studio on Product Hunt"
    >
      <img
        src={src}
        alt="GV Studio — Featured on Product Hunt"
        width="250"
        height="54"
        loading="lazy"
        decoding="async"
      />
    </a>
  );
}
