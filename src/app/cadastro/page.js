'use client'
import Card from "@/components/Card"
import Input from "@/components/Input"
import Button from "@/components/Button"
import Link from "next/link"
import { useState } from "react"


export default function Cadastro() {

  const[form, setForm] = useState({
    name:'',
    email:'',
    password:''
  })

  const [error, setError] = useState('')

  function handleForm(event,name){

    setForm({
      ...form,
      [name]: event.target.value 
    })
  }

  async function handleSubmit(e){
  
    try{
      e.preventDefault()
      const response = await fetch(`api/user/cadastro`, {
        method: 'POST',
        body:JSON.stringify(form)
      })

      const json = await response.json()
      if(response.status != 201) throw new Error(json)
    }catch(err){
      setError(err.message)
    }
  }

  return (
    <main className="h-screen flex justify-center items-center">
      <Card title={'Registro'}>
        {error && <p className="text-red-500 w-72 text-center">{error}</p>}
        <form onSubmit={handleSubmit}className="flex flex-col">
          <Input 
            placeholder='Nome' 
            required 
            value={form.name}
            onChange={(e)=>{handleForm(e, 'name')}}
          />
            
          <Input 
            placeholder='E-mail' 
            type='email' 
            required 
            value={form.email}
            onChange={(e)=>{handleForm(e, 'email')}}
          />

          <Input 
            placeholder='Senha' 
            type='password'  
            required 
            value={form.password}
            onChange={(e)=>{handleForm(e, 'password')}}
          />

          <Button>
              Cadastrar
          </Button>

          <Link 
            className="hover:text-zinc-600 mt-2 text-sm text-center"
            href={'/login'} >Já possui conta ? Clique aqui</Link>
        </form>
      </Card>
    </main>
  )
}