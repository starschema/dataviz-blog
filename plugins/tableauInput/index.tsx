// CustomStringInput.tsx
import { Card, Flex, Grid, Stack, Text, TextInput } from '@sanity/ui'
import { FieldMember, MemberField, ObjectInputProps, set, unset } from 'sanity'

export interface Tableau {
  url: 'string'
  alt: 'string'
  width: 'number'
  height: 'number'
}

export type TableauInputProps = ObjectInputProps<Tableau>

export function TableauInput(props: TableauInputProps) {
  const {
    members,
    renderField,
    renderInput,
    renderPreview,
    renderItem,
    onChange,
  } = props

  const altMember = members.find(
    (member): member is FieldMember =>
      member.kind === 'field' && member.name === 'alt'
  )

  const urlMember = members.find(
    (member): member is FieldMember =>
      member.kind === 'field' && member.name === 'url'
  )

  function handleUrlChange(event: React.ChangeEvent<HTMLInputElement>) {
    const url = event.target.value

    onChange(
      event.currentTarget.value ? set(event.currentTarget.value) : unset()
    )
    // fetch the dimensions
    // set the dimensions
  }

  return (
    <Stack space={3}>
      {urlMember && (
        <MemberField
          member={urlMember}
          renderInput={renderInput}
          renderField={renderField}
          renderItem={renderItem}
          renderPreview={renderPreview}
        />
      )}
      {altMember && (
        <MemberField
          member={altMember}
          renderInput={renderInput}
          renderField={renderField}
          renderItem={renderItem}
          renderPreview={renderPreview}
        />
      )}
      <DimensionFieldsDisplay {...props} />
    </Stack>
  )
}

function DimensionFieldsDisplay(props: TableauInputProps) {
  const {
    value,
    members,
    renderField,
    renderInput,
    renderPreview,
    renderItem,
  } = props

  const widthMember = members.find(
    (member): member is FieldMember =>
      member.kind === 'field' && member.name === 'width'
  )
  const heightMember = members.find(
    (member): member is FieldMember =>
      member.kind === 'field' && member.name === 'height'
  )

  return value?.url ? (
    <Grid columns={2} gap={3}>
      {widthMember && (
        <MemberField
          member={widthMember}
          renderInput={renderInput}
          renderField={renderField}
          renderItem={renderItem}
          renderPreview={renderPreview}
        />
      )}
      {heightMember && (
        <MemberField
          member={heightMember}
          renderInput={renderInput}
          renderField={renderField}
          renderItem={renderItem}
          renderPreview={renderPreview}
        />
      )}
    </Grid>
  ) : (
    <Card tone="caution" radius={4}>
      <Flex height="fill" direction="column" justify="center" align="center">
        <Text>Set the url first</Text>
      </Flex>
    </Card>
  )
}

interface UrlInputProps extends TableauInputProps {
  onUrlChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
function UrlInput(props: UrlInputProps) {
  const {
    value,
    members,
    renderField,
    renderInput,
    renderPreview,
    renderItem,
  } = props

  const urlMember = members.find(
    (member): member is FieldMember =>
      member.kind === 'field' && member.name === 'url'
  )

  return (
    urlMember && (
      <MemberField
        member={urlMember}
        renderInput={renderInput}
        renderField={renderField}
        renderItem={renderItem}
        renderPreview={renderPreview}
      />
    )
  )
}
