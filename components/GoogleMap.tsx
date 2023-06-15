type Props = {
  width?: string;
  height: string;
  address?: string;
};

export default function GoogleMap({ width, height, address }: Props) {
  return (
    <>
      <iframe
        height={height}
        loading="lazy"
        className={`w-full max-w-[${width}px]`}
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyArh2ZyriFjYKhSCOo4Rbr2AM8YGIbZuRs&q=${address}`}
      >
      </iframe>
    </>
  )

}