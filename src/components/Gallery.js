export default function Gallery() {
  return (
    <div className="lg:flex gap-10">
      {/* Card 2 - Coding */}
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
        <h3 className="text-lg font-medium pt-8 pb-2">
          Web Development & Code
        </h3>
        <img
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
          alt="Tournimate logo"
          src={Tournimate}
        />
        <p className="text-gray-800 py-1">Tournimate</p>
      </div>

      <div className="basis-1/3 flex-1 ">
        <h4 className="py-2 text-teal-600 font-medium dark:text-teal-400">
          {/*<a href="https://blooming-forest-36438.herokuapp.com/">
                  Bootcamp Fitness
                </a>*/}
        </h4>
        <img
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
          alt="Bootcamp Fitness logo"
          src={BootcampFitness}
        />
        <p className="text-md py-2 leading-8 dark:text-gray-200">
          Bootcamp Fitness
        </p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
        {/*<Image src={design} width={100} height={100} />*/}
        <h3 className="text-lg font-medium pt-8 pb-2">Graphic Design</h3>
        <p className="text-gray-800 py-1">Illustrator</p>
        <p className="text-gray-800 py-1">Photoshop</p>
        <p className="text-gray-800 py-1">InDesign</p>
      </div>
    </div>
  );
}
