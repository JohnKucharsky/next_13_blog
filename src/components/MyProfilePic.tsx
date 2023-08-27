import Image from "next/image";

const MyProfilePic = () => {
  return (
    <section className={"w-full mx-auto"}>
      <Image
        className={
          "border-4 border-black drop-shadow-lg " +
          "shadow-black rounded-full mx-auto mt-8"
        }
        src={"/images/lood_portrait.jpg"}
        alt="Portrait"
        width={155}
        height={200}
        priority={true}
      />
    </section>
  );
};

export default MyProfilePic;
