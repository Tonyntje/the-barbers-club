import Heading from "@/app/components/content/Heading";

export default function Home() {
  return (
    <main className="max-w-screen-2xl flex justify-between mx-auto p-6">
      <section className='w-full'>
        <div className='border-b-2'>
          <Heading level={1}> Let Your Hair Do The Talking.</Heading>
        </div>
      </section>
    </main>
  )
}
