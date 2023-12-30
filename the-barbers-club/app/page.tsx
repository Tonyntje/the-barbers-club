import Heading from "@/app/components/content/Heading";
import { Column } from "@/app/components/utilities/Column";

export default function Home() {
  return (
    <main>
      <section className="w-full border-b-2 bg-neutral-200">
        <div className="max-w-screen-2xl mx-auto px-6 py-32">
          <Heading level={1}> Let Your Hair Do The Talking.</Heading>
        </div>
      </section>
      <section className="max-w-screen-2xl mx-auto px-6 py-12">
        <Column cols={3}>
          <div className="bg-neutral-200 min-h-[250px] p-6">
            <Heading level={3}> Subheading</Heading>
          </div>
          <div className="bg-neutral-200 min-h-[250px] p-6">
            <Heading level={3}> Subheading</Heading>
          </div>
          <div className="bg-neutral-200 min-h-[250px] p-6">
            <Heading level={3}> Subheading</Heading>
          </div>
        </Column>
      </section>
    </main>
  );
}
