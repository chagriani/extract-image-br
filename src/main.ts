import Tesseract from 'tesseract.js';

const execute = async () => {
    try {
        const result = await Tesseract.recognize(
            './3.png',
            'eng'
        )

        console.log(result.data.text)

    } catch (error) {
        console.log(error)
    }

}

execute()
