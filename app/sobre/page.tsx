import Image from "next/image";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        {/* Título */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Sobre nós
          </h1>

          <p className="mt-3 text-gray-600">
            Conheça um pouco mais sobre o nosso restaurante
          </p>
        </div>

        {/* Conteúdo */}
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Imagem */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/logotipo-restaurante.jpg"
              alt="Restaurante"
              width={600}
              height={400}
              className="h-100 w-full object-cover"
            />
          </div>

          {/* Texto */}
          <div>
            <h2 className="mb-5 text-3xl font-bold text-gray-900">
              Bem-vindo ao nosso restaurante
            </h2>

            <p className="mb-5 text-lg leading-8 text-gray-600">
              Somos um restaurante dedicado a oferecer comida saborosa,
              preparada com ingredientes selecionados e muito carinho.
            </p>

            <p className="mb-6 text-lg leading-8 text-gray-600">
              Nosso compromisso é proporcionar uma experiência especial
              para nossos clientes, unindo qualidade, sabor e um
              atendimento acolhedor.
            </p>

            {/* Destaques */}
            <div className="grid grid-cols-3 gap-4">

              <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                <span className="text-2xl">🍽️</span>
                <p className="mt-2 font-semibold text-gray-800">
                  Sabor
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                <span className="text-2xl">⭐</span>
                <p className="mt-2 font-semibold text-gray-800">
                  Qualidade
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                <span className="text-2xl">❤️</span>
                <p className="mt-2 font-semibold text-gray-800">
                  Carinho
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}