import React, { useState } from 'react';

import { primerny, data, arr, } from '../Data/data';

import {
  Form,
  Input,
  Label,
  List,
  OrderedList,
  Table,
  Td,
  Th,
  Title,
  Tr,
  Wrapper
} from './style';

export default function Root () {

  const [kode, setKode] = useState(1);

  const Change = ({ target: { value } }) => {
    setKode(value);
  };

  const Click = () => {
    data.forEach(value => {
      (value.kodi === Number(kode)) && arr.push(value);
    });
    setKode('');
  }

  return (
    <Wrapper>

      <OrderedList>
        {
          primerny.map((value, index) => <List key={index}>{value}</List>)
        }
      </OrderedList>

      <Title>Kerakli mahsulot kodini kiriting</Title>

      <Form>
        <Label >Kod raqamini kiriting: </Label>
        <Input type="text" onChange={Change} placeholder='Kode kiriting...' />
        <Input type="button" value="Jo'natish" onClick={Click} />
      </Form>

      <Table>
        <Tr>
          <Th>id</Th>
          <Th>Nomi</Th>
          <Th>Kodi</Th>
          <Th>Turi</Th>
          <Th>Narxi</Th>
        </Tr>
        {
          arr.map(({ id, nomi, kodi, turi, narxi }) => {
            return (
              <Tr key={id}>
                <Td>{id}</Td>
                <Td>{nomi}</Td>
                <Td>{kodi}</Td>
                <Td>{turi}</Td>
                <Td>{narxi}</Td>
              </Tr>
            )
          })
        }
      </Table>

    </Wrapper>
  )
}


