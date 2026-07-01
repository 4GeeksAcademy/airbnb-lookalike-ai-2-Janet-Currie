import ListingDetailScreen from "@/components/ListingDetailScreen";

interface RoomPageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: RoomPageProps) => {
  const { id } = await params;
  return <ListingDetailScreen key={id} roomId={id} />;
};

export default Page;
