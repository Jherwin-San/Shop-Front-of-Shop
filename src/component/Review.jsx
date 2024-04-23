// import axios from 'axios'
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
  Textarea,
  Rating,
} from "@material-tailwind/react";

function Review() {
  const [img, setImg] = useState(false);
  const [idEdit, setIdEdit] = useState(false);
  const [data, setData] = useState({});

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

  return (
    <>
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
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="tania andrew"
          />
          <div className=" w-full grid grid-flow-row md:gap-0.5 gap-0 ">
            <div className="grid md:grid-flow-col grid-flow-row items-center w-full">
              <Typography
                variant="h5"
                className="flex text-black items-center justify-start w-[14rem] "
              >
                Tania Andrew
              </Typography>
              <div className="items-center grid grid-flow-col md:justify-end justify-start">
                <div className="flex">
                  <Rating value={5} readonly />
                </div>
              </div>
            </div>
            <Typography className=" text-black items-center justify-start">
              April 21, 2024
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography>
            &quot;I received the product in well condition and it was securely
            packaged! And it's really affordable, very humble guys !!!&quot;
          </Typography>
        </CardBody>
      </Card>
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
            src="https://placehold.co/600x400?text=SJ"
            alt="tania andrew"
          />
          <div className=" w-full grid grid-flow-row md:gap-0.5 gap-0 ">
            <div className="grid md:grid-flow-col grid-flow-row items-center w-full">
              <Typography
                variant="h5"
                className="flex text-black items-center justify-start w-[14rem] "
              >
                S** ****
              </Typography>
              <div className="items-center grid grid-flow-col md:justify-end justify-start">
                <div className="flex">
                  <Rating
                    value={4}
                    unratedColor="amber"
                    ratedColor="amber"
                    readonly
                  />
                </div>
              </div>
            </div>
            <Typography className=" text-black items-center justify-start">
              April 21, 2024
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography>&quot;I received it in good condition.&quot;</Typography>
        </CardBody>
      </Card>
    </>
    /* <div className = 'flex justify-center items-center w-screen h-screen' > 
 {img?
  <div className = 'grid grid-cols-1 gap-5   bg-black p-10  ' >
  <input className = 'rounded-xl border p-2'onChange = {save}
    name = 'name'
    value = { data.name}
    style = {{display: idEdit == data.id ? 'block' : 'none' }}/>  
  <input className = 'rounded-xl border p-2' onChange = {save}
  name = 'email'
  value = {data.email}style = {{display: idEdit == data.id ? 
  'block':'none'}}/> 
  <button onClick = {(() => update())}
  className = 'bg-amber-900 rounded-xl p-1 text-white' > Update </button> 
  </div>
   :
   <div className = 'grid text-white grid-cols-1 gap-5 bg-black p-10 
     rounded-xl'>
    <p className = 'text-xl' > Name: {data.name} < /p>
    <p className = 'text-xl' > Email: {data.email} < /p>
    < button className = 'bg-amber-900 mt-4 rounded-xl p-1  text-white'
    onClick = {() => {setImg(true) setIdEdit(data.id) }}> Edit < /button>
    </div>} 
   </div> */
  );
}

export default Review;
