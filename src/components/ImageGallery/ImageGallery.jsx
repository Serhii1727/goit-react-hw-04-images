import React from "react";
import PropTypes from 'prop-types'
import ImageGalleryItem from 'components/ImageGalleryItem'
import { ImageGalleryList, } from './ImageGallery.styled'


export const ImageGallery = ({ arrayImage, onClickImage, largeImageURL }) => {
    return (
        <div>
            <ImageGalleryList className="gallery">
                {arrayImage.length >= 1 && arrayImage.map(({ id, tags, webformatURL, largeImageURL }) =>
                    <ImageGalleryItem tags={tags} webformatURL={webformatURL} key={id} largeImageURL={largeImageURL} onClickImage={onClickImage} />)}
            </ImageGalleryList>
        </div >
    )
}

export default ImageGallery;

ImageGallery.propTypes = {
    arrayImage: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        tags: PropTypes.string,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    }))
}




// import { Component } from 'react'
// import PropTypes from 'prop-types'
// import ImageGalleryItem from 'components/ImageGalleryItem'
// import { ImageGalleryList, Title } from './ImageGallery.styled'

// import { Loader } from '../Loader/Loader'
// import Modal from 'components/Modal'
// import Button from 'components/Button'

// export class ImageGallery extends Component {
//     static propTypes = {
//         name: PropTypes.string.isRequired,
//     }

//     state = {
//         arrayImage: [],
//         status: 'idle',
//         page: 1,
//         currentImage: '',
//         modal: false,
//     }

//     componentDidUpdate(prevProps, prevState) {
//         const prevName = prevProps.name;
//         const currentName = this.props.name;

//         if (prevName !== currentName || prevState.page !== this.state.page) {
//             this.setState({ status: 'pending' })

//             fetch(`https://pixabay.com/api/?q=${this.props.name}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12`)
//                 .then(res =>
//                     res.json()
//                 )
//                 .then(({ hits }) => {

//                     if (hits.length === 0) {
//                         this.setState({ status: 'rejected' })
//                     }
//                     else {
//                         this.setState({ status: "resolved", })
//                         return hits;
//                     }
//                 })
//                 .then(hits => {
//                     let newArrayImage = [];
//                     hits.map(({ id, webformatURL, largeImageURL }) => {

//                         return newArrayImage.push({ id, webformatURL, largeImageURL })
//                     })

//                     this.setState(({ arrayImage }) => ({
//                         arrayImage: [...arrayImage, ...newArrayImage]
//                     }))
//                 })
//         }
//         if (prevState.arrayImage !== this.state.arrayImage && this.state.page !== 1) {
//             window.scrollTo({
//                 left: 0,
//                 top: document.body.scrollHeight,
//                 behavior: 'smooth',
//             });
//         }
//     }

//     clikImage = (image) => {
//         this.setState({ currentImage: image, modal: true, })
//     }

//     loadMore = () => {
//         this.setState(prevState => ({
//             page: prevState.page + 1,
//         }))
//     }

//     closeModal = () => {
//         this.setState({ modal: false })
//     }

//     render() {

//         const { arrayImage, status, modal } = this.state;

//         if (modal) {
//             return <Modal
//                 closeModal={this.closeModal}
//                 largeImageURL={this.state.currentImage} />
//         }
//         if (status === 'idle') {
//             return <Title>Введите запрос в поисковую строку</Title>
//         }
//         if (status === 'pending') {
//             return <Loader />
//         }
//         if (status === 'rejected') {
//             return <h2>{`Картинок по запросу ${this.props.name} к сожалению нет`}</h2>
//         }
//         if (status === 'resolved') {
//             return (
//                 <div>
//                     <ImageGalleryList className="gallery">
//                         {arrayImage.length >= 1 && arrayImage.map(({ id, tags, webformatURL, largeImageURL }) =>
//                             <ImageGalleryItem tags={tags} webformatURL={webformatURL} key={id} onClick={this.clikImage} largeImage={largeImageURL} />)}
//                     </ImageGalleryList>
//                     <Button loadMore={this.loadMore} />
//                 </div>)
//         }
//     }
// }

// export default ImageGallery