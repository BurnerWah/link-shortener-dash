import Alert from '@cloudscape-design/components/alert'
import AppLayout from '@cloudscape-design/components/app-layout'
import Button from '@cloudscape-design/components/button'
import Container from '@cloudscape-design/components/container'
import Form from '@cloudscape-design/components/form'
import FormField from '@cloudscape-design/components/form-field'
import Header from '@cloudscape-design/components/header'
import Input from '@cloudscape-design/components/input'
import Link from '@cloudscape-design/components/link'
import SpaceBetween from '@cloudscape-design/components/space-between'
import '@cloudscape-design/global-styles/index.css'
import React, { useState } from 'react'

function App() {
  const [link, setLink] = useState('')
  const [name, setName] = useState('')
  const [visible, setVisible] = useState(false)
  const [resURL, setResURL] = useState('')
  const [resLink, setResLink] = useState('')
  return (
    <AppLayout
      contentHeader={<Header variant="h1">Link Shortener Dashboard</Header>}
      content={
        <Container>
          <SpaceBetween size="s">
            <form
              onSubmit={async (e) => {
                e.preventDefault()
                console.log(e)
                console.log(link)
                const data: LinkShortenerLink = {
                  url: link,
                }
                if (name.match(/.+/)) {
                  data.name = name
                }
                const result = await fetch('https://dash.brnr.link/api/add', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    // Authorization: `Bearer ${localStorage.getItem('token')}`,
                  },
                  body: JSON.stringify(data),
                })
                const status = await result.json()
                setResLink(status.link)
                setResURL(status.url)
                setVisible(true)
                console.log(status)
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
                <FormField label="Name">
                  <Input
                    value={name}
                    onChange={(event) => setName(event.detail.value)}
                  />
                </FormField>
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
      notifications={
        <Alert
          onDismiss={() => setVisible(false)}
          visible={visible}
          dismissAriaLabel="Close alert"
          dismissible
          type="success"
          header="Link added"
        >
          <Link external href={`https://s.brnr.link${resLink}`}>
            {`https://s.brnr.link${resLink}`}
          </Link>
          {' now redirects to '}
          <Link external href={resURL}>
            {link}
          </Link>
        </Alert>
      }
      navigationHide={true}
      toolsHide={true}
    />
  )
}

export default App
