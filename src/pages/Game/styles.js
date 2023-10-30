import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;

  > h1 {
    color: #fffaf0;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin-top: 42px;
    max-width: 1000px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
`;
