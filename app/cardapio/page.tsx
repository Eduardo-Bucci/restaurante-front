"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface Produto {
  id: number
  descricao: string
  categoria: string
  preco: number
  imagem: string
}

export default function CardapioPage() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [loading, setLoading] = useState(true)

  async function mostrarProdutos() {
    try {
      const response = await fetch("http://localhost:3001/produtos")

      if (!response.ok) {
        throw new Error("Erro ao buscar produtos")
      }

      const data = await response.json()

      setProdutos(data)
    } catch (error) {
      console.error("Erro:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    mostrarProdutos()
  }, [])

  return (
    <main className="p-8 ">
      <h1 className="mb-6 text-3xl font-bold">
        Cardápio
      </h1>

      {loading ? (<p>Carregando produtos...</p>) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {produtos.map((produto) => (

            
            <div
              key={produto.id}
              className="rounded-lg border p-4 shadow"
            >
              <Image
                src={produto.imagem}
                alt={produto.descricao}
                width={400}
                height={250}
                className="h-40 w-full rounded object-contain"
              />

              <h2 className="mt-3 text-xl font-semibold">
                {produto.descricao}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {produto.categoria}
              </p>

              <p className="mt-2 text-lg font-bold text-green-600">
                R$ {Number(produto.preco).toFixed(2)}
              </p>

              <button
                className="mt-4 w-full cursor-pointer rounded bg-orange-500 py-2 text-white hover:bg-amber-700"
              >
                Fazer pedido
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

