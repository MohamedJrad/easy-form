import styled from "styled-components";
import { RemoveCircleOutline } from "@styled-icons/material/RemoveCircleOutline";
import { Upload } from "@styled-icons/boxicons-regular/Upload";
import { EyeOutline } from "@styled-icons/evaicons-outline/EyeOutline";

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const DropArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  cursor: pointer;
  padding: 0 20px;
`;

export const Wrapper = styled.div<{ error: boolean }>`
  border-radius: 5px;
  position: relative;
  background-color: #f8f8f8;

  border: 1px solid ${({ error }) => (error ? "red" : "#1d292e")};
  height: 60px;
  width: 100%;
  &:hover {
    border: 1px dashed ${({ error }) => (error ? "red" : "#1d292e")};
  }
`;
export const Info = styled.div`
  align-items: center;
  overflow: hidden;

  flex-grow: 1;
  padding: 0 20px;
  display: flex;

  text-align: center;
`;
export const Text = styled.span`
  width: 100%;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UploadButton = styled.button`
  &&& {
    height: 35px;
    width: 35px;
    margin-right: 20px;
    background-color: #1d292e;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export const RemoveIcon = styled(RemoveCircleOutline)`
  &&& {
    color: #8b9193;
    height: 30px;
    width: 30px;
    min-width: 30px;
    margin-right: 20px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;

export const UploadIcon = styled(Upload)`
  &&& {
    color: white;
    height: 25px;
    width: 25px;
  }
`;

export const EyeIcon = styled(EyeOutline)`
  &&& {
    color: #1d292e;
    height: 30px;
    width: 30px;
    min-width: 30px;
    margin-left: 20px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
export const LabelWrapper = styled.div`
  display: flex;
`;
export const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 16px;
  color: black;
  margin-bottom: 5px;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
