import React, { useState } from 'react';
import './imageGrid.css';
import { Link, Outlet, useLocation, useNavigate, useParams } from '@remix-run/react';
import usePortal from 'react-useportal';
// import Modal from './modal';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

export const images: string[] = [
  // 'https://images.pexels.com/photos/16621443/pexels-photo-16621443/free-photo-of-mer-ensoleille-plage-vacances.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/18173610/pexels-photo-18173610/free-photo-of-femme-appareil-photo-etre-assis-modele.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/16621443/pexels-photo-16621443/free-photo-of-mer-ensoleille-plage-vacances.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/15063254/pexels-photo-15063254/free-photo-of-plaque-brulante.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  // Ajoutez plus d'URLs d'images ici
];

const ImageGrid: React.FC = () => {
  const [selectedImage, setselectedImage] = useState<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const params = useParams();

  const openImageModal = (image: string, index: number) => {
    setselectedImage(index);
    // window.history.pushState({}, '', `/images/${index}`);
    navigate(`${index}`)
    open();
  };


  return (
    // <div className="grid">
    //   {images.map((image, index) => (
    //     <div key={index} className="grid-item" >
    //       {/* <Link to={`/images/${index}`} > */}
    //         <img src={image} alt={`img-${index}`} />
    //       {/* </Link> */}
    //     </div>
    //   ))}
    // </div>
    <div>
      <h1>Galerie d'images avec Modal</h1>
      <div className="grid">
        {images.map((image, index) => (
         <Link key={index} to={`${index}`} replace={Boolean(params?.imageId)}>
         <div key={index} className="grid-item">
            <img src={image} alt={`img-${index}`} />
          </div>
          </Link>
        ))}
      </div>

      {/* {selectedImage && (
        <Modal opened={opened} onClose={close} title="Authentication">
          <img src={images[selectedImage] || ''} alt="Selected" />
        </Modal>
      )} */}
    </div>
  );
};

export default ImageGrid;

