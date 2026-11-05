// public/logo.png is the cliffowright logo: pencil "i" and orange "o" mark (transparent PNG).
// To swap the logo, replace public/logo.png and update width/height below to its pixel size
// (they let the browser reserve the right space before the image loads).
export default function Logo({ className = '' }) {
  return <img src="/logo.png" alt="Cliff Wright" className={className} width="1344" height="756" />;
}
