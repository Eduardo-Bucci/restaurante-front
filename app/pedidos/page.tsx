"use client"

import Image from 'next/image'


export default function Pedidos() {

  async function cadastrar(e:any) {
    e.preventDefault()
    alert("Produto cadastrado com sucesso!")
  }


  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    
    <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-8 grid grid-cols gap-4">
     
     <Image
     src="/logotipo-restaurante.jpg"
     alt="Logotipo"
     width={200}
     height={200}
     className="mx-auto mb-4"
     />

    

      <input type="text"
      placeholder="Digite a descricao..."
      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm tex-gray-900"
      />

      <input type="number"
      placeholder="Digite o preço..."
      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900"
      />

      <input type="text"
      placeholder="Digite a categoria..."
      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm tex-gray-900"
      />

      <input type="text"
      placeholder="O lanche está disponivel?"
      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm tex-gray-900"
      />

      <button 
      onClick={cadastrar}
      className="w-full rounded-xl 
      bg-blue-600 px-4 py-3 
      font-medium text-white shadow-sm cursor-pointer 
      hover:bg-blue-800" 
      >
        Cadastrar
      </button>


    </div>
    </main>
  );
}
