import styled from "styled-components";

export const ButtonStyle = styled.button `

      width: 7.7rem;
      height: 2.7rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      background-color: var(--blue);
      color: var(--white-100);
      font-weight: 600;
      font-size: 0.9rem;
      border-radius: 4px;
      border: 1px solid var(--blue);
      transition: background 0.2s;
      cursor: pointer;
      letter-spacing: 0.05rem;         

        &:hover {        
         transition: 0.25s;
         box-shadow: inset 8.8em 0 0 0 var(--blue);
         color: white;           
        }
        &:focus {
          box-shadow: inset 8.5em 0 0 0 var(--blue);
          color: white;
        }        
 
`;