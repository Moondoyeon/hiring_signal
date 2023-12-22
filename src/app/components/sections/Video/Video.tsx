export default function Video() {
  return (
    <video
      id="signal video"
      // autoPlay
      // muted
      controls
      className="absolute w-screen h-screen object-cover brightness-50"
      loop
      preload="auto"
      // poster="/images/coding.jpg"
      data-setup="{}">
      <source src="/videos/sunset.mp4" type="video/mp4"></source>
      <source src="/videos/sunsetOgv.ogv" type="video/ogv"></source>
    </video>
  );
}
