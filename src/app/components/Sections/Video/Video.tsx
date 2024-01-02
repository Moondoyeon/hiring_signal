export default function Video() {
  return (
    <video
      id="signal video"
      autoPlay
      muted
      playsInline
      // controls
      className="absolute w-screen h-screen object-cover brightness-50"
      loop
      preload="auto"
      data-setup="{}">
      <source src="/videos/signal.mp4" type="video/mp4"></source>
      <source src="/videos/signalOgv.ogv" type="video/ogv"></source>
    </video>
  );
}
