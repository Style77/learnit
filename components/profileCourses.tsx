import { useRef, useState } from "react";



const ProfileCourses = () => {
  const [clicked, setClicked] = useState("during");

  return (
    <>
      <div className="flex min-h-screen w-screen items-start">
      <div className="flex flex-row font-semibold text-lg justify-center xl:justify-start xl:text-3xl gap-12 pt-6 xl:px-24 bg-white w-full">
        <button className={`${clicked==="during" ? "text-blue-500":"text-gray-third"}`} onClick={() => setClicked("during")}>W toku</button>
        <button className={`${clicked==="list" ? "text-blue-500":"text-gray-third"}`} onClick={() => setClicked("list")}>Moja lista</button>
        <button className={`${clicked==="done" ? "text-blue-500":"text-gray-third"}`} onClick={() => setClicked("done")}>Zakończone</button>
      </div>
      <div>

      </div>
      </div>
    </>
  );
};
export default ProfileCourses;
