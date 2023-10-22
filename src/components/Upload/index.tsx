'use client'

import { Upload as UploadIcon } from 'lucide-react'
import { ChangeEvent } from 'react'

import styles from './styles.module.scss'

type UploadFileProps = {
  onChange: (value: string) => void
}

export function UploadFile({ onChange }: UploadFileProps) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files

    if (!fileList) return

    const file = fileList.item(0)
    const reader = new FileReader()

    reader.onload = () => {
      const readerResult = reader.result

      if (readerResult && typeof readerResult === 'string') {
        onChange(readerResult)
      }
    }

    if (file) {
      reader.readAsText(file)
    }

    e.target.value = ''
  }

  return (
    <div className={styles.upload}>
      <input
        id="file-upload"
        type="file"
        accept="text/plain"
        onChange={handleFileChange}
      />

      <label htmlFor="file-upload" className={styles.uploadContent}>
        <UploadIcon size={20} />

        <div>
          Se preferir, selecione um arquivo <strong>.txt</strong> do seu
          computador
        </div>
      </label>
    </div>
  )
}
