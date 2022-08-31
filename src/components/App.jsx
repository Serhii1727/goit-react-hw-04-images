import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Modal from './Modal';
import Button from './Button';
import { Loader } from './Loader/Loader';
import { KEY, fetchApi } from './api/api.js'

export const App = () => {
  const [name, setName] = useState('');
  const [arrayImage, setArrayImage] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    if (name.trim() === '') {
      return;
    }
    setLoader(true)
    fetchApi(name, KEY, page)
      .then(res => res.json())
      .then(({ hits }) => {
        if (hits.length === 0) {
          return
        } else {
          setArrayImage(arrayImage => ([...arrayImage, ...hits.map(({ id, tags, webformatURL, largeImageURL }) => { return { id, tags, webformatURL, largeImageURL } })]
          ))
          setLoader(false)
        }
      })
  }, [name, page])

  const handleNameSubmit = (name) => {
    setName(name)
    setPage(1)
    setArrayImage([])
  }

  const clickLoadMore = () => {
    setPage(page => page + 1)
  }

  const clikImage = (image) => {
    setCurrentImage(image)
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <div>
      <Searchbar onSubmit={handleNameSubmit} />
      {arrayImage.length > 0 &&
        <>
          <ImageGallery arrayImage={arrayImage} onClickImage={clikImage} />
          {loader && <Loader />}
          <Button onLoadMore={clickLoadMore} />
        </>
      }
      {modal && <Modal currentImage={currentImage} onClose={closeModal} />}
      <ToastContainer autoClose={3000} />
    </div>)

}
