interface ListingTitleProps {
  title: string;
}

const ListingTitle = ({ title }: ListingTitleProps) => {
  return <h1 className="text-2xl font-semibold leading-tight text-zinc-900">{title}</h1>;
};

export default ListingTitle;
