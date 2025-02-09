import Image from "next/image";

export default function InspectionMosaic() {
  return (
    <div className="w-full px-10 mt-10">
      <div className="rounded-xl overflow-hidden w-full grid grid-cols-4 shadow-[0_0px_30px_0px_rgba(0,0,0,0.1)]">
        {/* ELEMENT 1 SQUARE 2/2 (ROW 1 & 2) -  */}
        <div className="aspect-square col-span-2 row-span-2 bg-white w-full overflow-hidden flex flex-col items-center py-3 px-2"></div>

        {/* ELEMENT 2 HORIZONTAL 2/1 (ROW 1) - */}
        <div className="aspect-[2/1] col-span-2 row-span-1 bg-stone-100 w-full overflow-hidden flex justify-center"></div>

        {/* ELEMENT 3 SQUARE 1/1 (ROW 2) - */}
        <div className="aspect-square col-span-1 row-span-1 bg-accent w-full overflow-hidden flex justify-center"></div>

        {/* ELEMENT 4 VERTICAL 1/2 (ROW 2 & 3) -  */}
        <div className="w-full aspect-[1/2] col-span-1 row-span-2 bg-white overflow-hidden flex flex-col gap-4 items-center py-3 px-2"></div>

        {/* ELEMENT 5 SQUARE 1/1 (ROW 3) - */}
        <div className="aspect-square col-span-1 row-span-1 bg-accent w-full overflow-hidden flex justify-center"></div>

        {/* ELEMENT 6 HORIZONTAL 2/1 (ROW 3) - */}
        <div className="aspect-[2/1] col-span-2 row-span-1 bg-stone-100 w-full overflow-hidden flex justify-center"></div>
      </div>
    </div>
  );
}
