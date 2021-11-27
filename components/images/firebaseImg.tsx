import { getDownloadURL, ref } from "@firebase/storage"
import { storage } from "../../firebase/config"
import Image, { ImageProps } from 'next/image'
import {useEffect, useState} from 'react'

type firebaseImgProps = {
    fileName: string
    classname: string
    height: number
    width: number
    layout: "fixed" | "fill" | "intrinsic" | "responsive" | undefined
}

export const FirebaseImg = ({ fileName, classname, height, width, layout }: firebaseImgProps) => {

    const [url, setUrl] = useState('')

    // create a reference
    const storageRef = ref(storage)
    const imageRef = ref(storageRef, fileName)

    useEffect(() => {
        const getUrl = async () => {
            await getDownloadURL(imageRef)
            .then((newUrl) => setUrl(newUrl))
        }
        getUrl()
    })

    return (
        <figure>
            {url && <Image className={classname} src={url} alt='' layout={layout} width={width} height={height} />}
        </figure>
    )
}