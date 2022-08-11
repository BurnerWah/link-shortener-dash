import React, { useState } from 'react'
import '@cloudscape-design/global-styles/index.css'
import Header from '@cloudscape-design/components/header'
import Container from '@cloudscape-design/components/container'
import SpaceBetween from '@cloudscape-design/components/space-between'
import Input from '@cloudscape-design/components/input'
import Button from '@cloudscape-design/components/button'
import AppLayout from '@cloudscape-design/components/app-layout'
import Form from '@cloudscape-design/components/form'
import FormField from '@cloudscape-design/components/form-field'

function App() {
  const [link, setLink] = useState('')
  // const [name, setName] = useState('')
  return (
    <AppLayout
      contentHeader={<Header variant="h1">Link Shortener Dashboard</Header>}
      content={
        <Container>
          <SpaceBetween size="s">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                console.log(e)
                console.log(link)
                const data: LinkShortenerLink = {
                  url: link,
                }
                console.log(data)
              }}
            >
              <Form
                header={<Header>Add a link</Header>}
                actions={
                  <SpaceBetween direction="horizontal" size="xs">
                    <Button formAction="none" variant="link">
                      Cancel
                    </Button>
                    <Button variant="primary">Submit</Button>
                  </SpaceBetween>
                }
              >
                <FormField label="Link">
                  <Input
                    value={link}
                    onChange={(event) => setLink(event.detail.value)}
                  />
                </FormField>
              </Form>
            </form>
          </SpaceBetween>
        </Container>
      }
      navigationHide={true}
      toolsHide={true}
    />
  )
}

export default App
