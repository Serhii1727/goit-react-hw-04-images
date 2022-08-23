import PropTypes from 'prop-types'
import { ImageGalleryEl, Image } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ tags, webformatURL, largeImageURL, onClickImage }) => {
    return (
        < ImageGalleryEl className="gallery-item" onClick={() => { onClickImage(largeImageURL) }}>
            <Image src={webformatURL} alt={tags} />
        </ImageGalleryEl >
    )
}


export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    tags: PropTypes.string,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onClickImage: PropTypes.func.isRequired,
}




// import PropTypes from 'prop-types'
// import { Component } from 'react'
// import { ImageGalleryEl, Image } from './ImageGalleryItem.styled'

// export class ImageGalleryItem extends Component {
//     static propTypes = {
//         onClick: PropTypes.func.isRequired,
//         webformatURL: PropTypes.string.isRequired,
//         tags: PropTypes.string,
//         largeImage: PropTypes.string.isRequired,

//     }
//     state = {
//         largeImage: ''
//     }

//     handleClickImage = () => {
//         this.setState({})
//         this.props.onClick(this.props.largeImage)
//     }

//     render() {
//         return (
//             < ImageGalleryEl className="gallery-item" onClick={this.handleClickImage}>
//                 <Image src={this.props.webformatURL} alt={this.props.tags} />
//             </ImageGalleryEl >
//         )
//     }
// }

// export default ImageGalleryItem;