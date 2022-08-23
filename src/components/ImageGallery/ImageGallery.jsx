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
