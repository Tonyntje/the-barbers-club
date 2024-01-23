import { Heading, Section, Spacer, SubHeader } from "@/app/components";
import { Metadata } from "next";
import { PhotoGallery } from "./components/PhotoGallery";

export const metadata: Metadata = {
  title: "Foto gallerij",
  description: "Kijk binnen bij The Barbers Club",
};

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string };
}) {
  return (
    <>
      <SubHeader />
      <Section spacing={16}>
        <div className="text-center">
          <Heading level={1}>Neem een blik in onze mooie Barbers Club</Heading>
        </div>
        <Spacer height={8} type="line" />
        <PhotoGallery />
      </Section>
    </>
  );
}
