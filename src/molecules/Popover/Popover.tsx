import React, { useState } from "react";
import Button from "atoms/Button/Button";
import { Popover as HeadlessPopover } from "@headlessui/react";
import { NetguruOnly, PopoverContainer, PopoverContent } from "./Popover.styled";
import { Colors } from "styles/types";
import { ButtonVariants } from "atoms/Button/types";
import { usePopper } from "react-popper";

interface PopoverProps {
  isNetguruOnly?: boolean;
  triggerText: string;
  triggerVariant?: ButtonVariants;
  triggercolor?: Colors;
  children: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({
  children,
  triggerText,
  triggerVariant,
  triggercolor,
  isNetguruOnly,
}) => {
  let [referenceElement, setReferenceElement] = useState() as any;
  let [popperElement, setPopperElement] = useState() as any;
  let [arrowElement, setArrowElement] = useState() as any;
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "top",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 12],
        },
      },
      {
        name: "arrow",
        options: {
          element: arrowElement,
        },
      },
      {
        name: "flip",
        options: {
          rootBoundary: "document",
        },
      },
    ],
  });
  return (
    <HeadlessPopover>
      <HeadlessPopover.Button
        as={Button}
        variant={triggerVariant}
        color={triggercolor}
        ref={setReferenceElement}
      >
        {triggerText}
      </HeadlessPopover.Button>

      <HeadlessPopover.Panel
        as={PopoverContainer}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <div id="arrow" ref={setArrowElement} style={styles.arrow}></div>
        {isNetguruOnly && <NetguruOnly>Netguru only</NetguruOnly>}
        <PopoverContent>{children}</PopoverContent>
      </HeadlessPopover.Panel>
    </HeadlessPopover>
  );
};

export default Popover;
