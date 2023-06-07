import { HeaderLit } from '@/components/HeaderLit'
import { AsideLit } from '@/components/AsideLit'
import { FooterLit } from '@/components/FooterLit'

export default function Home() {
  // eslint-disable-next-line prettier/prettier
  return (
    <div>
      <HeaderLit />
      <div className="flex">
        <AsideLit />
        <div className="grid min-h-screen w-full">
          <div className=" grid h-screen grid-cols-1 leading-relaxed">
            <h1>Criando Lit Avaliações</h1>
          </div>
          <FooterLit />
        </div>
      </div>
    </div>
  )
}
