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
import { Link, NavLink } from "react-router-dom";

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
    <div className="w-full flex justify-center">
      {user.id === null ? (
        <NavLink to="/login" className="my-4">
          <Button>Leave a comment</Button>
        </NavLink>
      ) : (
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
                    <Button onClick={() => setIdEdit(true)}>
                      Leave a Comment
                    </Button>
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
      )}
    </div>
  );
}

export default UserRating;
