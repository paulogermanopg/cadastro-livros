import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-white to-yellow-100
      text-white
    `}>
      <Layout titulo="Acervo">
        <span>Conteúdo</span>
      </Layout>
    </div>
  )
}
