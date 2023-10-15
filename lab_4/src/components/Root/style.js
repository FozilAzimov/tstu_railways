import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const OrderedList = styled.ol``;

const List = styled.li``;

const Title = styled.h2`
margin: 20px 0;
`;

const Form = styled.form``;

const Label = styled.label`
font-size: 16px;
`;

const Type = ({ type }) => {
  switch (type) {
    case 'text': return {
      padding: '4px 0',
      marginRight: '5px',
    };
    case 'button': return {
      padding: '4px',
    };
    default: return {};
  }
}

const Input = styled.input`
${Type};
cursor: ${({ type }) => type === 'button' ? 'pointer' : 'auto'};
`;

const Table = styled.table`
width: 50%;
border: 1px solid #000;
margin-top: 30px;
border-collapse: collapse;
`;
const Tr = styled.tr``;
const Th = styled.th`
border: 1px solid #000;
padding: 5px 10px;
`;
const Td = styled.td`
border: 1px solid #000;
padding: 5px 10px;
`;

export {
  Wrapper,
  OrderedList,
  List,
  Title,
  Form,
  Input,
  Label,
  Table,
  Th,
  Tr,
  Td,
};