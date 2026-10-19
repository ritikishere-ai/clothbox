// A number that counts up when its section scrolls into view (see useMotion).
export default function Stat({ value, decimals = 0, suffix = '', xl = false }) {
  return (
    <p className={xl ? 'stat stat--xl' : 'stat'}>
      <span data-count={value} data-decimals={decimals || undefined} data-suffix={suffix}>
        {value.toFixed(decimals) + suffix}
      </span>
    </p>
  );
}
