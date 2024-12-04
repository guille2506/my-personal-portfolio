import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#111110] text-white min-h-screen py-12 px-6"
    >
      {/* Contenedor principal */}
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Título */}
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-400" style={{ color: '#9f9f9f' }}>
            Get to know me
          </p>
          <h1
            className="text-5xl font-bold"
            style={{ color: '#f0f0f0' }}
          >
            About Me
          </h1>
          <div className="mt-2 h-1 w-16 bg-blue-500 mx-auto"></div>
        </div>

        {/* Información principal */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Imagen */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <Image
              src="/img/moto.jpg"
              alt="About Me"
              width={400}
              height={400}
              className="shadow-lg rounded-full md:rounded-lg"
            />
          </div>

          {/* Descripción */}
          <div className="w-full lg:w-2/3 space-y-6">
            <h2
              className="text-2xl font-semibold"
              style={{ color: '#009E66' }}
            >
              Who am I?
            </h2>
            <p className="text-gray-400" style={{ color: '#f0f0f0' }}>
              <span className="font-bold text-white" style={{ fontSize: '31px' }}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit
              </span>
              <br />

              <p style={{ color:'#9f9f9f' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit            
             </p>
            </p>
            <div className="grid grid-cols-2 gap-6 text-sm text-gray-400">
              <div>
                <span style={{ color: '#dadada' }}>Name:</span>
                <p style={{ color: '#9f9f9f' }}>Lorem</p>
              </div>
              <div>
                <span style={{ color: '#dadada' }}>Email:</span>
                <p>
                  <a
                    href="mailto:yella@example.com"
                    style={{ color: '#009E66' }}
                  >
                    Lorem
                  </a>
                </p>
              </div>
              <div>
                <span style={{ color: '#dadada' }}>Age:</span>
                <p style={{ color: '#9f9f9f' }}>21</p>
              </div>
              <div>
                <span style={{ color: '#dadada' }}>From:</span>
                <p style={{ color: '#9f9f9f' }}>Liverpool, UK</p>
              </div>
            </div>
            <div>
              <a
                href="/guillermo Illanes fullstack .pdf"
                download="guillermo Illanes fullstack .pdf"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Servicios */}
        <div className="space-y-6">
          <h2
            className="text-2xl font-bold text-center"
            style={{ color: '#009E66' }}
          >
            My Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Design Trends',
                description:
                  'Keeping up with the latest design trends for modern web experiences.',
              },
              {
                icon: '💻',
                title: 'Web Development',
                description:
                  'Crafting responsive websites using cutting-edge technologies.',
              },
              {
                icon: '📞',
                title: 'Customer Support',
                description:
                  'Ensuring seamless communication with clients for project success.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow text-center space-y-4"
              >
                <i className="text-blue-400 text-4xl">{service.icon}</i>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: '#f0f0f0' }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-400" style={{ color: '#9f9f9f' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
