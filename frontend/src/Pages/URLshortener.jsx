import { Button, Container, Stack, TextInput, Text } from '@mantine/core'
import React, { useState } from 'react'
import Service from '../utils/http';
import Response from '../Components/Response';

const service = new Service();
export default function URLshortener() {
    const generateShortUrl = async() => {
        console.log(input?.originalUrl);
        try{
            const data = await service.post("s", input);
            setResponse(data);
            console.log(data);

        }
        catch (error) {
            console.error("Error generating short URL:", error);

        }
    }
    const [input, setInput] = useState({
        originalUrl:"",
        customUrl:"",
        title:"",
        expiryDate:"",
    });
    const [response, setResponse] = useState(null);
    
    return (
        <Container size="sm">
        {!response?
           <>
        <Stack h={700} bg="var(--mantine-color-body)" align="center" justify="center" gap="xl">
        <Text size="xl" ></Text>
            <TextInput
        size="md"
        radius="md"
        label="Original Url"
        withAsterisk
        placeholder="Enter Original Url"
        onChange={(e) => { setInput({ ...input, originalUrl: e.target.value }) }}
        />
            <TextInput
        size="md"
        radius="md"
        label="Custom Url(Optional)"
        placeholder="Enter custom Url"
        onChange={(e) => { setInput({ ...input, customUrl: e.target.value }) }}
        />
        <TextInput
            size="md"
            radius="md"
            label="Title(Optional)"
            placeholder=" EnterTitle"
            onChange={(e) => { setInput({ ...input, title: e.target.value }) }}
        />
        <TextInput
            size={'md'}
             style={{ width: '210px'}}
            type="date"
            radius="md"
            label="Expiry Date(Optional)"
            placeholder="DD/MM/YYYY"
            onChange={(e) => { setInput({ ...input, expiryDate: e.target.value }) }}
        />
        <Button
               onClick={generateShortUrl}
               variant="outline"
               color="cyan"
               size="lg"
               radius="lg">
                   Button
           </Button>

        </Stack>
    </>  :
           <Response response={response} setResponse={setResponse}/>
        }
        </Container>
  )
}
