import { Dialog } from "@headlessui/react";
import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData, useNavigate, useOutletContext, useParams } from "@remix-run/react";
import { useState } from "react";
import { images } from "~/components/imageGrid";


// export let loader: LoaderFunction = async ({ params }) => {
//   // if the user is not authenticated, redirect to login
//   const id = parseInt(params.imageId ?? "0");
//   // console.log({id});

// const image = images[id]
//   console.log({ image });
//   return image;
// };


export default function SingleImage() {
  // const  image = useLoaderData<typeof loader>();
  // console.log({image});
  const navigate = useNavigate();
  // const outletContext = useOutletContext() || {};
  const { modal } = useOutletContext<{ modal: boolean }>();
  const params = useParams();
  const imageId = +(params.imageId || 0);
  const image: string = images.find?.((value, index) => index === imageId) || "https://images.pexels.com/photos/6284808/pexels-photo-6284808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  let [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
    navigate(-1);
  }
  console.log({ modal });

  return false ? (<Dialog open={isOpen} onClose={handleClose} className="relative z-50">
    <div className="fixed inset-0 bg-black/30" aria-hidden="true" /><div className="fixed inset-0  flex items-center justify-center p-4">
      <Dialog.Panel className="mx-auto w-96 rounded bg-white">
        <div className="m-4 flex flex-col  rounded-md border p-4">
          <div>{imageId}</div>
          Image
          <img src={image} />
          <button className="mt-4 self-end" onClick={handleClose}>
            Close
          </button>
        </div>
      </Dialog.Panel>
    </div>
  </Dialog>) : (<div className="m-4 flex flex-col  rounded-md border p-4">
    <div>{imageId}</div>
    Image
    <img src={image} />
  </div>)

  // <div>
  //   Image
  //  <img src={image} />
  // </div>
}