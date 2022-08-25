import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Modal from './Modal';
import Button from './Button';
import { Loader } from './Loader/Loader';
import { KEY } from './api/api.js'


export class App extends Component {
  state = {
    name: '',
    arrayImage: [],
    page: 1,
    status: 'idle',
    modal: false,
    currentImage: '',

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name || prevState.page !== this.state.page) {
      this.setState({ status: 'pending' })
      fetch(`https://pixabay.com/api/?q=${this.state.name}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12`)
        .then(res => res.json())
        .then(({ hits }) => {
          if (hits.length === 0) {
            this.setState({ status: 'rejected' })
          } else {
            this.setState(({ arrayImage }) => ({
              arrayImage: [...arrayImage, ...hits.map(({ id, tags, webformatURL, largeImageURL }) => { return { id, tags, webformatURL, largeImageURL } })]
            }))
          }
        }).finally(() => {
          this.setState({ status: 'idle' });
        })

    }
    if (prevState.arrayImage !== this.state.arrayImage && this.state.page !== 1) {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleNameSubmit = (name) => {
    this.setState({ name })
  }

  clickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  clikImage = (image) => {
    this.setState({ currentImage: image, modal: true, })
  }

  closeModal = () => {
    this.setState({ modal: false })
  }



  render() {
    const { arrayImage, status, modal, currentImage } = this.state


    return (< div >
      <Searchbar onSubmit={this.handleNameSubmit} />
      {arrayImage.length > 0 &&
        <>
          <ImageGallery arrayImage={arrayImage} onClickImage={this.clikImage} />
          {status === 'pending' && <Loader />}
          <Button onLoadMore={this.clickLoadMore} />
        </>}
      {modal === true && <Modal currentImage={currentImage} onClose={this.closeModal} />}
      <ToastContainer autoClose={3000} />
    </div>)

  }

};