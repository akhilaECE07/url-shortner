import React, { useEffect, useState } from 'react'

import Service from '../utils/http'
import { Avatar, Center, Text } from '@mantine/core'
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
  return (
    <Center style={{ flexDirection:'column'}}>
      <Avatar variant="filled" radius="xl" size="xl" color="cyan" src={profileData?.avatar} mb={'lg'} mt={"lg"} />
      <Text fw={700}>{profileData?.name} </Text>
      <Text size="sm">{profileData?.email}</Text>
      <Text component='span' fw={500}>User ID: </Text><Text component='span' >{profileData?._id}</Text>
      <Text size="md">Created At: {profileData?.createdAt}</Text>
    </Center>
  )
}
