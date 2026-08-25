import CodeBlock from "./CodeBlock.astro";
import CustomLink from "./CustomLink.astro";
import Callout from "./Callouts.astro";
import HighlightedCode from "./HighlightedCode.astro";
import InlineCode from "./InlineCode.astro";
import Kbd from "./Kbd.astro";
import FileCode from "./FileCode.astro";
import Heading1 from "./elements/Heading1.astro";
import Heading2 from "./elements/Heading2.astro";
import Heading3 from "./elements/Heading3.astro";
import Paragraph from "./elements/Paragraph.astro";
import UnorderedList from "./elements/UnorderedList.astro";
import OrderedList from "./elements/OrderedList.astro";
import ListItem from "./elements/ListItem.astro";
import Blockquote from "./elements/Blockquote.astro";
import MDXImage from "./elements/MDXImage.astro";
import InlineOrBlockCode from "./elements/InlineOrBlockCode.astro";
import NoteCallout from "./elements/NoteCallout.astro";
import WarningCallout from "./elements/WarningCallout.astro";
import ErrorCallout from "./elements/ErrorCallout.astro";
import SuccessCallout from "./elements/SuccessCallout.astro";

export const MDXComponents = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  p: Paragraph,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  blockquote: Blockquote,
  img: MDXImage,
  pre: CodeBlock,
  HighlightedCode,
  code: InlineOrBlockCode,
  a: CustomLink,
  Callout,
  InlineCode,
  Kbd,
  FileCode,
  Note: NoteCallout,
  Warning: WarningCallout,
  Error: ErrorCallout,
  Success: SuccessCallout,
};
