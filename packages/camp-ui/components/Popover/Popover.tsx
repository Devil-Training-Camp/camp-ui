import React, { useState } from 'react'
import styled from 'styled-components'
import {
  autoUpdate,
  flip,
  offset,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react'

const PopoverContent = styled.div`
  box-shadow: ${props => props.theme['base-shadow-lg']};
  border-radius: ${props => props.theme['base-border-radius-md']};
  border: 1px solid ${props => props.theme['border-color']};
`

const CleanButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  outline: inherit;
`

function Popover({ children, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), size({
      apply(args) {
        const { rects, availableHeight, elements } = args
        Object.assign(elements.floating.style, {
          maxHeight: `${availableHeight}px`,
          minWidth: `${rects.reference.width}px`,
        })
      },
    }), shift()],
    whileElementsMounted: autoUpdate,
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ])

  return (
    <>
      <CleanButton ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </CleanButton>
      {isOpen && (
        <PopoverContent
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          {content}
        </PopoverContent>
      )}
    </>
  )
}

export default Popover
