
export default function Desc({title, text}) {
  return (
    <section className='container flex justify-center items-center flex-col gap-8 overflow-hidden'>
        <h1 className='sm:text-4xl text-center text-green text-4xl uppercase font-bold'>{title}</h1>
        <p className='text-center sm:text-2xl sm:px-12 px-8'>
        {text}
        </p>
  </section>
  )
}