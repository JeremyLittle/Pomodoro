import React from 'react';
import Dropzone from 'react-dropzone';


const ImageDrop = props => {



    return (
        <form>
            <div className="FileUpload">
                <Dropzone
                    onDrop={props.onDrop}
                    multiple={false}
                    accept="image/*">
                    <div>Drop an image or click to select a file to upload.</div>
                </Dropzone>
            </div>
        </form>
    )

}

export default ImageDrop;