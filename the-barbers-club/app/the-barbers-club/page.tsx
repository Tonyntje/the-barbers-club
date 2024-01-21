import { Section } from "@/app/components";
import { Metadata } from "next";
import { PhotoGallery } from "@/app/the-barbers-club/components/PhotoGallery";

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
    <Section spacing={16}>
      <PhotoGallery />
    </Section>
  );
}
