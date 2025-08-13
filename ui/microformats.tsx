export function Microformats() {
  return (
    <div className="h-card hidden">
      <a className="u-url" rel="me" href="https://zimnicki.co">
        <img className="u-photo" src="/me.jpg" alt="Christoph Zimnicki" />
        <h2 className="p-photo">Christoph Zimnicki</h2>
        <div className="p-note">
          I{"'"}m an entrepreneur working across design, product and business.
        </div>
      </a>
    </div>
  );
}
