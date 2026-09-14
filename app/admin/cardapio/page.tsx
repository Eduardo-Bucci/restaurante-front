"use client"
import {useEffect, useState} from "react"
import Swal from "sweetalert2"
import Image from "next/image"

interface Produto{
    id:number,
    descricao: string,
    categoria: string,
    preco: number,
    imagem: string
}

export default function CardapioAdmin(){
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [carregando, setCarregando] = useState(true)

    async function carregarProdutos(){
        try {
            const response = await fetch("http://localhost:3001/produtos")
            if(!response){
                throw new Error("Erro ao buscar");
            }

            const data = await response.json()
            setProdutos(data)
        } catch (error) {
            console.error(error) 
            await Swal.fire({
                title:"Erro",
                text:"Ocorreu um erro ao buscar os produtos",
                icon:"error",
                confirmButtonText:"foi triste"
            })
        }
        finally{
            setCarregando(false)
        }
        
    }

    async function excluirProduto(id:number){
        const resultado = await Swal.fire({
            title:"Ecluir produto?",
            text:"essa ação não pode ser desfeita",
            icon:"warning",
            showCancelButton:true,
            confirmButtonText:"Sim, excluir",
            cancelButtonText:"Cancelar",    
            confirmButtonColor:"#dc2626",
            cancelButtonColor:"#6b7280"
        })
        if(!resultado.isConfirmed){
            return
        }

        try {
            const response = await fetch(`http://localhost:3001/produtos/${id}`,{
                method:"DELETE"
            })
            if(!response){
                throw new Error("Erro ao excluir produto");
            }
            setProdutos((produtosAtuais) => produtosAtuais.filter((produto) => produto.id !== id))

            await Swal.fire({
                title:"Excluído com sucesso!",
                text:"O pruduto foi excluído com sucesso",
                icon:"success",
                confirmButtonText:"Ok"
            })
        } catch (error) {
            console.error(error)

            await Swal.fire({
                title:"Erro",
                text:"Ocorreu um erro ao excluir o produto",
                icon:"error",
                confirmButtonText:"foi triste"
            })
        }
        
    }
    useEffect(() =>{
        carregarProdutos();
},[])
    if(carregando){
        return(
        <main className="p-8">
            <p>Carregando produtos...</p>
        </main>
    )
    }
    return(
        <main className="min-h-screen bg-gray-200 p-8">
            <div className="mxauto max-w-6xl">
                <h1 className="mb-6 text-3xl font-bold">Gerenciar Cardápio</h1>

                {produtos.length === 0 ? (
                    <div className="rounded-lg bg-white p-8 text-center shadow">
                        <p className="text-gray-500">Nenhum produto cadastrado</p>
                    </div>
                
                ):(
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {produtos.map((produto) =>(
                            <div key={produto.id} className="rounded-lg bg-white p-6 shadow">
                                {produto.imagem && (
                                    <Image
                                    src={produto.imagem}
                                    alt={produto.descricao}
                                    width={200}
                                    height={200}    
                                    className="h-48 w-full object-contain"
                                    unoptimized
                                    />
                                )}

                                <div className="p-5">
                                    <h2 className="text-xl font-bold">{produto.descricao}</h2>
                                </div>

                                <p className="mt-3 text-lg text-gray-500">
                                    {produto.categoria}
                                </p>

                                <p className="mt-3 text-lg font-semibold">
                                    R$ {Number(produto.preco).toFixed(2)}
                                </p>

                                <button className="mt-4 w-full rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
                                onClick={() => excluirProduto(produto.id)}>
                                    Excluir
                                </button>

                                </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}