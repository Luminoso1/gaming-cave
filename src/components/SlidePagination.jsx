function SlidePagination({ images, handleSelected, selected }) {
  return (
    <section className="absolute bottom-[-24px] w-full gap-4 z-50">
      <ul className="flex gap-6  justify-center max-w-full overflow-x-auto px-10">
        {images?.map(({ name, logo }) => (
          <li
            key={name}
            onClick={() => handleSelected(name)}
            className="bg-transparent min-w-12 h-12  md:max-w-16 md:h-16 p-1 cursor-pointer transition ease-in-out delay-150 hover:scale-110"
          >
            <img src={logo} alt={name} loading="lazy" />
          </li>
        ))}
      </ul>
    </section>
  );
}
export default SlidePagination;
