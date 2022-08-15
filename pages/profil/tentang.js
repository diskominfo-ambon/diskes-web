import Layout from '@/components/mengenal-kami/layout';
import styled from 'styled-components';

const Heading = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.2rem;
`;
const Paragraph = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 30px;
  margin: 0;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: .8rem;
  display: block;
`;

const List = styled.ul`
  list-style: numeric;
`;
const ListItem = styled.li`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-bottom: .9rem;
`;

export default function About() {

  return (
    <Layout breadcrumb="Tentang">
      <Heading>Tugas</Heading>
      <Paragraph>Membantu Walikota untuk melaksanakan penyusunan dan pelaksanaan kebijakan di bidang kesehatan.</Paragraph>

      <Heading>Fungsi</Heading>
      <List>
        <ListItem>Perumusan kebijakan teknis urusan pemerintahan di bidang kesehatan</ListItem>
        <ListItem>Pelaksanaan kebijakan di bidang kesehatan</ListItem>
        <ListItem>Pelaksanaan evaluasi dan pelaporan di bidang kesehatan</ListItem>
        <ListItem>Pelaksanaan administrasi dinas</ListItem>
        <ListItem>Pelaksanaan fungsi lain yang diberikan oleh Walikota terkait dengan tugas dan fungsinya</ListItem>
      </List>
      <Heading>Motto</Heading>
      {/* <Paragraph>Aktual dan terpercaya dalam pelayanan informasi</Paragraph> */}
      <Image src="https://ambon.go.id/wp-content/uploads/2021/06/moto-4.png"/>

      <Heading>Struktur Organisasi</Heading>
      <Image src="https://ambon.go.id/wp-content/uploads/2022/04/2.-Dinkes.png"/>

    </Layout>
  );
}