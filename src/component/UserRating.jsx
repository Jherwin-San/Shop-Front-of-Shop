// import axios from 'axios'
import { useState, useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Button,
  Textarea,
  Rating,
} from "@material-tailwind/react";
import UserContext from "../UserContext";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function UserRating() {
  const { user } = useContext(UserContext);
  const [img, setImg] = useState(false);
  const [idEdit, setIdEdit] = useState(false);
  const [data, setData] = useState("");
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");

  // function data() {
  // axios.get(`api/${id)}`)
  //   .then((res) => {
  //     setData(res.data)
  //   })
  // }

  // useEffect(() => {
  //  data()
  // }, [])

  // function update() {
  // axios.put(`api/${data.id}`, {
  //   name: data.name,
  //   email: data.email
  //  })
  // setImg(false)
  // }

  // const save = (e) => {
  // setData({ ...data,
  //   [e.target.name]: e.target.value
  // })
  // }

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayText(inputText);
    setInputText("");
    setIdEdit(false);
  };
  return (
    <Card
      color="transparent"
      shadow={false}
      className="container w-full md:max-w-[50rem] md:px-10"
    >
      <CardHeader
        color="transparent"
        floated={true}
        shadow={false}
        className="mx-0 flex items-center gap-4 py-6"
      >
        <Avatar
          size="lg"
          variant="circular"
          src={user.profile}
          alt="tania andrew"
        />
        <div className=" w-full grid grid-flow-row md:gap-0.5 gap-0 ">
          <div className="grid md:grid-flow-col grid-flow-row items-center w-full">
            <Typography
              variant="h5"
              className="flex text-black items-center justify-start w-[14rem] "
            >
              {user.isAdmin ? "Admin: " : "User: "}
              {user.userFirstName}
            </Typography>
            <div className="items-center grid grid-flow-col md:justify-end justify-start">
              <div className="flex">
                <Rating unratedColor="amber" ratedColor="amber" />
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <div className="w-full grid justify-center">
          {idEdit === false ? (
            <div className="lg:w-[50rem] md:w-[35rem] w-[18rem] flex flex-col">
              <div className="flex justify-start indent-10">
                <Typography>&quot;{displayText}&quot;</Typography>
              </div>
              <div className="w-full flex justify-end pt-5">
                <Button onClick={() => setIdEdit(true)}>Leave a Comment</Button>
              </div>
            </div>
          ) : (
            <form
              className="lg:w-[50rem] md:w-[35rem] w-[18rem] "
              onSubmit={handleSubmit}
            >
              <Textarea
                variant="outlined"
                label="Review"
                value={inputText}
                onChange={handleChange}
              />
              <div className=" flex justify-end pt-5">
                <Button type="submit">SAVE</Button>
              </div>
            </form>
          )}
        </div>
      </CardBody>
    </Card>
  );
}

export default UserRating;
