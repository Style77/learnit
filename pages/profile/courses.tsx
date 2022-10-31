import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import Course from "../../components/courseCard";
import Layout from "../../components/layout";
import { courses } from "../../constants";
import useAuth from "../../hooks/useAuth";
import { UnCertainCourse } from "../../types/course";
import { NextPageWithLayout } from "./../_app";

const Page: NextPageWithLayout = () => {
  const [userCourses, setUserCourses] = useState<UnCertainCourse[]>([]);
  const { user, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn && user) {
      let data: any[] = [];
      courses.forEach((course) => {
        user.courses.map((userCourse) => {
          if (userCourse.courseId === course.id) {
            data.push({
              ...course,
              ...userCourse,
            });
          }
        });

        data.push({ ...course, currentLesson: 0, completed: false });
      });
      setUserCourses(data);
      console.log(data);
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>LearnIT</title>
        <meta
          name="description"
          content="LearnIT - naucz się programowania w praktyce!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!isLoggedIn && (
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-4xl font-bold text-gray-800">
            Zaloguj się, aby to wyświetlić
          </h1>
        </div>
      )}
      <main className="flex min-h-screen">
        <div className="flex flex-col gap-4 mt-20">
            {userCourses.map((course) => (
                <Course course={course} />
            ))}
        </div>
      </main>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
