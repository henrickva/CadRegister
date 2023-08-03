import Button from "@/components/Button"
import Card from "@/components/Card"
import Input from "@/components/Input"
import Link from "next/link"

export default function Login() {
  return (
    <main className=" h-screen flex justify-center items-center">
      <Card title={'Login'}>
        <form className="flex flex-col">
          <Input placeholder='E-mail' />
          <Input placeholder='Senha' type='password'/>
          <Button>
              Enviar
          </Button>
        </form>
        <Link 
          className="hover:text-zinc-600 mt-2 text-sm text-center"
          href={'/cadastro'}>Não possui conta ? Clique aqui</Link>
      </Card>
    </main>
  )
}