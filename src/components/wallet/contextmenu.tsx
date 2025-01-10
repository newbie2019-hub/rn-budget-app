import { ReactElement } from 'react'
import { Pressable } from 'react-native'
import * as ContextMenu from 'zeego/context-menu'

const ContextMenuCard = ({
  children,
  isActive,
}: {
  children: ReactElement
  isActive?: boolean
}) => {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <Pressable>{children}</Pressable>
      </ContextMenu.Trigger>

      <ContextMenu.Content>
        <ContextMenu.Item key="set-active">
          <ContextMenu.ItemTitle>Set Active</ContextMenu.ItemTitle>
        </ContextMenu.Item>
        <ContextMenu.Item key="add-budget">
          <ContextMenu.ItemTitle>Add Budget</ContextMenu.ItemTitle>
        </ContextMenu.Item>
        <ContextMenu.Item key="update">
          <ContextMenu.ItemTitle>Update</ContextMenu.ItemTitle>
        </ContextMenu.Item>
        <ContextMenu.Item key="remove-wallet">
          <ContextMenu.ItemTitle>Remove</ContextMenu.ItemTitle>
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  )
}

export default ContextMenuCard
