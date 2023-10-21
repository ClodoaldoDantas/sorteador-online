'use client'

import { Upload as UploadIcon } from 'lucide-react'
import { useCallback } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'
import { useDropzone } from 'react-dropzone'

type UploadFileProps = {
  onChange: (value: string) => void
}

export function UploadFile({ onChange }: UploadFileProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) {
        return
      }

      const file = acceptedFiles[0]
      const reader = new FileReader()

      reader.onload = () => {
        const readerResult = reader.result

        if (readerResult && typeof readerResult === 'string') {
          onChange(readerResult)
        }
      }

      reader.readAsText(file)
    },
    [onChange]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'text/plain': [],
    },
  })

  return (
    <div {...getRootProps({ className: styles.upload })}>
      <input {...getInputProps()} />

      <div
        className={classNames(styles.uploadContent, {
          [styles.active]: isDragActive,
        })}
      >
        <UploadIcon size={20} />

        <div>
          Se preferir, selecione um arquivo <strong>.txt</strong> do seu
          computador
        </div>
      </div>
    </div>
  )
}
