/* eslint-disable react/jsx-props-no-spreading */
// import Dropzone from 'react-dropzone'
// import CircularProgress from '@mui/material/CircularProgress'
import { ErrorMessage, FieldContainer, FieldLabel } from "../../atoms";
// import { useLogic } from './useLogic'
import {
  // DropArea,
  // UploadButton,
  // RemoveIcon,
  Wrapper,
  // UploadIcon,
  // Info,
  // Text,
  // LoaderWrapper,
  // EyeIcon,
} from "./styles";
import { Props } from "./types";
import { defaultProps } from "./defaultProps";

const Index = ({
  label,
  // placeholder,
  // defaultValue,
  // hidden,
  // readOnly,
  isRequired,
  isTouched,
  // disabled,
  error,
  // onValueChange,
  // isLoading,
  // onEyeIconClicked,
  isWithRequiredStar,
}: Props) => {
  // const { onDrop, selectedFile, removeFile, handleEyeIconClick} = useLogic(onValueChange);

  return (
    <FieldContainer>
      <FieldLabel
        label={label}
        isRequired={isRequired}
        isWithRequiredStar={isWithRequiredStar}
      />
      <Wrapper error={(isTouched && !!error) || false}>
        {/* <Dropzone onDrop={onDrop} maxFiles={1}>
          {({ getRootProps, getInputProps }) => (
            // <DropArea {...getRootProps()}>
            //   <input {...getInputProps()} />
            //   <>
            //     {!selectedFile && (
            //       <UploadButton>
            //         <UploadIcon />
            //       </UploadButton>
            //     )}
            //     {selectedFile && <RemoveIcon onClick={removeFile} />}
            //   </>
            //   <Info>
            //     {isLoading && (
            //       <LoaderWrapper>
            //         <CircularProgress />
            //       </LoaderWrapper>
            //     )}
            //     {!isLoading && (
            //       <>
            //         {!selectedFile && <Text>{placeholder}</Text>}
            //         {selectedFile && <Text>{selectedFile?.name || ''}</Text>}
            //       </>
            //     )}
            //   </Info>
            //   <div>
            //     {!isLoading && selectedFile && !error && (
            //       <EyeIcon
            //         onClick={(e) => handleEyeIconClick(e, onEyeIconClicked)}
            //       />
            //     )}
            //   </div>
            // </DropArea>
            <div />
          )}
        </Dropzone> */}
      </Wrapper>
      <ErrorMessage error={error} isTouched={isTouched} />
    </FieldContainer>
  );
};

Index.defaultProps = defaultProps;

export default Index;
