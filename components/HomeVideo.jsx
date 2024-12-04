const HomeVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
    >
      <source src="/videos/fondo.mp4" type="video/mp4" />
      Tu navegador no soporta el elemento de video.
    </video>
  );
};

export default HomeVideo;
