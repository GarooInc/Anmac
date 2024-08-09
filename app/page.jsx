import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";
import MissionVisionValues from "@/components/Tabs/Tabs";
import Stats from "@/components/Stats/Stats";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar />
      <section id="/" className="flex flex-col md:flex-row items-center justify-center gap-10 backimage mt-20 pt-20">
        <div className="flex flex-col items-start justify-center md:w-1/2 px-10 gap-2">
          <span className="text-xl border-2 border-blue_anmac text-blue_anmac rounded-full p-2">La Asociación Civil de </span>
          <h2 className="text-4xl font-bold">
          Fabricantes y Distribuidores de Medicamentos Accesibles y de Calidad <span className="text-blue_anmac">(ANMAC)</span>
          </h2>
          <p className="font-poppins">
          Representa a una amplia gama de empresas comprometidas con la calidad y accesibilidad de los medicamentos. Nos asociamos para luchar por la integridad de los productos que ingresan al mercado, asegurando que la población tenga acceso a medicamentos de calidad, independientemente de si son 
          genéricos o de marca a precios justos. 
          </p>
          <button className="bg-blue_anmac text-white px-6 py-3 rounded-full mt-4">Contacto</button>
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/2 px-10">
          <Image src="/assets/images/doctor.png" width={500} height={500} alt="Hero" />
        </div>
      </section>

      <section id="/nosotros" className="flex flex-col md:flex-row items-start justify-center gap-10 p-20 ">
        <div className="flex flex-col items-center justify-center gap-10 md:w-1/2">
          <Image src="/assets/images/bottles.png" className="w-full" width={500} height={500} alt="Hero" />
        </div>
        <div className="flex flex-col items-start justify-center md:w-1/2 px-10 gap-2 p-4">
          <MissionVisionValues />
        </div>
      </section>

      <section id="/medicamentos" className="flex flex-col md:flex-row items-center justify-center gap-10 p-20 relative">
        <div className="flex flex-col items-start justify-start gap-20 md:w-1/2">
          <h2 className="text-4xl font-bold">
            La salud es un <span className="text-blue_anmac">derecho</span>
          </h2>
          <p>
          En ANMAC, creemos que la salud es la base de una sociedad próspera y no debería ser un privilegio. Una población sana es fundamental para el desarrollo social y económico. Nos esforzamos por garantizar que todos los productos farmacéuticos en el mercado sean de la más alta calidad, proporcionando a la población la tranquilidad y seguridad que merecen.
          </p>
          <Stats />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 md:w-1/2">
          <Image src="/assets/images/pills.png" width={500} height={400} alt="Hero" className="absolute right-0 w-2/5" />
        </div>
      </section>
      <section id="/impacto" className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl font-bold text-center">Impacto</h1>
      </section>
      <section id="/recursos" className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl font-bold text-center">Recursos</h1>
      </section>
      <section id="/noticias" className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl font-bold text-center">Noticias</h1>
      </section>
      <section id="/contacto" className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl font-bold text-center">Contacto</h1>
      </section>
    </main>
  );
}
