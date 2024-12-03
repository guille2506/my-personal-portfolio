const HomeVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/fondo.mp4" type="video/mp4" />
      Tu navegador no soporta el elemento de video.
    </video>
  );
};

export default HomeVideo;
