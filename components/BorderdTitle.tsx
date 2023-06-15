type props = {
  title: string;
};

export default function BorderedTitle({ title }: props) {
  return (
    <div className="py-8">
      <h2 className="text-2xl uppercase font-normal text-center py-4 border-2 border-white border-t-[#EEEEEE] border-b-[#EEEEEE]">{title}</h2>
    </div>
  );
}