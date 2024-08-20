import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useFormContext, Path, FieldValues, PathValue } from 'react-hook-form';
import { isFile } from '@/utils/isFile';
import { flexCenter } from '@/styles/Common';
import ErrorText from './ErrorText';
import Lightbox from 'yet-another-react-lightbox';
import Image from '@/components/common/Image';

import 'yet-another-react-lightbox/styles.css';

interface IProps<T> {
  name: Path<T>;
  acceptedSize?: string;
  boxSize?: number;
  disabled?: boolean;
  guidText?: string;
}

type TPreviewFiles = {
  name: string;
  src: string;
};

export default function ImageDrop<T extends FieldValues>({ name, boxSize = 150, disabled, acceptedSize, guidText }: IProps<T>) {
  const {
    register,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext<T>();
  const [previewFiles, setPreviewFiles] = React.useState<TPreviewFiles[] | []>([]);
  const inputFileRef = React.useRef<HTMLLabelElement>(null);
  const [isDragActive, setIsDragActive] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const files: File[] = watch(name);

  const handleDragStart = () => setIsDragActive(true);

  const handleDragEnd = () => setIsDragActive(false);

  const handleDragOver: React.DragEventHandler<HTMLLabelElement> = (event) => {
    event.preventDefault();
  };

  const handleUploadImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (!event.target.files) return;
    onDrop(event.target.files);
  };

  const handleDrop: React.DragEventHandler<HTMLLabelElement> = (event) => {
    event.preventDefault();
    if (!event.dataTransfer) return;
    onDrop(event.dataTransfer.files);
  };

  const handleOpenLightbox = () => {
    setOpen(true);
  };

  const handleCloseLightbox = () => {
    setOpen(false);
  };

  const onDrop = React.useCallback(
    (fileList: FileList) => {
      const acceptedFiles = Array.from(fileList);
      if (acceptedFiles.length === 0) return;
      const file = acceptedFiles[0];

      if (file.size > 2000000) return alert('2MB이하의 파일만 업로드가능합니다.');
      if (!acceptedSize) return setValue(name, [file] as PathValue<T, Path<T>>);

      const [acceptedWidth, acceptedHeight] = acceptedSize.split('x');
      const image = document.createElement('img') as HTMLImageElement;
      image.src = URL.createObjectURL(file);
      image.onload = () => {
        const width = image.width;
        const height = image.height;

        if (width !== Number(acceptedWidth) || height !== Number(acceptedHeight)) {
          alert(`허용된 이미지 크기는 ${acceptedWidth}x${acceptedHeight} 입니다.`);
          return;
        }

        setValue(name, [file] as PathValue<T, Path<T>>);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [files, name, setValue],
  );

  const handleRemoveFile = (targetFileName: string) => {
    if (Array.isArray(files) && files.length !== 0) {
      const filterFiles = files.filter((file) => file.name !== targetFileName);
      setValue(name, filterFiles as PathValue<T, Path<T>>);
    }
  };

  React.useEffect(
    function observeFileChange() {
      if (!Array.isArray(files)) return;
      const result = files.map((image, index) => {
        if (isFile(image)) {
          const isImage = image as File;
          return { name: isImage.name.normalize('NFC'), src: window.URL.createObjectURL(isImage) };
        }
        return { name: String(index), src: image as string };
      });
      setPreviewFiles(result);
      clearErrors(name);
    },
    [clearErrors, name, files],
  );

  React.useEffect(
    function focusOnInput() {
      if (!errors[name] || !inputFileRef.current) return;
      inputFileRef.current.focus();
    },
    [errors, name],
  );

  return (
    <S.ImageDrop boxSize={boxSize}>
      <Lightbox open={open} close={handleCloseLightbox} slides={previewFiles} />

      {!disabled && (
        <div className="image-drop__wrapper">
          <StyledImageArea
            htmlFor={name}
            boxSize={boxSize}
            ref={inputFileRef}
            onDragEnter={handleDragStart}
            onDragOver={handleDragOver} // dragover 핸들러 추가
            onDragLeave={handleDragEnd}
            onChange={handleUploadImages as unknown as React.FormEventHandler<HTMLLabelElement>}
            onDrop={handleDrop}
          >
            <input id={name} type="file" accept="image/*" {...register(name)} />
            {isDragActive ? <motion.div animate={{ scale: 1.1 }} className="drop-in"></motion.div> : <div className="drop-in"></div>}
          </StyledImageArea>
          <p>{guidText}</p>
          {errors[name] && <ErrorText errors={errors} name={name} margin="0 0 5px 0" />}
        </div>
      )}

      {previewFiles.length !== 0 && (
        <ul className="list">
          {previewFiles.map((item) => (
            <li className="list__item" key={item.name}>
              <Image
                className="list__item--image"
                src={name === 'logoImage' && !item.src ? '/images/empty.png' : item.src}
                width={boxSize}
                height={boxSize}
                alt="컨텐츠 이미지"
                onClick={handleOpenLightbox}
              />
              {!disabled && <FaRegTrashAlt cursor="pointer" className="list__item--remove" onClick={() => handleRemoveFile(item.name)} />}
            </li>
          ))}
        </ul>
      )}
      {previewFiles.length === 0 && disabled && (
        <div className="list__item--empty">
          <p>비어있음</p>
        </div>
      )}
    </S.ImageDrop>
  );
}

const StyledImageArea = styled.label<{ boxSize: number }>`
  border: 2px dashed ${(props) => props.theme.colors.deepSkyblue};
  height: ${(props) => props.boxSize}px;
  width: ${(props) => props.boxSize}px;
  min-width: ${(props) => props.boxSize}px;
  cursor: pointer;
  font-size: 0;
  margin-right: 15px;
  margin-bottom: 15px;
  ${flexCenter}
  :hover {
    transform: scale(1.01);
  }
  .drop-in {
    padding: 15px;
    height: 100%;
  }
  input {
    display: none;
  }
`;

const S = {
  ImageDrop: styled.div<{ boxSize: number }>`
    width: 100%;
    display: flex;
    font-size: 0;
    overflow-x: auto;
    overflow-y: hidden;
    .image-drop {
      &__wrapper {
        display: flex;
        flex-direction: column;
      }
    }
    .list {
      &__item {
        position: relative;
        width: ${(props) => props.boxSize}px;
        height: ${(props) => props.boxSize}px;
        &--image {
          object-fit: contain;
          font-size: 0;
          border: 1px solid #999;
          cursor: pointer;
        }
        &--empty {
          width: ${(props) => props.boxSize}px;
          height: ${(props) => props.boxSize}px;
          border: 1px solid #999;
          ${flexCenter}
          p {
            font-size: 15px;
          }
        }
        &--remove {
          position: absolute;
          top: 5px;
          right: 5px;
          fill: #fff;
          width: 18px;
          height: 18px;
          padding: 5px;
          background-color: gray;
          border-radius: 50%;
          width: 30px;
          height: 30px;
        }
      }
    }
  `,
};
