import React, { useEffect, useState } from 'react'

import Service from '../utils/http'
import { Avatar, Center, Container, Stack, Text } from '@mantine/core'
const service = new Service();

export default function Profile() {
    const [profileData, setProfileData] = useState(null);
    async function getProfileData(){
        let data = await service.get("user/me");
        setProfileData(data);
        console.log(data);
    }
    useEffect( ()=>{
        getProfileData();
    },[])
    if(!profileData){
      return(
        <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
          <Text size="md">Profile Loading.</Text>
        </Center>
      )
    };
    let d = new Date(profileData? profileData.createdAt : undefined).toDateString();
  return (
    <Container size={"sm"}>
      <Stack  h={300} bg="var(--mantine-color-body)" align="center" justify="center" gap="sm">
      <Avatar variant="light" radius="xl" size="xl" color="cyan" src={profileData?.avatar} mb={'lg'} mt={"lg"} />
      <Text fw={700} size="xl">{profileData?.name} </Text>
      <Text size="sm">{profileData?.email}</Text>
      <Text><strong>User Id: </strong>{profileData?._id}</Text>
      <Text size="md"><strong>Account Created At: </strong>{d}</Text>
      </Stack>
    </Container>
  )
}
