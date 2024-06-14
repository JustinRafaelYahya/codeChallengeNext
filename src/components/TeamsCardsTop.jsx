import Carousel from "react-multi-carousel";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

export default function TeamsCardsTop() {
  const URL = "https://randomuser.me/api/";
  const [users, setUsers] = useState([]);
  // function checkDescription(val, i) {
  //   if (val.indexOf(i) < 1) {
  //     return val;
  //   }
  // }

  useEffect(() => {
    axios.get(URL).then((response) => {
      setUsers(response.data.results);
    });
  }, []);

  //   const responsive = {
  //     desktop: {
  //       breakpoint: { max: 3000, min: 1024 },
  //       items: 3,
  //       slidesToSlide: 3, // optional, default to 1.
  //     },
  //     tablet: {
  //       breakpoint: { max: 1024, min: 464 },
  //       items: 2,
  //       slidesToSlide: 2, // optional, default to 1.
  //     },
  //     mobile: {
  //       breakpoint: { max: 464, min: 0 },
  //       items: 1,
  //       slidesToSlide: 1, // optional, default to 1.
  //     },
  //   };

  return (
    // <div className="mx-2 grid md:grid-cols-2 ">
    <div>
      {/* <Carousel
        className=""
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={5000}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      > */}
      {users.map((u) => (
        // <div className="w-68 shadow-xl flex flex-col px-2 py-12 my-6 mx-2 rounded-lg">
        <div>
          <img
            className="rounded-full w-50 mx-auto bg-white"
            src={u.picture.medium}
            alt="/"
          />
          <div className="text-center">
            <h2 className="font-semibold text-lg my-1 mb-3">
              {u.name.first} {u.name.last}
            </h2>
            <p className=" mx-2 text-sm mb-1 text-center">{u.email}</p>
            <p className=" border-b mx-2 pb-2 text-sm mb-2 text-center">
              {u.cell}
            </p>
            {/* {descriptions.filter((value) => {
              return <p className="py-6  mx-8">{value[0].id === index}</p>;
            })} */}
          </div>
        </div>
      ))}
      {/* </Carousel> */}
    </div>
  );
}
